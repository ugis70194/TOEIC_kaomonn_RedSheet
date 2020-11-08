window.onload = function() {
    var settings = document.getElementsByClassName('centerbody01_51_1');

    var discover_button = document.createElement("button");
    discover_button.innerHTML = 'display';
    discover_button.onclick = display;

    var hide_button = document.createElement("button");
    hide_button.innerHTML = 'hide';
    hide_button.onclick = hide;

    settings[0].appendChild(discover_button);
    settings[0].appendChild(hide_button);
    hide();
};

function display(){
    var Choices = document.getElementsByClassName('centerbody01_26');
    var text = document.getElementsByClassName('centerbody01_24');
    text[0].style.opacity = 1.0;
    Choices[0].style.opacity = 1.0;
    Choices[1].style.opacity = 1.0;
    Choices[2].style.opacity = 1.0;
    Choices[3].style.opacity = 1.0;
}

function hide(){
    var Choices = document.getElementsByClassName('centerbody01_26');
    var text = document.getElementsByClassName('centerbody01_24');
    text[0].style.opacity = 0.0;
    Choices[0].style.opacity = 0.0;
    Choices[1].style.opacity = 0.0;
    Choices[2].style.opacity = 0.0;
    Choices[3].style.opacity = 0.0;
    
}