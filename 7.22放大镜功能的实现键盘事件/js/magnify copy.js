//window.onload 当整个页面都加载完成 会执行这个函数 加载太慢
//包含需要加载的文件和图片 请求完成才可以
//

//面试题 ：在html页面当中有哪些场景会向服务器发起请求
//  link css 
//  script -> js
//  img -> 图片
//  a href 点击发起请求
//  表单提交
//  ajax 请求
// window.addEventListener("load", function () {

// })
window.addEventListener("DOMContentLoaded", function () { //html 结构加载完就会运行 不然把js放在html中
    var middleBox = document.querySelector(".middle-box");
    var middleImg = middleBox.firstChild.nextSibling;
    var copy = document.querySelector(".copy");
    //console.log(middleImg);
    var smallBox = document.querySelector(".small-box");
    var bigBox = document.querySelector(".big-box");
    var bigImg = bigBox.firstChild.nextSibling;
    var smallList = smallBox.children;
    //console.log(smallList);
    //小图切换中图大图
    for (let i = 0; i < smallList.length; i++) {
        smallList[i].onclick = function () {
            for (let j = 0; j < smallList.length; j++) {
                smallList[j].style.border = "2px solid #fff";
            }
            smallList[i].style.border = "2px solid gold";
            middleImg.src = "img/mid" + (i + 1) + ".jpg";
            //console.log(middleImg);
            bigImg.src = "img/big" + (i + 1) + ".jpg";

        }
    }
    var mask = document.querySelector(".mask");
    //大图显示隐藏
    //改变事件流
    //1.写一个函数
    //2.改变html结构的方式 . 事件流->有层级关系,改变成平级关系,加一个一样大小的div 上添加事件
    /* 第三种 // formElement toElement这两个属性只有mouseover 和mouseout里面有
    //事件对象 e  e.type formElement toElement
    //自己写一个函数 代替mouseover mouseout
    // 如何判断鼠标是不是从内部来的  内部来的 false 不是内部来的 true
    hover(middleBox, function () {
        bigBox.style.display = "block";
        mask.style.display = "block" n
        console.log("over");
    }, function () {
        bigBox.style.display = "none";
        mask.style.display = "none"
        console.log("out");
         function check(ev, target) {
        if (ev.type == "mouseover") {
            return (!target.contains(ev.fromElement))
        } else if (ev.type == "mouseout") {
            return (!target.contains(ev.toElement))
        }
    }

    function hover(obj, overfn, outfn) {
        obj.onmouseover = function (e) {
            if (check(e, obj)) {
                if (overfn) {
                    overfn();
                }
            }
        }
        obj.onmouseout = function (e) {
            if (check(e, obj)) {
                //outfun.call(obj);
                if (outfn) {
                    outfn();
                }
            }
        }
    }

    })*/
    //第二种解决办法  平级 加一个一样大小的div 上添加事件
    //
    copy.onmouseover = function () {
        bigBox.style.display = "block";
        mask.style.display = "block"
        console.log("over");
    }
    copy.onmouseout = function () {
        bigBox.style.display = "none";
        mask.style.display = "none";
        console.log("out");
    }
    //放大镜
    copy.onmousemove = function (e) {
        var ox = e.offsetX; //事件的源
        var oy = e.offsetY;

        //
        var x = ox - 100;
        var y = oy - 100;
        if (x < 0) {
            x = 0
        }
        if (y < 0) {
            y = 0;
        }
        if (x > middleBox.offsetWidth - mask.offsetWidth) {
            x = middleBox.offsetWidth - mask.offsetWidth;
        }
        if (y > middleBox.offsetHeight - mask.offsetHeight) {
            y = middleBox.offsetHeight - mask.offsetHeight;
        }
        mask.style.top = y + "px";
        mask.style.left = x + "px";
        bigImg.style.marginLeft = -x * 4 + "px";
        bigImg.style.marginTop = -y * 4 + "px";

    }


    //自己写一个函数 代替mouseover mouseout
    // 如何判断鼠标是不是从内部来的  内部来的 false 不是内部来的 true
})