# OctoFit Tracker — Base44 Dev Environment

## Overview

Multi-tier fitness tracker app for Mergington High School.

- **Frontend**: React 19 + Vite + Bootstrap + react-router-dom (port 5173, mapped to host 3000)
- **Backend**: Node.js + Express + TypeScript + Mongoose (port 8000)
- **Database**: MongoDB (port 27017, internal only)

## Running

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

The frontend proxies `/api/*` requests to the backend via Vite's dev-server proxy, so the
app uses a single origin — no CORS configuration needed.

## Architecture notes

- The Vite dev server proxies `/api` to `http://backend:8000` (Docker internal network).
- The seed service runs once on startup (after the backend is healthy) to populate MongoDB
  with sample users, teams, activities, leaderboard entries, and workouts.
- Both frontend and backend use bind-mounted source with live-reload dev commands, so edits
  appear without rebuilding images.
- `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` is passed through to the frontend container so
  Vite accepts the preview proxy hostname.

## API routes

- `GET/POST /api/users` — list/create users
- `GET/POST /api/teams` — list/create teams
- `GET/POST /api/activities` — list/create activities
- `GET/POST /api/leaderboard` — list/create leaderboard entries
- `GET/POST /api/workouts` — list/create workouts
- `GET /api/health` — health check

## No external secrets required

All infrastructure (MongoDB) runs locally in compose. No third-party API keys are needed.
