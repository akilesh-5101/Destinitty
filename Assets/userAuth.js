// Script for Destinitty

const register = document.querySelector('#registerChk');
const signin = document.querySelector('#signinChk');
const regbtn = document.querySelector('#regbtn');
const signbtn = document.querySelector('#signbtn');

regbtn.addEventListener('click',passwordCheck);
signbtn.addEventListener('click',next);
signin.addEventListener('input', e =>{
    if(!signin.checkValidity()){
        e.preventDefault();
    }
    signin.classList.add('was-validated');  
});

const message = document.createElement('span');

function passwordCheck(event){
    if(register.children[1].children[0].value !== register.children[2].children[0].value && register.children[1].children[0].value!== null){
        message.innerHTML = '*Passwords do not match';
        message.style.color = 'red';
        register.appendChild(message);
    }
    else {
        if(register.children[0].children[0].value)
        regbtn.setAttribute('data-bs-target','#register');
        regbtn.setAttribute('data-bs-dismiss','modal');
        register.submit();
        regbtn.click();   
    }
}

regbtn.addEventListener('click',passwordCheck);
// signin.children[3].addEventListener('click')


function next(event){
    signbtn.setAttribute('data-bs-target','#register');
    signbtn.setAttribute('data-bs-dismiss','modal');
    signin.submit();
    signbtn.click();
}

