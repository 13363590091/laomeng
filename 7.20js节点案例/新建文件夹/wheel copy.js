function wheel(wins, opts, runOpts) {
    // 参数初始化
    this.init(wins, opts, runOpts);
    // 获取窗口
    this.getWin();
    // 创建容器
    this.creatBox();
    // 创建轮播图表
    this.creatList();
    // 创建按钮
    this.creatBtn();
    // 轮播
    this.autoRun();
}

//点击播放
//this.clickRun();


wheel.prototype = {
    init(wins, opts, runOpts) {

        this.runOpts = runOpts;
        this.opts = opts;
        var wins = document.querySelector(wins);
        if (!(wins && wins.nodeType == 1)) {
            console.error("窗口元素no find!")
            rturn;
        }
        this.wins = wins;
        //图片最后加一个轮播图
        opts.imgs.push(opts.imgs[0]);
        //图片链接添加一个
        opts.links.push(opts.links[0]);
        //图片背景颜色添加一个
        opts.imgColor.push(opts.imgColor[0]);
        // 轮播图个数加一 
        this.imgLength = opts.imgs.length;
        if (this.imgLength == 0) {
            console.error("没有传入相应的轮播内容!");
            return;
        }
        console.log("imgLength:" + this.imgLength);
        //初始化图片大小判断 
        this.imgSize = opts.imgSize;
        if (!(this.imgSize instanceof Array)) {
            console.error("请传入合法的尺寸类型")
        }
        if (this.imgSize.length == 0) {
            this.imgSize[0] = document.documentElement.clientWidth;
            this.imgSize[1] = 400;
        }
        if (this.imgSize.length == 1) {
            this.imgSize.push(500);
        }

        if (this.imgSize.some(function (val) {
                return val == 0;
            })) {
            for (var i = 0; i < 2; i++) {
                if (this.imgSize[i] == 0) {
                    this.imgSize[i] = 500;
                }
            }
        }
        console.log("imgSize   [" + this.imgSize + "]");
        // 初始化按钮
        this.btnColor = opts.btnColor || "green";
        this.btnActive = opts.btnActive || "red";
        this.btnPos = opts.btnPos || ["center", "20"];
        this.btnWidth = opts.btnWidth || 50;
        this.btnMargin = opts.btnMargin || 20;
        this.btnHeight = opts.btnHeight || 10;
        var tim = runOpts.time || 5;
        this.time = tim * 1000;
        this.runStyle = null;
        this.eachTime = runOpts.eachTime * 1000 || 500;
        console.log("time :" + this.time);
        if (runOpts.runStyle == "linear" || runOpts.runStyle) {
            this.runStyle = Tween.Linear
        }
        if (runOpts.runStyle == "in") {
            this.runStyle = Tween.Quad.easeIn
        }
        if (runOpts.runStyle == "out") {
            this.runStyle = Tween.Quad.easeOut
        }
        if (runOpts.runStyle != "linear" && runOpts.runStyle != "in" && runOpts.runStyle != "out") {
            this.runStyle = runOpts.runStyle
        }
        console.log(this.runStyle);
        console.log(this.time);
    },
    getWin() {
        // 1.wins容器窗口的样式
        this.wins.style.cssText = "width:100%;height:" + this.imgSize[1] + "px;overflow:hidden;position:relative;border:1px solid red;";
    },
    creatBox() {
        // 2. 添加容器
        this.box = document.createElement("div");
        this.box.style.cssText = "width:" + this.imgLength * 100 + "%;height:100%;";
        this.wins.appendChild(this.box);
    },
    creatList() {
        for (var i = 0; i < this.imgLength; i++) {
            divList = document.createElement("div");
            divList.style.cssText = `float:left;
            width:${100 / this.imgLength}%;
            height:100%;
            background:${this.opts.imgColor[i]}`; //${变量}
            this.box.appendChild(divList); //
            //图片底下的链接
            var link = document.createElement("a");
            link.href = this.opts.links[i];
            link.style.cssText = "width:" + this.imgSize[0] + "px;height:" + this.imgSize[1] + "px;display:block;margin:auto;background:url(" + this.opts.imgs[i] + ") no-repeat 0 0";
            divList.appendChild(link); //

        }
    },
    creatBtn() {
        // //创建按钮 可以改

        var btnWidthNum = (this.btnWidth + this.btnMargin) * (this.imgLength - 1);
        console.log(btnWidthNum);
        var btnBox = document.createElement("div");
        btnBox.style.cssText = "width:" + btnWidthNum + "px;height:" + this.btnHeight + "px;position:absolute;left:0;right:0;margin:auto;bottom:" + this.btnPos[1] + "px;";
        this.btns = [];
        //for循环创建按钮
        for (var i = 0; i < this.imgLength - 1; i++) {
            var bgcolor = "";
            if (i == 0) {
                bgcolor = this.btnActive;
            } else {
                bgcolor = this.btnColor;
            }
            //第一个是选中状态的
            console.log(bgcolor);
            var btn = document.createElement("div");
            btn.style.cssText = "width:" + this.btnWidth + "px;height:" + this.btnHeight + "px;background:" + bgcolor + ";float:left;margin:0 " + this.btnMargin / 2 + "px;cursor:pointer;"
            btnBox.appendChild(btn);
            this.btns.push(btn);
        }
        this.wins.appendChild(btnBox);
        console.log(this.btns);
    },

    autoRun() {

        var winW = parseInt(getComputedStyle(this.wins, null).width);
        var num = 0;
        //运动函数
        //运动函数
        function move() {
            //每次轮播加一次
            num++
            //运动到最后一张的处
            if (num > this.btns.length - 1) {
                animate(this.box, {
                    "margin-left": -num * winW
                }, this.eachTime, this.runStyle, function () {
                    this.box.style.marginLeft = 0;
                });
                //位置回拨到第一张
                num = 0; //js特性 单线程异步机制语言
                // 用js单线程实现多线程 
            } else {
                animate(this.box, {
                    "margin-left": -num * winW
                }, this.eachTime, this.runStyle);
            }
            //轮播按钮的变化
            for (var i = 0; i < this.btns.length; i++) {
                this.btns[i].style.backgroundColor = this.btnColor;
            }
            this.btns[num].style.backgroundColor = this.btnActive;

        }
        //
        this.t = setInterval(this.move, this.time);
    }

}