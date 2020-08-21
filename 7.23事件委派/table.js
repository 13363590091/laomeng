/*
1.能创建指定的表格
2.对表格的内容进行编辑
3.动态的添加行列
4.动态的进行删除
*/
function table() {
    this.clientW = document.documentElement.clientWidth;
    this.clientH = document.documentElement.clientHeight;
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
            var cols = that.cowInput.value;
            console.log(rows);
            console.log(cols);
            that.pannel.style.display = "none";
            that.table = document.createElement("table");
            for (var i = 0; i < rows; i++) {
                var tr = document.createElement("tr");
                for (var j = 0; j < cols; j++) {
                    var td = document.createElement("td");
                    tr.appendChild(td);
                }
                that.table.appendChild(tr);
                document.body.appendChild(that.table);
            }
            that._setTableCss();
        }
    },

    _setTableCss(styleText) {
        var css = `
        table{
            width:80%;
            height:auto;
            border 1px solid #000;
        }
        td{
            border:1px solid  #000;
            border-collapse:collapse;
        }
        `; //单元格之间的距离   
        var finalcss = styleText ? styleText : css;
        this.style = document.createElement("style");
        this.style.innerHTML = finalcss;
        document.body.append(this.style);
    }
}