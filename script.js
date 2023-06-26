/*const http = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

/*function calculateCalories() {
  const age = Number(document.getElementById("age").value);
  const gender = document.querySelector(
    'input[name="gender"]:checked'
  )?.value;
  const weight = Number(document.getElementById("weight").value);
  const height = Number(document.getElementById("height").value);
  const activityLevel = document.getElementById("activity").value;
  //const goal = document.getElementById("goal").value;
  //const macroNutrientsSelect =
    //document.getElementById("macro-nutrients").value;
  const loadingDiv = document.getElementById("loading");
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");

  // Сброс результатов и ошибок
  resultDiv.innerHTML = "";
  errorDiv.innerHTML = "";

  // Проверка введенных значений
  if (!age) {
    errorDiv.innerHTML = "Ошибка: Заполните поле 'Age'";
    return;
  }
  if (!gender) {
    errorDiv.innerHTML = "Ошибка: Выберите поле 'Gender'";
    return;
  }
  if (!weight || isNaN(weight) || weight < 40 || weight > 160) {
    errorDiv.innerHTML = "Ошибка: Некорректное значение в поле 'Weight'";
    return;
  }
  if (!height || isNaN(height) || height < 130 || height > 230) {
    errorDiv.innerHTML = "Ошибка: Некорректное значение в поле 'Height'";
    return;
  }
  if (!activityLevel) {
    errorDiv.innerHTML =
      "Ошибка: Выберите значение в поле 'Activity Level'";
    return;
  }

  // Показать сообщение о загрузке
  loadingDiv.style.display = "block";

  // Формирование URL запроса
  //const baseUrl = "https://fitness-calculator.p.rapidapi.com";
  const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&weight=${weight}&height=${height}&activitylevel=${activityLevel}`;
  
  // Опции для запроса
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":
        "a456518623msh308f85c8cdc0685p1504cejsn468aa2a2bb58",
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
  };

  // Отправка запроса к API
  fetch(url, options)
    .then((response) => {
      // Скрыть сообщение о загрузке
      loadingDiv.style.display = "none";

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .then((data) => {
      console.log(data); // Выводим данные в консоль для отладки
      const calorieResult = data.data?.BMR;
      
      if (calorieResult) {
        resultDiv.innerHTML = `Daily calorie: ${calorieResult}`;
      } else {
        errorDiv.innerHTML = "Ошибка: Неверный формат данных";
      }
    })
    .catch((error) => {
      // Скрыть сообщение о загрузке
      loadingDiv.style.display = "none";

      // Отобразить ошибку
      if (error.message === "Failed to fetch") {
        errorDiv.innerHTML = `Ошибка: ${error.message}`;
      } else {
        errorDiv.innerHTML = "Ошибка: 404  Not Found" + error.message;
      }
    })
    .finally(() => {
      // Сбросить сообщение о загрузке
      loadingDiv.style.display = "none";
    });
}

// Привязка функции calculateCalories к событию отправки формы
const form = document.getElementById("calculatorForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  calculateCalories();
}); */
