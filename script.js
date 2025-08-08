let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let vanLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + " ]").classList.add("active")
            })
        }
    })
}




menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

  


  const slider = document.querySelector('.testimonials-slider');
  const items = document.querySelectorAll('.testimonials-item');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const itemsPerSlide = 1;
  const totalItems = items.length;
  const maxIndex = Math.ceil(totalItems / itemsPerSlide);
  let currentIndex = 0;

  function updateCarousel() {
    const item = slider.querySelector('.testimonials-item');
    const style = getComputedStyle(slider);
    const gap = parseInt(style.gap) || 0;

    const itemWidth = item.offsetWidth;
    const totalGap = gap * currentIndex * itemsPerSlide;
    const offset = (itemWidth * currentIndex * itemsPerSlide) + totalGap;

    slider.style.transform = `translateX(-${offset}px)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % maxIndex;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + maxIndex) % maxIndex;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel); // recalcula no redimensionamento
  updateCarousel(); // inicializa