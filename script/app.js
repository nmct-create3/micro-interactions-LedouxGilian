const email = {},
    password = {}
    
let signInButton;

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isValidPassword = function(password) {
    return password.length > 8
}

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
};

const addErrors = function(inputObject) {
    inputObject.errorMessage.innerText = 'Field is empty'
}



const enableListeners = function() {
    email.input.addEventListener('blur', function() {
        if (isEmpty(email.input.value)) {
            addErrors()
        }
    })

    password.input.addEventListener('blur', function() {

    })

    signInButton.input.addEventListener('click', function() {

    })
}

const getDOMElement = function() {
    email.field = document.querySelector('.js-email-field')
    email.errorMessage = document.querySelector('.js-email-message')
    email.input = document.querySelector('.js-email-input')

    password.field = document.querySelector('.js-password-field')
    password.errorMessage = document.querySelector('.js-password-message')
    password.input = document.querySelector('.js-password-input')

    signInButton = document.querySelector('.js-sign-in-button')

    enableListeners()
}

const enableValidation = function() {
    getDOMElement()
}

function handleFloatingLabel() {
    
}

function handlePasswordSwitcher() {
    // Haal password input en password toggle op
    const passwordInput = document.querySelector('.js-password')
    const passwordToggle = document.querySelector('.js-toggle-password')

    //Luister of er geklikt word op de checkbox
    //het change event zou ook wel werken(in plaats van clicked), dit is voor alle soorten inputs.
    
    // passwordToggle.addEventListener('change', function() { 
    //     const toggleOptions = ['text', 'password']
    //     passwordInput.type = toggleOptions[+this.checked]
    // })

    passwordToggle.addEventListener('change', function() { 
        if (passwordToggle.checked) {
            passwordInput.type = 'text'
        } else {
            passwordInput.type = 'password'
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
    enableValidation();
});