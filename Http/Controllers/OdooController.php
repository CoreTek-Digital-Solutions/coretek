<?php
namespace App\Http\Controllers;

use App\Services\OdooClient;
use Illuminate\Http\Request;

class OdooController extends Controller
{
    protected OdooClient $odoo;

    public function __construct(OdooClient $odoo)
    {
        $this->odoo = $odoo;
    }

    // Example endpoint: list products
    public function products(Request $request)
    {
        $fields = $request->get('fields', ['id', 'name', 'list_price', 'default_code']);
        $domain = $request->get('domain', []);
        $products = $this->odoo->searchRead('product.product', $domain, $fields);
        return response()->json($products);
    }

    // Example: push order to Odoo (simplified)
    public function pushOrder(Request $request)
    {
        $data = $request->validate([
            'partner_id' => 'required|integer',
            'order_lines' => 'required|array'
        ]);

        // Build order vals for sale.order creation (simplified)
        $vals = [
            'partner_id' => $data['partner_id'],
            'order_line' => array_map(function($line) {
                // format: (0,0, {product_id, product_uom_qty, price_unit})
                return [0, 0, [
                    'product_id' => $line['product_id'],
                    'product_uom_qty' => $line['qty'],
                    'price_unit' => $line['price'],
                ]];
            }, $data['order_lines'])
        ];

        $orderId = $this->odoo->create('sale.order', $vals);
        return response()->json(['order_id' => $orderId]);
    }
}
