PORT ?= 8000

migrate:	
	uv run python manage.py makemigrations
	uv run python manage.py migrate

collectstatic:
	uv run python manage.py collectstatic --noinput

dev:
	uv run python manage.py runserver &
	cd frontend && npm run dev

prod-run:
	uv run gunicorn -b 0.0.0.0:$(PORT) config.wsgi

lint:
	uv run ruff

lint-fix:
	uv run ruff check --fix

redis:
	redis-server

celery:
	uv run celery -A config worker --loglevel=info

celery-beat:
	uv run celery -A config beat --loglevel=info

flower:
	uv run celery -A config flower

s:
	uv run python manage.py start_telegram_session

test:
	python3 -m pytest --tb=short -q

install:
	uv sync
	cd frontend && npm install

install-backend:
	uv sync

install-frontend:
	cd frontend && npm install

.PHONY: install install-backend install-frontend