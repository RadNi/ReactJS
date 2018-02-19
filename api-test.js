// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let xml = new XMLHttpRequest()

xml.open('GET', 'https://api.github.com', true)
xml.setRequestHeader('Accept', 'application/vnd.github.v3+json')

xml.send()

xml.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        addEntityToTable(document.getElementById('my-table'), JSON.parse(this.response))
    }
};


function addEntityToTable(tableElm, tdcol) {
    for (let i in tdcol) {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerHTML = i
        td.onclick = retonclick(tdcol[i])
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = tdcol[i]
        tr.appendChild(td)
        tableElm.appendChild(tr)
    }
}

function retonclick(value) {
    return function (event) {
        let xml = new XMLHttpRequest()

        xml.open('GET', value, true)
        xml.setRequestHeader('Accept', 'application/vnd.github.v3+json')
        xml.setRequestHeader ("Authorization", "Basic " + btoa("RadNi" + ":" + "my github password "));

        xml.send()

        Element.prototype.remove = function() {
            this.parentElement.removeChild(this);
        }


        xml.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let elm = document.getElementById("my-table")
                console.log("ha?!")
                while (elm.firstChild) {
                    elm.removeChild(elm.firstChild);
                }
                addEntityToTable(document.getElementById('my-table'), JSON.parse(this.response))
                // let el = document.createElement('p')
                // el.innerHTML = JSON.parse(this.responseText)
                // document.appendChild(el)
            }
        };
    }
}
