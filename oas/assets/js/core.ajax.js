function AjaxRequest() {
    this.mRequest = this.getHttpRequest(), this.mHandlers = new Array;
    var e = this;
    this.mRequest.onreadystatechange = function() {
        if (void 0 != e.mHandlers[e.mRequest.readyState])
            for (i = 0; i < e.mHandlers[e.mRequest.readyState].length; i++) e.mHandlers[e.mRequest.readyState][i](e)
    }
}

function CoreDo(e, t) {
    var a = new AjaxRequest;
    if (a.mRequest) {
        "https:" == document.location.protocol ? e.indexOf("https:") > -1 || (e) : e , a.mFileName = e;
        var o = document.getElementById(t);
        a.mRequest.open("GET", e), a.mRequest.onreadystatechange = function() {
            4 == a.mRequest.readyState && 200 == a.mRequest.status && (o.innerHTML = a.mRequest.responseText)
        }
    }
    a.mRequest.send(null)
}

function httpshash() {
    return "http"
}

function isValidEmail(e) {
    var t = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return t.test(e)
}
