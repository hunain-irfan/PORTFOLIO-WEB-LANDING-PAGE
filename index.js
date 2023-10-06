var icon = document.getElementById('icon');
 var logo = document.getElementById('logo');

icon.addEventListener('click' , darkTheme);

function darkTheme(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src = 'sun.png';
        logo.src = 'logo2.png';
    }else{
        icon.src = 'moon.png';
        logo.src = 'logo1.png'

    }
    }

