# Weather
Задача для участия в "Школе будущих СТО".

Сайт с прогнозом погоды, уровень сложности: "Задача со звёздочкой".

Используемый стек технологий:
- JavaScript
- React
- Express
- MongoDB

Пользовательский интерфейс: браузер

Основные этапы выполнения программы:
- пользователь переходит на сайт
- при загрузке страницы отправляется запрос в базу данных на статистику самых запрашиваемых прогнозов погоды
- на странице отображается поле для ввода и шесть самых запрашиваемых городов с прогнозом погоды
- пользователь вводит название города в поле для ввода и нажимает кнопку с изображением "лупы" или клавишу "Enter"
- формируется и отправляется запрос на API OpenWeather
- формируется и отправляется запрос на сервер для добавления статистики о запрашиваемых городах в базу данных
- полученный ответ от OpenWeather используется для формирования карточки с прогнозом погоды
- карточка с сформированным прогнозом отображается на экране
- при перезагрузке страницы статистика шести самых популярных прогнозов по городам обновляется на сайте

Как развернуть проект у себя:

1) Открыть терминал в папке, в которую вы хотите сохранить проект
2) Склонировать проект к себе на компьютер использовав в терминале команду - "git clone https://github.com/ilyaKodit/weather.git"
3) Открыть два терминала, перейти в обоих в папку проекта и последовательно ввести следующие команды:

В первом терминале:

- "cd backend"
- "npm install" или "yarn"
- Дождаться установки всех зависимостей
- "npm run dev" или "yarn dev"

Во втором терминале

- "cd frontend"
- "npm install" или "yarn"
- Дождаться установки всех зависимостей
- "npm run start" или "yarn start"

4) Ввести в адресной строке браузера http://localhost:4001/