# patch-darkmode.ps1
# Run from project root (e.g. C:\xampp\htdocs\coretek)
# This will backup changed files to patch-backup\ and apply safe replacements.

$filesToPatch = @(
  ".\components\FeaturedCard.js",
  ".\components\Services.js",
  ".\components\Testimonials.js",
  ".\components\Team.js",
  ".\components\Pricing.js",
  ".\app\page.js",
  ".\app\layout.js"
)

# Where to put backups
$backupDir = ".\patch-backup"
if (-not (Test-Path $backupDir)) { New-Item -ItemType Directory -Path $backupDir | Out-Null }

function Backup-File($path) {
  if (Test-Path $path) {
    $dest = Join-Path $backupDir (Split-Path $path -Leaf)
    Copy-Item $path $dest -Force
    Write-Host "Backed up: $path -> $dest"
    return $true
  } else {
    Write-Host "Skipped (not found): $path" -ForegroundColor Yellow
    return $false
  }
}

function Replace-InFile($path, $old, $new) {
  if (-not (Test-Path $path)) { return }
  $text = Get-Content $path -Raw
  if ($text -like "*$old*") {
    $newText = $text -replace [regex]::Escape($old), $new
    Set-Content $path $newText -Encoding UTF8
    Write-Host "Replaced '$old' -> '$new' in $path"
  }
}

# 1) Backup & patch each component file
foreach ($f in $filesToPatch) {
  $ok = Backup-File $f
  if ($ok) {
    # Replace faint color classes with stronger ones
    Replace-InFile $f "text-gray-200" "text-gray-800"
    Replace-InFile $f "text-gray-300" "text-gray-700"
    Replace-InFile $f "text-gray-400" "text-gray-600"
    Replace-InFile $f "text-gray-500" "text-gray-600"  # if used as body text
    # Add dark card background where a simple 'bg-white rounded-lg shadow' exists
    Replace-InFile $f "bg-white rounded-lg shadow" "bg-white dark:bg-[#0d1a32] rounded-lg shadow"
    Replace-InFile $f "bg-white rounded-xl shadow" "bg-white dark:bg-[#0d1a32] rounded-xl shadow"
  }
}

# 2) Ensure Team.js uses 'prevent-invert' on <Image> or <img>
$teamPath = ".\components\Team.js"
if (Test-Path $teamPath) {
  $teamText = Get-Content $teamPath -Raw
  if ($teamText -notmatch "prevent-invert") {
    # Try to add class to Image tags (best-effort): add prevent-invert to className occurrences for images
    $newTeamText = $teamText -replace '(className\s*=\s*"(.*?)rounded-full.*?)"', 'className="$1 prevent-invert"'
    Set-Content $teamPath $newTeamText -Encoding UTF8
    Write-Host "Added 'prevent-invert' to Team.js Image className occurrences (best-effort)."
  } else {
    Write-Host "Team.js already contains 'prevent-invert'."
  }
}

# 3) Append safe CSS to app/globals.css (prevents global inversion & adds helper)
$globals = ".\app\globals.css"
if (Test-Path $globals) {
  Backup-File $globals
  $append = @"
  
/* --- patch-darkmode additions (do not remove) --- */
/* Prevent accidental global inversion of all images in dark mode */
.dark img {
  filter: none !important;
  -webkit-filter: none !important;
}

/* Helper to ensure certain images never get filters */
.prevent-invert {
  filter: none !important;
  -webkit-filter: none !important;
}

/* Logo SVG color via currentColor: use .logo-svg to color it */
.logo-svg { color: inherit; }
.dark .logo-svg { color: #F7C948; } /* yellow accent for dark mode logo */
  
/* --- end patch-darkmode additions --- */

"@
  # append only if not already present
  $gText = Get-Content $globals -Raw
  if ($gText -notmatch "patch-darkmode additions") {
    Add-Content $globals $append -Encoding UTF8
    Write-Host "Appended dark-mode helper CSS to $globals"
  } else {
    Write-Host "$globals already contains patch CSS (skipped append)."
  }
} else {
  Write-Host "Warning: $globals not found  please add the CSS snippet to your globals.css manually." -ForegroundColor Yellow
}

# 4) Inform user about manual checks
Write-Host ""
Write-Host "Patch complete. Files backed up to: $backupDir" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps (run these):"
Write-Host "  1) Stop any running dev server and start it again"
Write-Host "       npm run dev"
Write-Host "  2) Hard-refresh browser (Ctrl+Shift+R) or open DevTools and disable cache"
Write-Host ""
Write-Host "If you don't like the changes, you can restore backups from the 'patch-backup' folder."
