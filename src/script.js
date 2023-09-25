const themeToggle = document.getElementById('theme-toggle');
const bodyClass = document.body.classList;
let val;

themeToggle.addEventListener('click', () => {
    if (val) {
        bodyClass.remove('theme-light');
        bodyClass.add('theme-dark');
        val = 0;
    } else {
        bodyClass.add('theme-light');
        bodyClass.remove('theme-dark');
        val = 1;
    }
});
