
if (document.cookie.split("=").length > 0) {
    var theme_mode = document.cookie.split("=")[1];
    theme_mode = parseInt(theme_mode);
    console.log(theme_mode);
    console.log(document.cookie);
} else {
    if(window.matchMedia('(prefers-color-scheme: dark)') == true){ 
        var theme_mode = 1;
        document.cookie = "themecolor=1;SameSite=Strict"
    } else {
        var theme_mode = 0;
        document.cookie = "themecolor=0;SameSite=Strict"
    }
 
}

if (theme_mode){ document.body.classList.add('dark-mode'); }

const dark_mode_btn = document.getElementById('dark_mode');
dark_mode_btn.addEventListener('click', () => {
    dark_mode_btn.classList.add('transition_dark');
    dark_mode_btn.classList.remove('transition_dark');
    document.body.classList.toggle('dark-mode');
    if (theme_mode){ theme_mode = 0; document.cookie = "themecolor=0;SameSite=Strict" }
    else { theme_mode = 1; document.cookie = "themecolor=1;SameSite=Strict" }
});

const open_btn = document.getElementById('openBtn');
const close_btn = document.getElementById('closeBtn');

open_btn.addEventListener('click', () => {
    document.getElementsByClassName("only_pc")[0].classList.add('activate')
    const names = document.getElementsByClassName("only_pc")[0].getElementsByTagName("a");
    names[0].innerHTML = '<i class="fa-solid fa-house"></i> Accueil';
    names[1].innerHTML = '<i class="fa-solid fa-eye"></i> À propos';
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
