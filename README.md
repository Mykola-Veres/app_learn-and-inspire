Этот проект был создан при помощи
[Create React App](https://github.com/facebook/create-react-app).

Маршрутизация Если приложение использует библиотеку `react-router-dom` для
маршрутизации, необходимо дополнительно настроить компонент `<BrowserRouter>`,
передав в пропе `basename` точное название твоего репозитория. Слеш в начале
строки обязателен.

```jsx
<BrowserRouter basename="/your_repo_name">
  <App />
</BrowserRouter>
```
