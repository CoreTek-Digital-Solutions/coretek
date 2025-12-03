# fix-encoding-and-mojibake.ps1
# Run from project root. Makes backups in "encoding-backup" then converts and replaces common mojibake.

# Files to process (js/ts/jsx/tsx in app and components)
$paths = Get-ChildItem -Recurse -File -Include *.js,*.jsx,*.ts,*.tsx -Path .\app, .\components -ErrorAction SilentlyContinue

if ($paths.Count -eq 0) {
  Write-Host "No files found under ./app or ./components. Exiting."
  exit 0
}

$backupDir = ".\encoding-backup"
if (-not (Test-Path $backupDir)) { New-Item -ItemType Directory -Path $backupDir | Out-Null }

function Backup-File($f) {
  $dest = Join-Path $backupDir ($f.FullName -replace "[:\\]","_")
  Copy-Item $f.FullName $dest -Force
  Write-Host "Backed up: $($f.FullName) -> $dest"
}

function Save-Utf8NoBOM($path, $content) {
  # write as UTF8 without BOM
  $bytes = [System.Text.Encoding]::UTF8.GetBytes($content)
  [System.IO.File]::WriteAllBytes($path, $bytes)
}

# common mojibake replacements mapping (left -> right)
$replacements = @{
  'â€”' = '—'   # em dash
  'â€“' = '–'   # en dash
  'â€"' = '”'
  'â€œ' = '“'
  'â€'  = '"'   # fallback
  'â€™' = '’'
  'â€˜' = '‘'
  'â€¢' = '•'
  'â€¦' = '…'
  'Â'   = ''    # stray non-break space markers
}

foreach ($f in $paths) {
  try {
    Backup-File $f

    # Read raw bytes and try to decode as UTF8 first:
    $rawBytes = [System.IO.File]::ReadAllBytes($f.FullName)

    # Try decoding as UTF8; if it throws or includes replacement chars, fall back to Windows-1252
    $utf8 = [System.Text.Encoding]::UTF8
    $text = $null
    try {
      $text = $utf8.GetString($rawBytes)
      # If the text contains the Unicode replacement char � (U+FFFD), it might not be valid UTF8
      if ($text -match "�") {
        throw "Detected replacement char in UTF8 decode"
      }
    } catch {
      # Try Windows-1252 (cp1252) decode
      $cp1252 = [System.Text.Encoding]::GetEncoding(1252)
      $text = $cp1252.GetString($rawBytes)
      Write-Host "Decoded $($f.FullName) as Windows-1252"
    }

    $orig = $text

    # Apply replacements
    foreach ($k in $replacements.Keys) {
      $v = $replacements[$k]
      if ($text -like "*$k*") {
        $text = $text -replace [regex]::Escape($k), $v
      }
    }

    # If content changed, save as UTF8 (no BOM)
    if ($text -ne $orig) {
      Save-Utf8NoBOM $f.FullName $text
      Write-Host "Fixed mojibake and saved UTF-8: $($f.FullName)" -ForegroundColor Green
    } else {
      # Even if not changed, ensure file is UTF8 without BOM
      $current = Get-Content $f.FullName -Raw -ErrorAction SilentlyContinue
      if ($current -ne $null) {
        Save-Utf8NoBOM $f.FullName $current
        Write-Host "Ensured UTF-8 (no BOM): $($f.FullName)"
      }
    }
  } catch {
    Write-Host "Error processing $($f.FullName): $_" -ForegroundColor Red
  }
}

Write-Host ""
Write-Host "Done. Backups are in: $backupDir"
Write-Host "Now restart dev server: npm run dev  and hard-refresh the browser (Ctrl+Shift+R)."
