'use strict'
const elCardBtns = document.querySelectorAll('.card-btn');
elCardBtns.forEach((cardBtn) => {
    cardBtn.addEventListener('mouseenter', onCardBtnHover)
    cardBtn.addEventListener('mouseleave', onCardBtnOut)
})

function onCardBtnHover(ev) {
    let spanNum = ev.target.dataset.span
    const elGreenArrow = document.querySelector(`.green-arrow${spanNum}`);
    elGreenArrow.style.marginLeft = '10px'
    elGreenArrow.style.opacity = 1
}

function onCardBtnOut(ev) {
    let spanNum = ev.target.dataset.span
    const elGreenArrow = document.querySelector(`.green-arrow${spanNum}`);
    elGreenArrow.style.marginLeft = '0px'
    elGreenArrow.style.opacity = 0
}



function onOpenModal(imgNum) {
    const elModalBackground = document.querySelector('.modal-background');
    const elModalWindow = document.querySelector('.modal-window');
    const elEmail = document.querySelector('.email');
    elEmail.classList.remove('hidden')
    elEmail.classList.remove('disapear')
    elModalBackground.classList.add('show')
    elModalWindow.classList.add('show')
    elModalBackground.classList.remove('hidden')
    elModalWindow.classList.remove('hidden')
    elModalBackground.classList.remove('disapear')
    elModalWindow.classList.remove('disapear')

}

function onSubmit(ev) {
    ev.preventDefault()
    const elEmail = document.querySelector('.email');
    const elInput = document.querySelector('.email input');
    elEmail.classList.add('disapear')
    setTimeout(() => {
        elEmail.classList.add('hidden')
        showThankMsg()
        elInput.value = ''
    }, 600)
    

}

function showThankMsg() {
    const elThankMsg = document.querySelector('.thank-msg');
    elThankMsg.style.opacity = 0
    elThankMsg.classList.remove('hidden')
    elThankMsg.classList.add('show')

}

function onCloseModal(ev) {
    
    ev.preventDefault()
    const elModalBackground = document.querySelector('.modal-background');
    const elModalWindow = document.querySelector('.modal-window');
    
    
    elModalBackground.classList.remove('show')
    elModalWindow.classList.remove('show')
    elModalBackground.classList.add('disapear')
    elModalWindow.classList.add('disapear')
    setTimeout(() => {
        elModalBackground.classList.add('hidden')
        elModalWindow.classList.add('hidden')
    }, 600)
    toggleEmailSection()
    
}

function toggleEmailSection(ev) {
    const elThankMsg = document.querySelector('.thank-msg');
    elThankMsg.classList.add('hidden')
    elThankMsg.classList.remove('show')
}

function stop(ev) {
    ev.stopPropagation()
}


function toggleMenu() {
    // const elNavBar = document.querySelector('.nav-bar');
    // elNavBar.style.visibility = 'visible'
    document.body.classList.toggle('menu-open')
}