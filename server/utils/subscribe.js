const nodemailer = require('nodemailer');

// Создание транспортера для отправки почты
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Здесь можно указать почтовый сервис, например, Gmail, Mail.ru, и т.д.
  auth: {
    user: 'your_email@gmail.com', // Здесь нужно указать вашу почту
    pass: 'your_password' // Здесь нужно указать пароль от вашей почты
  }
});

// Определение функции для отправки подписки на электронную почту
function sendSubscriptionEmail(email) {
  const mailOptions = {
    from: 'your_email@gmail.com', // Отправитель
    to: email, // Получатель
    subject: 'Подписка на электронную почту', // Тема письма
    text: 'Вы успешно подписались на нашу рассылку.' // Текст письма
  };

  // Отправка письма
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Ошибка отправки письма:', error);
    } else {
      console.log('Письмо успешно отправлено:', info.response);
    }
  });
}

// Пример использования функции отправки подписки на электронную почту
sendSubscriptionEmail('subscriber@example.com');