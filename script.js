const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {

    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu-2');
    const options = dropdown.querySelectorAll('.menu-2 li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {

        select.classList.toggle('select-clicked');

        caret.classList.toggle('caret-rotate');

        menu.classList.toggle('menu-2-open');
    });

    options.forEach(option => {

        option.addEventListener('click', () => {

            selected.innerText = option.innerText;

            select.classList.remove('select-clicked');

            caret.classList.remove('caret-rotate');

            menu.classList.remove('menu-2-open');

            options.forEach(option => {
                option.classList.remove('active');
            });

            option.classList.add('active');

            // Chame a função de mudança de idioma
            changeLanguage(option.getAttribute('data-lang'));
        });
    });
});
