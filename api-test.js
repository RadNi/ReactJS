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
        td.onclick(retonclick(i))
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = tdcol[i]
        tr.appendChild(td)
        tableElm.appendChild(tr)
    }
}

function retonclick(key) {
    switch (key) {
        case "current_user_url" :
            return function (event) {
                let xml = new XMLHttpRequest()

                xml.open('GET', 'https://api.github.com', true)
                xml.setRequestHeader('Accept', 'application/vnd.github.v3+json')
                xml.setRequestHeader ("Authorization", "Basic " + btoa("RadNi" + ":" + "Amirhossein11"));

                xml.send()

            }
            break;
    }
}