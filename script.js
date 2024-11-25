

function hide() {
    const sidebar = document.querySelector('.offScreenMenu');
    sidebar.style.display.toggle = 'none';
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
}

const hamMenu = document.querySelector(".hamMenu");

const offScreenMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
