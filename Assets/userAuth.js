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

const message1 = document.createElement('p');
const message2 = document.createElement('p');

function linebreak(){
    return "\n";
}

function passwordCheck(event){
    message1.style.color = 'red';
    message2.style.color = 'red';
    register.appendChild(message1);
    register.appendChild(message2);
    if(register.children[1].children[0].value !== register.children[2].children[0].value && register.children[1].children[0].value!== null){
        message1.textContent = '*Passwords do not match';
    }
    if(register.children[0].children[0].value.split('@')[1] !=='nitt.edu'){
        message2.textContent = '*Not an NITT mail id';
    }
    else{
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

