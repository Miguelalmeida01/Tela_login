'use strict'

const loginContainer = document.getElementById('login_container')

const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('open_register').addEventListener('click', moveOverlay)
document.getElementById('open_login').addEventListener('click', moveOverlay)



document.getElementById('open_register_mobile').addEventListener('click', moveOverlay)
document.getElementById('open_login_mobile').addEventListener('click', moveOverlay)