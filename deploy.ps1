# Deploy del portfolio a GitHub Pages desde Windows.
# Uso (desde la raíz del repo):   .\deploy.ps1
# Opciones:                       .\deploy.ps1 -DryRun     (todo menos publicar)
param([switch]$DryRun)

$ErrorActionPreference = 'Stop'
Push-Location (Join-Path $PSScriptRoot 'mi-portfolio')
try {
  if (-not (Test-Path 'node_modules')) { npm ci; if ($LASTEXITCODE) { exit $LASTEXITCODE } }
  if ($DryRun) { npm run deploy -- --dry-run } else { npm run deploy }
  exit $LASTEXITCODE
} finally {
  Pop-Location
}
