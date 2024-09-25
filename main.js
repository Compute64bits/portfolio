const dark_mode_btn = document.getElementById('dark_mode');

dark_mode_btn.addEventListener('click', () => {
    dark_mode_btn.classList.add('transition_dark');
    dark_mode_btn.classList.remove('transition_dark');
    document.body.classList.toggle('dark-mode');
});

if(window.matchMedia('(prefers-color-scheme: dark)') == true){ document.body.classList.add('dark-mode'); }

const open_btn = document.getElementById('openBtn');
const close_btn = document.getElementById('closeBtn');

open_btn.addEventListener('click', () => {
    document.getElementsByClassName("only_pc")[0].classList.add('activate')
    const names = document.getElementsByClassName("only_pc")[0].getElementsByTagName("a");
    names[0].innerHTML = '<i class="fa-solid fa-house"></i> À propos';
    names[1].innerHTML = '<i class="fa-solid fa-eye"></i> Accueil';
    names[2].innerHTML = '<i class="fa-solid fa-folder"></i> Projets';
    names[3].innerHTML = '<i class="fa-solid fa-address-book"></i> Contact';
    names[4].innerHTML = '<i class="fa-brands fa-github"></i> Github';
});

close_btn.addEventListener('click', () => {
    document.getElementsByClassName("only_pc")[0].classList.remove('activate')
    const names = document.getElementsByClassName("only_pc")[0].getElementsByTagName("a");
    names[0].innerHTML = 'Accueil';
    names[1].innerHTML = 'À propos';
    names[2].innerHTML = 'Projets';
    names[3].innerHTML = 'Contact';
    names[4].innerHTML = 'Github';
});
