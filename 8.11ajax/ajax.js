    //实现ajax异步过程函数
    //options json对象
    //url :     String          ajax请求的地址
    //type:     String          ajax请求的方式 get post
    //data:     String||Json    qin
    function (options) {
        /* 参数初始化 */
        if (typeof options != "object") {
            console.error("参数类型必须是json对象");
            return;
        }
        if (!options.url) {
            console.error("没有指定地址,请使用url属性指定");
            return;
        }
        var type = options.type || "get";
        var data = "";
        if (typeof options.data == "string") {
            data = options.data;
        } else {
            for (var i in options.data) {
                data += i + "=" + options.data[i] + "&"
            }
            data = data.slice(0, -1)
        }
        var dataType = options.dataType || "json";
        //初始化 成功函数
        var success = options.success;
        if (typeof success != "function") {
            console.error("缺少成功后的处理函数!");
        }
        //初始化 失败函数
        var error = options.error || function (e) {
            console.log(e);
        };
        //开始ajax 
        //1. 创建对象
        var xml = new XMLHttpRequest();
        //2.监听
        //[text,json,xml]
        if (dataType == "text" || "json") {
            xml.responseType = dataType;
        }
        xml.onreadystatechange = function () {
            if (xml.readyState == 4) {
                if (ajax.status == 200) {
                    if (dataType == "xml") {
                        var data = xml.responseXML;
                    } else {
                        var data = xml.response;
                    }
                    success(data);
                } else {
                    error("ajax错误!");
                }
            }
        }
        //3.
        if (type == "get") {
            xml.open(type, url + "?" + data);

        }
        if (type == "post") {
            xml.open(type, url);
            xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xml.send(data);
        }
    }