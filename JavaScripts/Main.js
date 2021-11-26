const checkbox = document.querySelector('input[name="theme"]');
const htmlElement = document.documentElement;
const headerLogo = document.querySelector('.header__logo');
const asideLeft = document.querySelector('.aside-left');

// Theme Color
checkbox.addEventListener("change", () =>
{
    if (checkbox.checked)
    {
        smoothTrans();
        htmlElement.setAttribute("data-theme", "dark");
    }
    else
    {
        smoothTrans();
        htmlElement.setAttribute("data-theme", "light");
    }
});

const smoothTrans = () =>
{
    htmlElement.classList.add("transition");

    window.setTimeout(() =>
    {
        htmlElement.classList.remove("transition");
    }, 1000);
};

// Sidebar Left Menu
headerLogo.addEventListener('click', () =>
{
    asideLeft.classList.toggle('aside-left__active-menu');
})
