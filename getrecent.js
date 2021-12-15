var inBody = function(){            // Создаём анонимную функцию. Помещаем её в переменную "inBody"
   var xhr = new XMLHttpRequest()  // Создаём локальную переменную XHR, которая будет объектом XMLHttpRequest
   xhr.open('GET', 'menu.html')     // Задаём метод запроса и URL  запроса
   xhr.onload = function(){        // Используем обработчик событий onload, чтобы поймать ответ сервера XMLHttpRequest
      console.log(xhr.response)           // Выводим в консоль содержимое ответа сервера. Это строка!
      document.body.innerHTML = xhr.response  // Содержимое ответа, помещаем внутрь элемент "body" 
   }
   xhr.send()  // Инициирует запрос. Посылаем запрос на сервер.
}
inBody()    // Запускаем выполнение функции получения содержимого файла