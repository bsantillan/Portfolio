#!/usr/bin/env bash
# Deploy del portfolio a GitHub Pages (macOS / Linux / Git Bash).
# Uso (desde la raíz del repo):   ./deploy.sh            ./deploy.sh --dry-run
set -euo pipefail
cd "$(dirname "$0")/mi-portfolio"
[ -d node_modules ] || npm ci
npm run deploy -- "$@"
