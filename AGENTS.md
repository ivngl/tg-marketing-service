# AGENTS.md

## Project Overview

Telegram channel analytics SPA (product name: tgpulse). Collects, compares, and analyzes Telegram channels with subscriber stats, growth dynamics, and AI insights.

**Stack**: Django 5.2 + React 19 via Inertia.js, Celery + Redis for background tasks, PostgreSQL, Telethon for Telegram API, Pydantic DTOs, Tailwind CSS + shadcn/ui.

## Commands

### Backend (run from project root)

```sh
uv run ruff check .              # lint
uv run ruff check --fix          # auto-fix lint
uv run ruff format .             # format
uv run ruff format --check       # format check (CI)
python3 -m pytest --tb=short -q  # test
uv run python manage.py runserver  # dev server :8000
```

### Frontend (run from `frontend/`)

```sh
npm run lint          # eslint
npm run typecheck     # tsc --noEmit
npm run build         # tsc -b && vite build
npm run dev           # vite dev server
```

## Code Style

### Python

- 80-char line length, 4-space indent
- Double quotes for strings
- Ruff rules: E (pycodestyle), F (pyflakes), I (isort)
- Excludes: `**/migrations/*`, `settings.py`
- `__init__.py` suppressed for F401 (unused imports)

### TypeScript/React

- 2-space indent, double quotes, semicolons
- Strict TypeScript (`strict: true`, `noUnusedLocals`, `noUnusedParameters`)
- Path alias: `@/` → `src/`
- `cn()` utility (clsx + tailwind-merge) for className merging
- ESLint ignores: `dist/`, `Routes` unused var

## Architecture

- **Inertia.js** bridges Django views and React pages (server returns Inertia responses, React receives props)
- **Feature-Sliced Design (FSD)** in `frontend/src/`: `app/`, `pages/`, `widgets/`, `features/`, `components/`, `lib/`, `store/`
- **RBAC**: roles (`guest`, `user`, `partner`, `channel_moderator`) via `config/mixins.py` + `config/decorators.py`, backed by django-guardian
- **Celery Beat**: daily scheduled channel parsing (11:40 MSK)
- **Service layer**: `apps/homepage/services/` with Pydantic DTOs in `apps/homepage/dto/`
- **Signals**: auto-assign roles on user/channel/partner creation (`apps/users/signals.py`)

## Key Directories

| Directory | Purpose |
|-----------|---------|
| `apps/` | Django modules: `users`, `parser`, `group_channels`, `homepage` |
| `config/` | Django project config, settings, URLs, Celery, RBAC mixins/decorators |
| `frontend/src/` | React SPA (FSD structure) |
| `templates/` | Django server-side HTML (being migrated to Inertia/React) |
| `tests/` | Fixture data generator (regex-based via `rstr.xeger`) |
| `docs/` | RBAC docs, design specs, interactive prototype |

## Conventions

- Test files: `test_*.py` (pytest discovers by this pattern, not `tests.py`)
- Imports: auto-sorted by ruff isort (grouped: stdlib, third-party, local)
- Django models use `AbstractUser` for user model (`apps/users/models.py`)
- Frontend components: PascalCase files, `React.FC` typing
- Logging: `logging.getLogger(__name__)` per module
