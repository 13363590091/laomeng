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
        //大图显示隐藏
        middleBox.onmouseover = function () {
            bigBox.style.display = "block";
        }
        middleBox.onmouseout = function () {
            bigBox.style.display = "none";
        }
        //放大镜
        middleBox.onmousemove = function (e) {
            var ox = e.offsetX;
            var oy = e.offsetY;
            var bilix = (bigImg.offsetWidth - bigBox.offsetWidth) / middleImg.offsetWidth;
            var biliy = (bigImg.offsetHeight - bigBox.offsetHeight) / middleImg.offsetHeight;
            bigImg.style.marginLeft = -ox * bilix + "px";
            bigImg.style.marginTop = -oy * biliy + "px";
        }
    }
})