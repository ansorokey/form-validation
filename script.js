const nameError = document.querySelector('#name-error');
const phoneError = document.querySelector('#phone-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');
const submitError = document.querySelector('#submit-error');

function validateName() {
    const name = document.querySelector('#contact-name').value;

    if(name.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }

    // Regex expression
        // ^ - beginning of  string
        // [A-Za-z] - any letter
        // * - repeat last rule indefinite times
            // [A-Za-z]* - any combination of letters A-z
        // \s - whitespace
        // {1} - exactly one
            // \s{1} - one whitespace
            // [A-Za-z]* - any combination of letters A-z
        // $ end of string

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Please enter your full name';
        return false;
    }

    nameError.innerHTML = <i class="fa-solid fa-circle-check"></i>;
    return true;
}

function validatePhone() {
    const phone = document.querySelector('#contact-phone').value;

    if(phone.length === 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }

    if(phone.length !== 10) {
        phoneError.innerHTML = 'Please enter 10 digit phone number'
        return false;
    }

    // Regex expression:
        // ^ - start of string
        // [0-9] - digits 0-9
        // {10} - exactly 10
    if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Invalid phone number provided';
        return false;
    }

    phoneError.innerHTML = <i class="fa-solid fa-circle-check"></i>;
    return true;
}

function validateEmail() {
    email = document.querySelector('#contact-email').value;

    if(email.length === 0) {
        emailError.innerHTML = 'Email address is required';
        return false;
    }

    // Regex Expression:
        // ^ - start of string
        // [A-Za-z] - characters from A-z
        // \. - dot literal '.'
        // _ - underscore '_'
        // \- - dash literal '-'
        // [0-9] - digits 0-9
        // [@] - one '@' symbol
        // [\.] - one dot
        // [a-z]{2,4} - 2, 3, or 4 characters from a-z
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Invalid email';
        return false;
    }

    emailError.innerHTML = <i class="fa-solid fa-circle-check"></i>;
    return true;
}

function validateMessage() {
    const message = document.querySelector('#contact-message').value;
    const required = 30;
    let remaining = required - message.length;

    if (remaining > 0) {
        messageError.innerHTML = remaining + ' more character(s) required.'
        return false;
    }

    messageError.innerHTML = <i class="fa-solid fa-circle-check"></i>;
}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please review your information';
        setTimeout(() => {
            submitError.style.display = none;
        }, 3000);
        return false;
    }
}
