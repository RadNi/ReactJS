class GitHub {

    constructor(username, password) {
        this.loginGitHub(username, password)
    }

    static authapi(xhttp, url) {
        let xml = new XMLHttpRequest()

        xml.open('GET', url, true)
        xml.setRequestHeader('Accept', 'application/vnd.github.v3+json')
        let tmp = xhttp.getResponseHeader("access-control-expose-headers").split(', ');

        for (let i in tmp) {
            if(xhttp.getResponseHeader(tmp[i].toLowerCase())) {
                xml.setRequestHeader(tmp[i].toLowerCase(), xhttp.getResponseHeader(tmp[i].toLowerCase()))
            }
        }
        xml.send()

        xml.onreadystatechange = function () {
            if(this.readyState == 4) {
                if (this.status == 200) {
                    return this
                }else if (this.status == 401) {
                    throw "authentication failed"
                }else {
                    throw "connection Error, status code : " + this.status
                }
            }
        }
    }

    loginGitHub(username, password) {
        let xhttp = new xhttpHttpRequest()
        xhttp.open('GET', 'https://api.github.com/user', true)
        xhttp.setRequestHeader('Accept', 'application/vnd.github.v3+json')

        xhttp.setRequestHeader ("Authorization", "Basic " + Buffer.from(`${username}` + ":" + `${password}`).toString('base64'));
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    return this
                }else if (this.status == 401){
                    throw "authentication failed"
                }else {
                    throw "connection Error, status code : " + this.status
                }
            }
        };
    }

    static makeURL(url, ...args) {
        let finalurl = ''
        for (let i of args) {
            let tmp = url.indexOf('{')
            if (tmp == -1) {
                throw "exceeded arguments number, arguments length : " + args.length
            }
            finalurl += url.substring(0, tmp)
            finalurl += i
            url = url.substring(url.indexOf('}') + 1, url.length)
        }
        if (url.indexOf('{') != -1) {
            throw "exceeded arguments number, arguments length : " + args.length
        }
        return finalurl
    }

    static simpleapi() {
        var xhttpHttpRequest = require("xhttphttprequest").xhttpHttpRequest;

        let xhttp = new xhttpHttpRequest()

        xhttp.open('GET', 'https://api.github.com', true)
        xhttp.setRequestHeader('Accept', 'application/vnd.github.v3+json')

        xhttp.send()
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    return this
                }else {
                    throw "connection Error, status code : " + this.status
                }
            }
        };
    }
}




