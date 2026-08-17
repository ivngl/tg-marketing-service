# Фронтенд

React + TypeScript, интегрируется с Django через **Inertia.js** и **django-vite**.

## Стек

- **TypeScript**
- **React 19**
- **Mantine** — библиотека UI-компонентов и хуков (`@mantine/core`, `@mantine/hooks`)
- **Redux Toolkit** — управление состоянием
- **React Hook Form** — работа с формами
- **Vite** — сборка и dev-сервер
- **Inertia.js** (`@inertiajs/react`) — навигация и передача данных без API-слоя
- Остальные зависимости — в [`package.json`](package.json)

## Методологии и соглашения

- Архитектура — [Feature-Sliced Design (FSD)](https://feature-sliced.design/ru/): слои `app/`, `pages/`, `widgets/`, `features/`, `components/`.
- Вёрстка — **mobile first**.
- Названия веток в git: `[type]/[short-description]`. Возможные типы:
  - `feat` — добавляет функциональность для конечного пользователя;
  - `refactor` — изменения кода без новой функциональности и без фикса багов;
  - `bugfix` — исправление ошибок;
  - `chore` — изменения, не влияющие на код приложения (зависимости / конфиги / CI / скрипты и пр.);
  - `docs` — документация.

## Как это работает

Проект — **Inertia SPA**, а не отдельный фронтенд с API:

- HTML и стартовые данные страницы отдаёт **Django** (`make dev` → `http://localhost:8000`).
- В dev-режиме скрипты подключаются с Vite dev-сервера (HMR), URL ассетов генерирует `django-vite` (`base: "/static/"` в [`vite.config.ts`](vite.config.ts)).
- Навигация по ссылкам и отправка форм идут через Inertia-запросы на **тот же origin** (`localhost:8000`), поэтому CORS и отдельный API-слой не нужны.

> Открывать нужно **`http://localhost:8000`**, а не `http://localhost:5173`. Vite — только сервер ассетов для разработки; сам по себе (`/static/`) он не отдаёт Inertia-страницу.

## Запуск (dev, HMR)

Запустите два процесса в отдельных терминалах:

```sh
# терминал 1 — Django (отдаёт страницы и данные)
make dev
# → http://localhost:8000
```

```sh
# терминал 2 — Vite dev-сервер (ассеты + HMR)
cd frontend
npm run dev
# → http://localhost:5173/static/
```

Откройте `http://localhost:8000` в браузере.

- Правки в `frontend/src/**` (компоненты, стили) применяются мгновенно через HMR.
- Новые файлы в `frontend/src/pages/` подхватываются автоматически (`import.meta.glob`), компонент указывается именем в `inertia_render(request, "ComponentName", ...)`.
- Правки на стороне Django (views, props, шаблоны) применяются после перезагрузки страницы.

## Сборка (prod)

```sh
npm run build      # tsc -b && vite build → frontend/static/ + manifest.json
cd ..
make collectstatic # собрать статику в staticfiles/
make prod-run      # Gunicorn → http://localhost:8000
```

Требования для prod-режима: `DEBUG=False` (или не задана) в `.env`. Тогда `django-vite` читает `manifest.json` и подключает собранные ассеты с хешами. Пути согласованы:

- `build.outDir = "static"` → `frontend/static/`
- `STATICFILES_DIRS = [frontend/static]`
- `manifest_path = staticfiles/manifest.json` (после `collectstatic`)

## Скрипты

> Все команды выполняются из папки `frontend/`.

| Команда | Действие |
|---------|----------|
| `npm run dev` | Vite dev-сервер (HMR, только для разработки) |
| `npm run build` | Проверка типов и сборка (`tsc -b && vite build`) |
| `npm run preview` | Предпросмотр собранного приложения |
| `npm run lint` | ESLint |
| `npm run typecheck` | Проверка типов (`tsc -b`) |

Остальные скрипты — в [`package.json`](package.json).
