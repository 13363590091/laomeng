var links = document.querySelectorAll(".head .head-inner");
var lists = document.querySelectorAll(".market-inner .bottom-item");
var topFixed = document.querySelector(".main-top-fixed");
var leftFixed = document.querySelector(".main-left-fixed");
var banner = document.querySelector(".banner");
var bannerImg = document.querySelectorAll(".banner-img-item");
var bannerSlider = document.querySelectorAll(".slider-nav-item");
var navDetail = document.querySelectorAll(".navitems");
var navBtn = document.querySelectorAll(".banner-nav ul li");
var navContainer = document.querySelector(".nav-detail");
var index = 0;
var intervalBox = setInterval(move, 3000);
for (let i = 0; i < links.length; i++) {
    links[i].onmouseover = function () {
        clearInterval(intervalBox);
        for (var j = 0; j < lists.length; j++) {
            links[j].className = "head-inner";
            lists[j].style.display = "none";
        }
        this.className = "head-inner head-inner-selected"
        lists[i].style.display = "block";
        index = i;
    }
    links[i].onmouseout = function () {
        intervalBox = setInterval(move, 3000);
    }

}
for (let i = 0; i < lists.length; i++) {
    lists[i].onmouseover = function () {
        clearInterval(intervalBox);
        for (var j = 0; j < lists.length; j++) {
            links[j].className = "head-inner";
            lists[j].style.display = "none";
        }
        links[i].className = "head-inner head-inner-selected"
        lists[i].style.display = "block";
        index = i;
    }
    lists[i].onmouseout = function () {
        intervalBox = setInterval(move, 3000);
    }
}

function move() {
    for (var j = 0; j < lists.length; j++) {
        links[j].className = "head-inner";
        lists[j].style.display = "none";
    }
    links[index].className = "head-inner head-inner-selected";
    lists[index].style.display = "block";
    if (index) {
        index = 0;
    } else {
        index = 1;
    }
}


var num = 0;

function slider() {
    for (var j = 0; j < bannerImg.length; j++) {
        bannerImg[j].style.display = "none";
        bannerSlider[j].style.background = "#000";
        bannerSlider[j].style.opacity = "0.3";
    }
    bannerImg[num].style.display = "block";
    bannerSlider[num].style.background = "#fff";
    bannerSlider[num].style.opacity = "0.7";
    switch (num) {
        case 0:
            banner.style.background = "#E8E8E8";
            break;
        case 1:
            banner.style.background = "#479EE8";
            break;
        case 2:
            banner.style.background = "#FB994D";
            break;
        case 3:
            banner.style.background = "#E8E8E8";
            break;
        case 4:
            banner.style.background = "#E5E5E5";
            break;
        case 5:
            banner.style.background = "#D7133B";
            break;
    }
    if (num >= bannerImg.length - 1) {
        num = 0;
    } else {
        num++;
    }
}
var t = setInterval(slider, 3000);
for (let i = 0; i < bannerSlider.length; i++) {
    bannerSlider[i].onmouseover = function () {
        clearInterval(t);
        num = i;
        slider();
    }
    bannerSlider[i].onmouseout = function () {
        t = setInterval(slider, 3000);
    }
}
for (let i = 0; i < navBtn.length; i++) {
    navBtn[i].onmouseover = function () {
        navContainer.style.display = "block";
        for (let j = 0; j < navDetail.length; j++) {
            navDetail[j].style.display = "none";
        }
        if (i < 3) {
            navDetail[i].style.display = "block";
        } else {
            navDetail[0].style.display = "block";
        }
    }
    navBtn[i].onmouseout = function () {
        navContainer.style.display = "none";
    }
}
window.onscroll = function (e) {
    var st = document.documentElement.scrollTop;
    console.log(st);
    $(".nav-list").css("background", "#626262");
    if (st > 800) {
        topFixed.style.top = 0;
    } else {
        topFixed.style.top = -50 + 'px';
    }
    if (st > 600) {
        leftFixed.style.transform = "scale(1,1)";
        leftFixed.style.opacity = 1;
    } else {
        leftFixed.style.transform = "scale(0,0)";
        leftFixed.style.opacity = 0;
    }
    if (st > 1325 && st < 2016) {
        $(".nav-list:eq(0)").css("background", "#64C333");
    }
    if (st > 2015 && st < 2709) {
        $(".nav-list:eq(1)").css("background", "#000000");
    }
    if (st > 2708 && st < 3465) {
        $(".nav-list:eq(2)").css("background", "#EA5F8D");
    }
    if (st > 3464 && st < 4221) {
        $(".nav-list:eq(3)").css("background", "#0AA6E8");
    }
    if (st > 4220 && st < 4977) {
        $(".nav-list:eq(4)").css("background", "#64C333");
    }
    if (st > 4976 && st < 5733) {
        $(".nav-list:eq(5)").css("background", "#F15453");
    }
    if (st > 5732 && st < 6300) {
        $(".nav-list:eq(6)").css("background", "#64C333");
    }
    if (st > 6300) {
        $(".nav-list:eq(7)").css("background", "#000");
    }
    $(".nav-list:eq(1)").click(function () {
        console.log(1);
    })
}
$(".nav-list:eq(0)").attr("stNum", 1330);
$(".nav-list:eq(1)").attr("stNum", 2020);
$(".nav-list:eq(2)").attr("stNum", 2715);
$(".nav-list:eq(3)").attr("stNum", 3470);
$(".nav-list:eq(4)").attr("stNum", 4226);
$(".nav-list:eq(5)").attr("stNum", 4982);
$(".nav-list:eq(6)").attr("stNum", 5737);
$(".nav-list:eq(7)").attr("stNum", 6308);
$(".nav-list").click(function () {
    $(".nav-list").css("background", "#626262");
    var stNum = $(this).attr("stNum");
    console.log(stNum);
    animate(document.documentElement, {
        scrollTop: stNum
    }, 500)
})


$(".top").click(function () {
    console.log(1);
    animate(document.documentElement, {
        scrollTop: 0
    }, 500)
})