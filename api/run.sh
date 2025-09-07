#!/usr/bin/env bash
set -euo pipefail
export CORS_ORIGINS=${CORS_ORIGINS:-http://localhost:3000}
export LOG_LEVEL=${LOG_LEVEL:-INFO}
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
