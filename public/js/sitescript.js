//Hiện menu nav
const a = document.querySelector('.navbar-toggler');
const b = document.querySelector('#collapsibleNavId');
//
// a.addEventListener("click", function() {
//     b.classList.toggle('show');
// });

//Bắt sự kiện lăn chuột
const navBar = document.querySelector('.navbar');
const logo = document.querySelector('a.logo');
const c = document.querySelector('.header-inner');
const d = document.querySelector('.ms-slide-layer');
//
window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset)
    if (window.pageYOffset > 1) {
        navBar.classList.add('fixed');
        c.style.backgroundColor = 'rgba(0, 0, 0, 0.90)';
        logo.classList.add('setlogo');
    } else {
        navBar.classList.remove('fixed');
        c.style.backgroundColor = 'transparent';
        logo.classList.remove('setlogo');

    }
});
//Chỉnh kéo theo và làm mờ nền

if (this.window.innerWidth > 1199) {
    window.addEventListener('scroll', () => {
        d.style.top = `${-(window.scrollY *0.30)}px`;
        d.style.opacity = `${1 - window.scrollY*0.001}`;
    })

}





//Chỉnh chuyển động củ hành
$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('.move1').css({
            'top': 170 + event.pageY * 0.08,
            'left': 215 + event.pageX * 0.05
        })
    });
});
//Chỉnh chuyển động tô hành
$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('.move2').css({ 'top': 440 + event.pageY * 0.04, 'left': 200 + event.pageX * 0.05 })
    });
});
//Chỉnh chuyển động cây nấm
$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('.move3').css({ 'top': 578 + event.pageY * 0.03, 'left': 213 + event.pageX * 0.04 })
    });
});
//Chỉnh chuyển động đầu nấm
$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('.move4').css({ 'top': 660 + event.pageY * (-0.03), 'left': 200 + event.pageX * 0.05 })
    });
});
//Chỉnh chuyển động của nấm đôi trên
$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('.move5').css({ 'top': 120 + event.pageY * 0.02, 'left': 1080 + event.pageX * 0.03 })
    });
});
//Chỉnh chuyển động của nấm đôi dưới
$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('.move6').css({ 'top': 370 + event.pageY * 0.02, 'left': 1090 + event.pageX * 0.009 })
    });
});
//Chỉnh chuyển động của lá
$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('.move7').css({ 'top': 95 + event.pageY * 0.02, 'left': 1000 + event.pageX * 0.05 })
    });
});
//Chỉnh chuyển động của cây nấm
$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('.move8').css({ 'top': 340 + event.pageY * 0.02, 'left': 920 + event.pageX * 0.05 })
    });
});

let strDate = document.form.date;
//Kiểm tra ngày nhập vào 
function checkDate(strDate) {
    var comp = strDate.value.split('/')
    var d = parseInt(comp[0], 10) //parseint(phần tử trước dấu /, 10(là số thập phân))
    var m = parseInt(comp[1], 10)
    var y = parseInt(comp[2], 10)
    var date = new Date(y, m - 1, d);
    if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
        return true
    }
    return false
}

//Bắt sự kiện phím enter để kiểm tra ngày nhập vào đúng hay sai
function keydownHandler(event) {
    if (event.keyCode == 13) {
        if (checkDate(strDate) === false) {
            alert('Please verify entered data and try again!');
        }
    }
}

//lấy thẻ show-scroll
var moveTop = document.querySelector(".scroll-up");
window.onscroll = function() {
    scrollFunction()
};
// Khi người dùng kéo xuống 20px sẽ hiển thị movetop
function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        moveTop.style.display = "block";
    } else {
        moveTop.style.display = "none";
    }
}

//Khi người dùng nhấp vào nút, sẽ quay lại đầu trang
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//Carousel
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
})