document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('menu-toggler').addEventListener('change', function () {
    document.querySelector('.navigation-menus').classList.toggle('show')
  })

  const menuToggler = document.getElementById('menu-toggler');
  const navigationMenus = document.querySelector('.navigation-menus')
  const navContainer = document.getElementById('navigation-container');

  document.addEventListener('click', function (event) {
    const isClickInsideMenu = navigationMenus.contains(event.target)
    const isClickOnToggler = event.target.closest('#menu-toggler, .to-bar-group')

    if (!isClickInsideMenu && !isClickOnToggler && menuToggler.checked) {
      menuToggler.checked = false;
      const event = new Event('change')
      menuToggler.dispatchEvent(event)
    }
  })

  const clickableElements = navContainer.querySelectorAll('a, .header-icon-box')

  clickableElements.forEach((element) => {
    element.addEventListener('click', (event) => {
      const button = document.querySelector('#accountDrop')
      if (!button.contains(event.target)) {
        document.querySelector('.navigation-menus').classList.remove('show')
        menuToggler.checked = false;
      }
    })
  })

  document.addEventListener('click', (event) => {
    const searchFilterBox = document.getElementById('searchFilterBox')
    const searchContainer = document.getElementById('searchContainer')
    if (!searchContainer.contains(event.target)) {
      searchFilterBox.classList.remove('show');
    }
  })



  const curveText = document.querySelector('.text-conatiner p')
  if (curveText) {
    curveText.innerHTML = curveText.innerText.split('').map((value, index) =>
      `<span style="transform:rotate(${index * 15}deg)">${value}</span>`).join('')
  }


  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    slidesPerView: "6",
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: "1",
      },
      575: {
        spaceBetween: 10,
        slidesPerView: "2",
      },
      767: {
        spaceBetween: 20,
        slidesPerView: "4",
      },
      991: {
        spaceBetween: 30,
        slidesPerView: "5",
      },
      1200: {
        spaceBetween: 40,
      }
    }
  })


  // SCROLLING CARD

  let scrollingCard = document.querySelectorAll('.scrolling-card')
  let scrollingArea = document.querySelector('.scrolling-card-section')

  function rotateCard() {
    let angle = 0
    const screenWidth = window.innerWidth;
    scrollingCard.forEach((card, index) => {
      if (card.classList.contains('card-away')) {
        card.style.transform = `translateY(-120vh) rotate(48deg)`
      } else {
        card.style.transform = `translate(-50%,-50%) rotate(${angle}deg)`
        if (screenWidth <= 575) {
          angle = angle - 3
        } else {
          angle = angle - 10
        }

        card.style.zIndex = scrollingCard.length - index
      }
    })
  }


  if (scrollingArea) {
    window.addEventListener('scroll', () => {
      let distance = window.innerHeight / 2
      let topValue = scrollingArea.getBoundingClientRect().top
      let index = -1 * (topValue / distance + 1)
      index = Math.floor(index)
      for (i = 0; i < scrollingCard.length; i++) {
        if (i <= index) {
          scrollingCard[i].classList.add('card-away')
        } else {
          scrollingCard[i].classList.remove('card-away')
        }
      }

      rotateCard()
    })
  }


  var swiper = new Swiper(".productVariationSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      575: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }

  })


  const zoomImageContainer = document.querySelector('.imageContainer')
  const mainProductImage = document.getElementById('mainProductImage')
  const variations = document.querySelectorAll('.variation-img')

  if (zoomImageContainer) {
    zoomImageContainer.addEventListener('mousemove', (event) => {
      zoomImageContainer.style.setProperty('--display', 'block')

      let rect = zoomImageContainer.getBoundingClientRect()
      let pointer = {
        x: ((event.clientX - rect.left) / rect.width) * 100,
        y: ((event.clientY - rect.top) / rect.height) * 100
      }

      zoomImageContainer.style.setProperty('--zoom-x', `${pointer.x}%`)
      zoomImageContainer.style.setProperty('--zoom-y', `${pointer.y}%`)
    })

    zoomImageContainer.addEventListener('mouseleave', () => {
      zoomImageContainer.style.setProperty('--display', 'none')
    })

    variations.forEach(img => {
      img.addEventListener('click', function () {
        let newSrc = this.src
        let oldSrc = mainProductImage.src
        mainProductImage.src = newSrc
        this.src = oldSrc

        zoomImageContainer.style.setProperty('--url', `url(${newSrc})`)
      })
    })
  }


  var swiper = new Swiper(".relatedProduct", {
    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }

  })


const filterToggle = document.querySelector('#filterToggle')
const filtersOptions = document.querySelector('#filtersOptions')
if (filterToggle) {
filterToggle.addEventListener('click', () => {
filtersOptions.classList.toggle('toggle-box');
});
}

const video = document.querySelector('.about-video')
const thumbnail = document.querySelector('.thumbnail-image')
const videoIcon = document.querySelector('.play-button')

video.addEventListener('click' , ()=>{
  if (video.paused) {
    if(videoIcon.classList.contains('bi-play-circle-fill')){
      thumbnail.classList.add("d-none")
      videoIcon.classList.replace('bi-play-circle-fill','bi-pause-circle-fill')
    }
    video.addEventListener('mouseover' , ()=>{
      thumbnail.classList.remove("d-none")
    })
    video.addEventListener('mouseleave' , ()=>{
      thumbnail.classList.add("d-none")
    })
    video.play();

  } else {
    
    if(videoIcon.classList.contains('bi-pause-circle-fill')){
      thumbnail.classList.remove("d-none")
      videoIcon.classList.replace('bi-pause-circle-fill','bi-play-circle-fill')
    }

    video.addEventListener('mouseover' , ()=>{
      thumbnail.classList.remove("d-none")
    })
    video.addEventListener('mouseleave' , ()=>{
      thumbnail.classList.remove("d-none")
    })
    video.pause();
  }
})


})