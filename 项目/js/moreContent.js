$(".list-close").click(function () {
    $(".menu-list").animate({
        width: "0%"
    }, 300, function () {
        $(".menu").css({
            display: "none"
        });
    })


});
$(".menu-btn").click(function () {
    $(".menu").css({
        display: "block"
    });
    $(".menu-list").animate({
        width: "50%"
    }, 300)
});
$(".wrap-item").click(function () {
    var flag = $(".wrap-item").index($(this));
    $(".r-container").css({
        "display": "none"
    });
    $(".wrap-item").css({
        "color": "black",
        "background": "#fff"
    })
    $(this).css({
        "background": "rgb(75, 121, 16)",
        "color": "#fff"
    })
    $(".r-container:eq(" + flag + ")").css({
        "display": "block"
    });
})