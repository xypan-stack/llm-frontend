#!/bin/bash
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
fi
npm run dev -- -p $FRONTEND_PORT