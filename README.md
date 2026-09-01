# Next Apps

Монорепозиторий на Nx с next.

Основное приложение — `apilab-main`: https://apilab.ru/

## Технологии

- [Next.js](https://nextjs.org/) 16;
- [React](https://react.dev/) 19;
- [TypeScript](https://www.typescriptlang.org/);
- [Nx](https://nx.dev/) 23;
- SCSS;
- `next-intl`;
- Jest и ESLint.

## Структура проекта

```text
apps/
  apilab-main/       основное Next.js-приложение
    public/          статические файлы и изображения
    src/app/         страницы и layout
    src/sections/    секции сайта
tools/
  build-apilab-main-ssg.mjs  скрипт статического экспорта
```

## Требования

- Node.js 24 или новее;
- npm.

## Установка и запуск

Установите зависимости:

```bash
npm install
```

Запустите приложение в режиме разработки:

```bash
npx nx dev apilab-main
```

После запуска сайт будет доступен по адресу [http://localhost:3000](http://localhost:3000). Английская версия находится по адресу `/en`.

## Проверка и сборка

```bash
# Проверка ESLint
npx nx lint apilab-main

# Запуск тестов
npx nx test apilab-main

# Production-сборка
npm run build:apilab-main

# Запуск production-сборки
npx nx start apilab-main
```

## Статический экспорт

Для создания полностью статической версии выполните:

```bash
npm run build:apilab-main:ssg
```

Готовые файлы появятся в каталоге `apps/apilab-main/out`. Их можно разместить на GitHub Pages или любом другом статическом хостинге.

## Автоматический деплой

Workflow `.github/workflows/deploy-apilab-main.yml` собирает статический экспорт,
сохраняет его как GitHub Actions artifact и копирует содержимое на сервер по FTP.
Он запускается после изменений `apilab-main` в ветке `master`, а также вручную через
`workflow_dispatch`.

Создайте GitHub Environment с именем `production` и добавьте в него secrets:

- `FTP_SERVER` — IP-адрес FTP-сервера;
- `FTP_USERNAME` — логин FTP;
- `FTP_PASSWORD` — пароль FTP.
- `FTP_TARGET_DIR` — каталог сайта на FTP, например

Деплой загружает файлы только в `FTP_TARGET_DIR`, создаёт и перезаписывает файлы из
свежей сборки, но никогда не удаляет файлы или каталоги на сервере. Поэтому соседние
домены и поддомены не будут затронуты. Совпадающие по имени файлы сайта при этом
будут обновлены.

## Работа с Nx

Посмотреть доступные задачи приложения:

```bash
npx nx show project apilab-main
```

Открыть граф зависимостей workspace:

```bash
npx nx graph
```
