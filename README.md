# SHINUY — Architecture, Engineering & Design

Статический лендинг архитектурного бюро SHINUY.

## Стэк

- Чистый HTML + CSS (Inter / Cormorant Garamond через Google Fonts)
- React 18 production + Babel Standalone — JSX компилируется в браузере на лету (без сборки)
- Все ассеты локальные (`assets/`), внешний CDN — только React, Babel и шрифты

## Структура

```
index.html               ← точка входа
app.jsx                  ← bootstrap React-приложения, корневое состояние
foundation.jsx           ← общие компоненты и хуки
sections-top.jsx         ← Nav, Hero, Philosophy, Principles
sections-typology.jsx    ← Audience, Typology
sections-services.jsx    ← Services, Roles
sections-bottom.jsx      ← Advantages, Process, Ticker, Quote, CTA, Footer
translations.jsx         ← словарь UA / RU / EN, LangContext
assets/
  logo_*.svg, logo_*.png
  portfolio/             ← 10 архитектурных рендеров
```

## Деплой на Vercel

1. Залить репозиторий в GitHub / GitLab.
2. На Vercel импортировать проект.
3. Framework Preset: **Other** (статический сайт).
4. Build / Output / Root Directory — оставить пустыми, Vercel отдаст корень как есть.

## Локальный запуск

Открыть `index.html` напрямую из файловой системы **не сработает** — браузер
блокирует подгрузку `script type="text/babel" src="*.jsx"` по CORS. Нужен
любой статический сервер, например:

```
npx serve .
```
