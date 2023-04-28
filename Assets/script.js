// Script for Destinitty
const register = document.querySelector('#register');
register.children[3].addEventListener('click',passwordCheck);

const message = document.createElement('p');

function passwordCheck(event){
    if(register.children[1].children[0].value !== register.children[2].children[0].value){
        message.innerHTML = 'Passwords not Match'
        register.appendChild(message);
    }
    else{
        register.children[3].setAttribute('data-bs-dismiss','modal');
    }
}