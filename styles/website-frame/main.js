

function toggleMenu() {
    console.log("toggle menu");
    let menuEl = document.querySelector(".menu-content");
    console.log(menuEl.classList);
    menuEl.classList.toggle("show");
}

menuButtonEl = document.querySelector('.menu-wrapper input[type="image"]');
menuButtonEl.addEventListener('click', () => {
    toggleMenu();
});

window.onclick = function(event) {
    if (!event.target.matches('.menu-wrapper input[type="image"]')) {
        let menuEl = document.querySelector(".menu-content");
        if(menuEl.classList.contains('show')) {
            menuEl.classList.remove('show');
        }
    }
  }