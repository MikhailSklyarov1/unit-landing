function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем дефолтное поведение формы

  const phoneNumber = document.getElementById('phone').value;
  const username = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;

  sendDataToServer(phoneNumber, username, comment);
});

async function sendDataToServer(phoneNumber, username, comment) {
  const url = 'http://unit-vlg.ru:3333/'; // URL вашего сервера

  // Данные, которые будут отправлены на сервер
  const data = {
    phoneNumber: phoneNumber,
    username: username,
    comment: comment
  };

  try {
    // Отправка POST-запроса с использованием fetch
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    // Обработка ответа сервера
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log('Успешный ответ:', jsonResponse);
    } else {
      console.error('Ошибка при отправке данных:', response.statusText);
    }
  } catch (error) {
    console.error('Ошибка:', error);
  }
}