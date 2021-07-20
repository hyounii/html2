const ToggleBtn = document.querySelector('.MenuBar_ToggleBtn');
const subbar = document.querySelector('.MenuBar_subbar');
const icons = document.querySelector('.MenuBar_icons');

ToggleBtn.addEventListener('click', () => {
    subbar.classList.toggle('active');
    icons.classList.toggle('active');
});