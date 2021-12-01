$(window).on('load', function () {
    $('#preloader').hide()
})

$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    })
})
const toggles = document.querySelectorAll('.faq-toggle')
toggles.forEach((toggle) => {
    console.log('toggle')
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})
