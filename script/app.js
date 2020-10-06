let email = {},
    password = {},
    signInButton;

function handleFloatingLabel() {
   
}

const handlePasswordSwitcher = function () {
    const passwordInput = document.querySelector(".js-password-input");
    const passwordToggle = document.querySelector(".js-password-toggle");

    if (!passwordInput || !passwordToggle) {
        // Simplele zelfcontrole
        console.error('De classes werden niet gevonden :/', passwordInput, passwordToggle);
        return;
    }

    passwordToggle.addEventListener('change', function() {
        if (passwordInput.type == 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password'
        }
    });
};

const getDOMElements = function() {
    email.input = document.querySelector("");
    
};

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    //handleFloatingLabel();
    handlePasswordSwitcher();
    getDOMElements();
});