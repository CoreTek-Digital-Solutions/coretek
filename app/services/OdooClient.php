<?php
namespace App\Services;

use GuzzleHttp\Client;

class OdooClient
{
    protected Client $http;
    protected string $url;
    protected string $db;
    protected string $username;
    protected string $password;
    protected int $uid;

    public function __construct()
    {
        $this->url = config('services.odoo.url') ?? env('ODOO_URL');
        $this->db = config('services.odoo.db') ?? env('ODOO_DB');
        $this->username = config('services.odoo.username') ?? env('ODOO_USERNAME');
        $this->password = config('services.odoo.password') ?? env('ODOO_PASSWORD');
        $this->http = new Client(['base_uri' => $this->url, 'timeout' => env('ODOO_TIMEOUT', 20)]);
    }

    protected function jsonRpcCall(array $payload)
    {
        $response = $this->http->post('/jsonrpc', [
            'json' => $payload,
            'headers' => ['Content-Type' => 'application/json']
        ]);
        $body = json_decode((string) $response->getBody(), true);
        return $body['result'] ?? $body;
    }

    public function authenticate()
    {
        if ($this->uid) return $this->uid;

        $payload = [
            'jsonrpc' => '2.0',
            'method'  => 'call',
            'params'  => [
                'service' => 'common',
                'method'  => 'login',
                'args'    => [$this->db, $this->username, $this->password]
            ],
            'id' => time()
        ];

        $result = $this->jsonRpcCall($payload);
        if (isset($result['uid'])) {
            $this->uid = $result['uid'];
            return $this->uid;
        }

        throw new \Exception('Odoo authentication failed: ' . json_encode($result));
    }

    public function executeKw(string $model, string $method, array $args = [], array $kwargs = [])
    {
        $this->authenticate();
        $payload = [
            'jsonrpc' => '2.0',
            'method'  => 'call',
            'params'  => [
                'service' => 'object',
                'method'  => 'execute_kw',
                'args'    => [
                    $this->db,
                    $this->uid,
                    $this->password,
                    $model,
                    $method,
                    $args,
                    $kwargs
                ]
            ],
            'id' => time()
        ];
        return $this->jsonRpcCall($payload);
    }

    // Convenience helpers
    public function searchRead(string $model, array $domain = [], array $fields = [], array $options = [])
    {
        $kwargs = array_merge(['fields' => $fields], $options);
        return $this->executeKw($model, 'search_read', [$domain], $kwargs);
    }

    public function create(string $model, array $values)
    {
        return $this->executeKw($model, 'create', [$values]);
    }

    public function write(string $model, array $ids, array $values)
    {
        return $this->executeKw($model, 'write', [$ids, $values]);
    }

    public function search(string $model, array $domain = [], array $kwargs = [])
    {
        return $this->executeKw($model, 'search', [$domain], $kwargs);
    }
}
