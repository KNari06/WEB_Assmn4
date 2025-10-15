document.addEventListener("DOMContentLoaded", () => {
  console.log("Assignment #5 JS loaded successfully!");

  const form = document.querySelector(".contact_form");

  // создаём элемент для сообщений, если его нет в HTML
  let messageBox = document.createElement("div");
  messageBox.id = "formMessages";
  form.appendChild(messageBox);

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // предотвращаем перезагрузку

    messageBox.innerHTML = "";
    messageBox.style.color = "red";

    const name = document.getElementById("person_name").value.trim();
    const email = document.getElementById("person_email").value.trim();

    let errors = [];

    // Проверка имени
    if (name === "") {
      errors.push("Please enter your name.");
    }

    // Проверка email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
      errors.push("Please enter your email.");
    } else if (!email.match(emailPattern)) {
      errors.push("Please enter a valid email address.");
    }

    // Вывод ошибок или успеха
    if (errors.length > 0) {
      messageBox.innerHTML = errors.join("<br>");
    } else {
      messageBox.style.color = "green";
      messageBox.innerHTML = "✅ Thank you! We will contact you soon.";
      form.reset();
    }
  });
});


// Task 1.2 — Variables and Data Types

let myName = "Nurlan";
let myAge = 20;
let isStudent = true;    

console.log(My name is ${myName}, I am ${myAge} years old, and it is ${isStudent} that I am a student.);



// ================= Task 2: Accordion (About Page) =================
document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(item => {
    const title = item.querySelector(".accordion-title");

    title.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});






// ================= Task 3: Popup Form =================
document.addEventListener("DOMContentLoaded", () => {
  const openPopupBtn = document.getElementById("openPopupBtn");
  const popupOverlay = document.getElementById("popupOverlay");
  const closePopupBtn = document.getElementById("closePopupBtn");

  // открыть окно
  openPopupBtn.addEventListener("click", () => {
    popupOverlay.style.display = "flex";
  });

  // закрыть по кнопке ×
  closePopupBtn.addEventListener("click", () => {
    popupOverlay.style.display = "none";
  });

  // закрыть при клике вне формы
  popupOverlay.addEventListener("click", (event) => {
    if (event.target === popupOverlay) {
      popupOverlay.style.display = "none";
    }
  });
});