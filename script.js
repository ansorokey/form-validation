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

    // Use regular expression to check the format
    // ^ - beginning of string
    // [A-Za-z] - any letter
    // * - repeat last rule indefinite times
    // \s - whitespace
    // {1} - exactly one
    // $ end of string
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Please enter your full name';
        return false;
    }

    nameError.innerHTML = 'valid';
    return true;
}
