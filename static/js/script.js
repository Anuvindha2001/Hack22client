
$(window).on('load', function () {
    $('#preloader').hide();
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

let items = document.querySelectorAll('.faq');

let length = items.length;

items.forEach(
    (item) => {
        item.addEventListener('click', function () {
            item.children[1].style.display = item.children[1].style.display === 'block' ? item.children[1].style.display = 'none' : item.children[1].style.display = 'block';
            item.children[0].classList.toggle('to-bottom');
            item.children[0].classList.toggle('to-top');
        })
    }
)