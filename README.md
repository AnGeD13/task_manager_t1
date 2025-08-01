# Описание проекта

Менеджер задач - приложение (SPA) для планирования задач.

Текущий функционал позволяет просматривать список задач, фильтровать его по категориям, статусу и приоритету, а также создавать новые задачи и редактировать уже существующие. 

---

## Стек и инструменты разработки

- **Vite**
- **React** 
- **TypeScript**
- **React Router v6**
- **Redux Toolkit**
- **Express.js**
- **Nodemon**
- **CSS Modules**
- **AdmiralDS**
- **React Icons**

---

# Установка проекта

Установка зависимостей

```bash
npm install
```

Запуск проекта

```bash
npm run dev
```

Сборка проекта

```bash
npm run build
```

Запуск сервера
1. Перейдите в папку `server`
2. Установите зависимости: 
```bash
npm install
```
3. Запустите сервер:
```bash 
npm run dev
```
---

# Комментарии по проекту

При работе со списком задач использовались Redux Toolkit и сервер для хранения задач.

## Клиент

Для упрощения описания алиасов в ts.config.app.json и vite.config.ts используется плагин `vite-tsconfig-paths`. С его помощью псевдонимы путей нужно задать только в ts.config.app.json, а vite.config.ts с помощью tsconfigPaths() автоматически читает их из ts.config.app.json.


### Маршруты

- Главная страница с задачами: /
- Страница создания новой задачи: /task/new
- Страница просмотра и редактирования задачи: /task/:id.
  ID представляет собой дату создания задачи в миллисекундах, приведенную к строке.


### Архитектура

В проекте используется архитектура **Feature-Sliced Design**. FSD структурирует приложение по логическим слоям, каждый из которых отвечает за определенную часть функциональности.

#### Слои

- **app/**: Глобальная конфигурация приложения.
  - `app/store`: Redux store, централизованно управляющий состоянием.
  - `app/styles`: Глобальные стили проекта.
  - `app/index.tsx`: Точка входа в приложение.
- **pages/**: Страницы приложения.
  - `@pages/home/`: Страница для отображения списка задач.
  - `@pages/detail/`: Страница для отображения задачи и её редактирования. Также используется при создании задачи.
- **widgets/**: Виджеты - большие самодостаточные куски функциональности.
  - `@widgets/header`: Контейнер для вводной части сайта.
  - `@widgets/tasklist`: Список задач.
- **features/**: Функциональные возможности.
  - `@features/edit-task`: Хук для редактирования/создания задачи.
  - `@features/filter`: Фильтр по типу задачи.
  - `@features/filter-task`: Хук для фильтрации списка задач на главной странице.
- **entities/**: Бизнес-сущности.
  - `@entities/task`: Сущность задачи, содержащая типы и taskSlice, используемый в глобальном хранилище.
  - `@entities/task-card`: Карточка задачи.
- **shared/**: Переиспользуемые компоненты и утилиты.
  - `@shared/confirm-modal`: Модальное окно для подтверждения информации.
  - `@shared/required-field`: Компонент "*" для обозначения обязательного поля.
  - `@shared/utils`: Утилиты (например, форматирование даты).


## Сервер

Для сервера используется модульная архитектура.

### Модули
- **routes/**: Маршруты определяют ендпойнты и связывают их с функциями контроллеров. Маршруты служат входной точкой для HTTP-запросов и передают логику контроллерам.
- **controllers/**: Контроллеры содержат бизнес-логику обработки запросов. Каждая функция контроллера обрабатывает запрос, взаимодействует с сервисами или источниками данных и отправляет ответ.
- **services/**: Сервисы отвечают за бизнес-логику и операции с данными. Сервисы отделяют операции с данными от контроллеров, улучшая  переиспользуемость и тестирование.
- **middleware/**: Промежуточное ПО содержит функции, обрабатывающие запросы до их передачи в контроллер (например, CORS, обработка ошибок).
- **types/**: Эта папка содержит типы используемых данных.

### Маршруты

Базовый url: http://localhost:3000/api

- Get: / - получение всех задач
- Post: /task/new - создание задачи
- Get: /task/:id - получение задачи по ид
- Update: /task/:id - изменение задачи по ид
- Delete: /task/:id - удаление задачи по ид
