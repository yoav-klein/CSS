/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

let menuButtonEl = document.querySelector(".menu-button");
let menuContentEl = document.querySelector(".menu-content");

console.log("START");

menuButtonEl.addEventListener('click', () => {
    console.log('click');
    menuContentEl.classList.toggle("show");
});

  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {

    if (!event.target.matches('.menu-button')) {
        if (menuContentEl.classList.contains('show')) {
            menuContentEl.classList.remove('show');
        }
    }
}