function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}

// Создание экземпляра карты.
const map = new ymaps3.YMap(document.getElementById("YMapsID"), {
  location: {
    center: [37.64, 55.76],
    zoom: 10,
  },
});

