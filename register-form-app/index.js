// Select elements from DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// show input Error message
function showError(input, massege){
    const formControl = input.parentElement;
    formControl.className = 'form__control error';
    const small = formControl.querySelector('small');
    small.innerText = massege;
}
// Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form__control success';
}

// Checke email validation
function checkEmail(input){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(!input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, `Email is not valid`);
    }
}

function checkRequired(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim() === ""){
            showError(input, `${getElementId(input)} is required`);
        }
        else if (input.id === `email`){
            if(isValidEmail){
                showError(input, `${getElementId(input)} Not Valid`)
            }
        }
        else {
            showSuccess(input);
        }
    });
}
function getElementId(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min , max){
    if(username.value.length >= max){
        showError(input, `${getElementId(input)} must be less than ${max}`);
    }else if(username.value.length <=min){
        showError(input, `${getElementId(input)} must be more than ${min}`);
    }else{
        showSuccess(input);
    }
}
// Add Event listner for form submite
form.addEventListener('submit', function(event){
    event.preventDefault();

    checkRequired([username, email , password, password2]);
    checkLength(username, 3 , 15);
    checkLength(password, 6, 25);
    checkEmail(email);
})