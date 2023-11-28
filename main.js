//----------- show menu-------------
const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

//menu show
//  validate if constant exist
if(navToggle){
     navToggle.addEventListener('click', ()=>{
          navMenu.classList.add('show-menu')
     })
}

// menu hidden 
// validate if constant exist
if(navClose){
     navClose.addEventListener('click', ()=>{
          navMenu.classList.remove('show-menu')
     })
}



// remove menu mobile
const navLink=document.querySelectorAll('.nav__link');
//when we click on each nav__link,we remove show_menu
const linkAction = ()=>{
     const navMenu = document.getElementById('nav-menu');
     navMenu.classList.remove('show-menu');
}
navLink.forEach(n=>n.addEventListener('click',linkAction))



//-----------shadow header-------------
const shadowHeader = ()=>{
     const header = document.getElementById('header');
     //when the scroll is greater than 50 viewport height, add the shadow-header
     this.scrollY >= 50? header.classList.add('shadow-header')
     :    header.classList.remove('shadow-header')   
}
window.addEventListener('scroll',shadowHeader)



//-----------email js-------------(here I'm going to use emailjs website which is helful to send email directly from the code)
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
      e.preventDefault()

      //serviceID - templateID - #form - publicKey

      emailjs.sendForm('service_fyg20ua','template_s8n3g78','#contact-form','zeC7-lKv9gX-eXFPk')
      .then(()=>{
          //show sent message
          contactMessage.textContent = 'Message sent successfully ✅'

          //remove message after 5 seconds
          setTimeout(()=>{
               contactMessage.textContent = ''
          },5000)

          //clear input field
          contactForm.reset()

      }, ()=>{
           //show error message
           contactMessage.textContent = 'Message not sent(service error) ❌'
      })
}
contactForm.addEventListener('submit', sendEmail)



// -------show scroll up----------
const scrollUp = () =>{
     const scrollUp = document.getElementById('scroll-up')
     //when the scroll is heigher than 350 viewport height, add the show-scroll class to the a tag with the scroll up class
     this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ------scroll section active link--------- */
const sections = document.querySelectorAll('section[id]')

const scrollActive = ()=>{
     const scrollDown = window.scrollY

     sections.forEach(current=>{
          const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' +sectionId + ']')

          if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
               sectionsClass.classList.add('active-link')
          }else{
               sectionsClass.classList.remove('active-link')
          }
     })
}
window.addEventListener('scroll',scrollActive)



// ---------scroll reveal animation
const sr = ScrollReveal({
     origin: 'top',
     distance: '60px',
     duration: 2500,
     delay: 400,
     //reset: true  //animation repeat
})

sr.reveal(`.home__profile, .about__image, contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info,
           .about__container, .about__info,
           .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.projects__card`, {interval: 100})



















