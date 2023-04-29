// Script for Destinitty

const register = document.querySelector('#registerChk');
const signin = document.querySelector('#signinChk');
const regbtn = document.querySelector('#regbtn');
const signbtn = document.querySelector('#signbtn');
const dest = document.querySelector('#dest');


regbtn.addEventListener('click',passwordCheck);
signbtn.addEventListener('click',logger);

signin.addEventListener('input', e =>{
    if(!signin.checkValidity()){
        e.preventDefault();
    }
    signin.classList.add('was-validated');  
});

register.addEventListener('input', e =>{
    if(!signin.checkValidity()){
        e.preventDefault();
    }
    if(register.children[0].children[0].value.split('@')[1] ==='nitt.edu'){
        register.classList.add('was-validated');  
    }
    else{
        register.classList.remove('was-validated');
    }
    if(register.children[1].children[0].value !== register.children[2].children[0].value && register.children[1].children[0].value!== null){
        message1.textContent = '*Passwords do not match';
        register.classList.remove('was-validated');
    }
    else{
        register.classList.add('was-validated');  
        message1.textContent = '';
    }
});

const message1 = document.createElement('p');
const message2 = document.createElement('p');


function passwordCheck(event){
    message1.style.color = 'red';
    message2.style.color = 'red';
    register.appendChild(message1);
    register.appendChild(message2);
    if(register.children[1].children[0].value !== register.children[2].children[0].value && register.children[1].children[0].value!== null){
        message1.textContent = '*Passwords do not match';
        if(register.children[0].children[0].value.split('@')[1] !=='nitt.edu'){
            message2.textContent = '*Not an NITT mail id';
        }
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


function logger(event){
    signbtn.setAttribute('data-bs-target','#signin');
    signbtn.setAttribute('data-bs-dismiss','modal');
    console.log('Why this')
    signin.submit();
    signbtn.click();
}

