const password = document.querySelector('#password')
const icon = document.querySelector('.icon')

// Password functionality

function showAndHide() {
    if (password.type == 'password') {
        password.setAttribute('type', 'text') //formato: (attribute, received value of attribute)
        icon.setAttribute('name', 'eye-off')
    } else {
        password.setAttribute('type', 'password')
        icon.setAttribute('name', 'eye')
    }
}

icon.addEventListener('click', showAndHide)