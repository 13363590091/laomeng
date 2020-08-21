/*
1.能创建指定的表格
2.对表格的内容进行编辑
3.动态的添加行列
4.动态的进行删除
*/
function table() {
    this.clientW = document.documentElement.clientWidth;
    this.clientH = document.documentElement.clientHeight;
    this.tableCss = "";
    //初始化
    this._init();
    this._optCard(); //内部自己执行的加个_
    //
    //this._setTableCss();
}
table.prototype = {
    _init() {
        this.startBtn = document.createElement("div");
        this.startBtn.style.cssText = "width:100%;height:40px;background:gold;font-size:30px;text-align:center;cursor:pointer;"
        this.startBtn.innerHTML = "表格";
        document.body.appendChild(this.startBtn);
    },
    _optCard() {
        var that = this; //onclick 存在this问题
        this.startBtn.onclick = function () {
            that._pannel();
            that._createTable();

        }
    },
    _pannel() {
        this.pannel = document.createElement("div");
        console.log(this.clientH);
        this.pannel.style.cssText = "width:" + (this.clientW / 3) + "px;height:" + (this.clientH / 2) + "px;position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;border:1px solid gray;"
        this.rowInput = document.createElement("input");
        this.rowInput.placeholder = "输入行数";
        this.cowInput = document.createElement("input");
        this.cowInput.placeholder = "输入列数";
        submit = document.createElement("input");
        submit.type = "button";
        submit.value = "确定";
        this.submit = submit;
        this.pannel.appendChild(this.rowInput);
        this.pannel.appendChild(this.cowInput);
        this.pannel.appendChild(this.submit);
        document.body.appendChild(this.pannel);


    },
    _createTable() {
        var that = this;
        console.log(this);
        this.submit.onclick = function () {
            var rows = that.rowInput.value;
            that.cols = that.cowInput.value;
            console.log(rows);
            console.log(that.cols);
            that.pannel.style.display = "none";
            that._setTableCss();
            that.table = document.createElement("table");
            for (var i = 0; i < rows; i++) {
                var tr = document.createElement("tr");
                for (var j = 0; j < that.cols; j++) {
                    var td = document.createElement("td");
                    tr.appendChild(td);
                }
                that.table.appendChild(tr);

            }
            document.body.appendChild(that.table);
            //添加按钮
            that._creatAddBtn();
            //可编辑ondblclick
            that._editTable();
            //
            that._addTable();
            that._delTable();


        }
    },

    _setTableCss() {
        var css = `
        table{
            width:800px;
            height:auto;
            border:1px solid #000;
            margin :auto;
        }
        td{
            height:30px;
            border:1px solid  #000;
            border-collapse:collapse;
        }
        `; //单元格之间的距离   
        var finalcss = this.tableCss ? this.tableCss : css;
        this.style = document.createElement("style");
        this.style.innerHTML = finalcss;
        document.body.append(this.style);
    },
    _editTable() {
        var that = this;
        that.table.ondblclick = function (ev) {
            var target = ev.target;
            target.setAttribute("contenteditable", true);
            target.focus();
            target.onblur = function () {
                target.removeAttribute("contenteditable")
            }
        }
    },
    _creatAddBtn() {
        this.addBtn = document.createElement("div");
        this.addBtn.innerHTML = "+";
        this.addBtn.style.cssText = "width:50px;height:30px;font-size:25px;margin:auto;box-shadow: 0 0 3px gold;cursor:pointer;text-align:center;margin-top:10px;"
        document.body.appendChild(this.addBtn);
        this._addTable();
    },
    _addTable() {
        var that = this;
        this.addBtn.onclick = function () {
            var tr = that.table.insertRow();
            alert(1);

            for (var i = 0; i < that.cols; i++) {
                tr.insertCell();
            }
        }
    },
    _delTable() {
        var that = this;
        this._createMenu();
        document.oncontextmenu = function (ev) {
            //ev.target事件源 目标对象
            ev.preventDefault();
            var cx = ev.clientX;
            var cy = ev.clientY;
            that.menu.style.left = cx + "px";
            that.menu.style.top = cy + "px";
            that.menu.style.display = "block";
            var target = ev.target;
            console.log(target.parentNode);
            that.delMenu.onclick = function () {

                that.table.removeChild(target.parentNode);
            }

        }
        document.onclick = function (ev) {
            if (ev.target != that.menu) {
                that.menu.style.display = "none";

            }
        }
    },
    _createMenu() {
        this.menu = document.createElement("ul");
        this.delMenu = document.createElement("li");
        //添加菜单功能
        this.delMenu.innerHTML = "删除本行";

        this.insMenu = document.createElement("li");
        this.insMenu.innerHTML = "取消";
        this.menu.style.cssText = "width:80px;height:auto;position:absolute;background:#fff;fontsize:15px;border:1px solid gray;display:none;cursor:pointer;";
        this.delMenu.style.cssText = "width:100%;height:20px;line-heght:20px; border-bottom:1px solid gray;";
        this.insMenu.style.cssText = "width:100%;height:20px;line-heght:20px; border-bottom:1px solid gray;";
        this.menu.appendChild(this.insMenu);
        this.menu.appendChild(this.delMenu);
        document.body.appendChild(this.menu);
    }


}