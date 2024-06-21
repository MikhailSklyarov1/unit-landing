function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Получаем все элементы details
const accordion = document.querySelectorAll('details');

// Проходимся по каждому элементу
accordion.forEach(item => {

  // На каждый элемент вешаем слушатель события клика
  item.addEventListener('click', (e) => {

    // Сбрасываем стандартное действие при клике
    e.preventDefault();
    
    // Находим открытый элемент
    const openItem = document.querySelector('details[open]');
    
    // Если есть открытый элемент удаляем ему атрибут open
    if (openItem) openItem.open = false;

    // Если открытый элемент не является тем, на который мы нажали, то нажатому элементу добавляем атрибут open
    if (openItem !== item) item.open = true 
  })
})
