'use strict'
const menuIcon = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar')

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active')
  menuIcon.classList.toggle('fa-times')
})

let originalColors = {}

function saveOriginalColors () {
  let allElements = document.querySelectorAll('*')
  allElements.forEach((element, index) => {
    originalColors[index] = element.style.color
  })
}

function changeTextColorToBlack () {
  let allElements = document.querySelectorAll('*')
  allElements.forEach(element => {
    element.style.color = 'black'
  })
}

function restoreOriginalColors () {
  let allElements = document.querySelectorAll('*')
  allElements.forEach((element, index) => {
    element.style.color = originalColors[index] || ''
  })
}

let checkBox = document.querySelector('.cheked-box')
let footer = document.querySelector('.footer')
console.log(checkBox)
checkBox.addEventListener('change', function () {
  if (checkBox.checked) {
    document.querySelector('body').style.backgroundColor = 'aliceblue'
    footer.style.backgroundColor = 'aliceblue'

    let btnChange = document.querySelectorAll('.btn-change')
    btnChange.forEach(btn => {
      btn.classList.remove('btn')
      btn.classList.add('btn-dark')
    })

    let social = document.querySelectorAll('.social-select')
    social.forEach(scl => {
      scl.classList.remove('social-icons')
      scl.classList.add('social-icons-dark')
    })

    const formdark = document.querySelector('.d-form')
    formdark.classList.remove('contact-form')
    formdark.classList.add('contact-form-dark')

    const about = document.querySelector('.about-dark')
    about.classList.remove('about-us-content')
    about.classList.add('about-us-content-dark')

    const formBtn = document.querySelector('.c-btn')
    formBtn.classList.remove('contact-button')
    formBtn.classList.add('contact-button-dark')

    changeTextColorToBlack()
  } else {
    document.querySelector('body').style.backgroundColor = '#080808'
    footer.style.backgroundColor = '#080808'

    let btnChange = document.querySelectorAll('.btn-change')
    btnChange.forEach(btn => {
      btn.classList.add('btn')
      btn.classList.remove('btn-dark')
    })

    let social = document.querySelectorAll('.social-select')
    social.forEach(scl => {
      scl.classList.remove('social-icons-dark')
      scl.classList.add('social-icons')
    })

    const formdark = document.querySelector('.d-form')
    formdark.classList.remove('contact-form-dark')
    formdark.classList.add('contact-form')

    const about = document.querySelector('.about-dark')
    about.classList.remove('about-us-content-dark')
    about.classList.add('about-us-content')

    const formBtn = document.querySelector('.c-btn')
    formBtn.classList.add('contact-button')
    formBtn.classList.remove('contact-button-dark')

    restoreOriginalColors()
  }
})

document.querySelectorAll('.detail-content').forEach(details => {
  details.addEventListener('toggle', function () {
    const arrow = this.querySelector('.icon-arrow')
    if (this.open) {
      arrow.textContent = '🡪'
    } else {
      arrow.textContent = '🡫'
    }
  })
})

const closeBtn = document.querySelector('.close-btn')
const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.modal-btn')

modalBtn.addEventListener('click', function () {
  modal.classList.remove('hidden')

  closeBtn.addEventListener('click', function () {
    modal.classList.add('hidden')
  })
})
