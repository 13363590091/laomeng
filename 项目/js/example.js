$(".wrap-item").click(function () {
    var flag = $(".wrap-item").index($(this));
    $(".wrap-item").css({
        "color": "black",
        "background": "#fff"
    })
    $(this).css({
        "background": "rgb(75, 121, 16)",
        "color": "#fff"
    })
})