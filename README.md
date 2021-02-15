# React dashboard for display a list of created A/b tests.

## Описание
Тестовое задание для Frontend разработчика.

## Доступные функции

1. Получение и отображение списка A/b тестов(используется json-server и concurrently для параллельного запуска портов) по макету Figma. При загрузке данных отображается лоадер.
2. Если при загрузке данных с апи происходит ошибка выводится сообщение и кнопка Try Again.
2. При наведении на строку таблицы она выделяется как на макете.
3. Сайты отображаются без протокола http или https и www.
4. Роутинг между страницами: dashboard, results и finalize.
5. Когда пользователь нажимает кнопку Results или Finalize, происходит перенаправление на URL-адреса  
/results/[testId] и /finalize/[testId] без перезагрузки окна браузера.
6. Сортировка элементов по имени, типу, статусу и сайту. Графическим элементов указывается направление сортировки.
7. Фильтрация элементов с отображением подходящих элементов в списке. Если совпадений не найдено, то выводится соответствующее сообщение и кнопка сброса. Так же отображается количество найденных элементов.

![dashboard-mockup](https://user-images.githubusercontent.com/55539864/107945133-3cc62080-6fa0-11eb-8ad9-477741417a34.png)


## Запуск приложения

1. `git clone https://github.com/di-i/frontend-interview-task.git`
2. `cd frontend-interview-task`
3. `npm install`
4. `npm run dev`
