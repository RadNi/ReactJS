 var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let xml = new XMLHttpRequest()

xml.open('GET', 'https://api.github.com', true)
xml.setRequestHeader('Accept', 'application/vnd.github.v3+json')
xml.setRequestHeader ("Authorization", "Basic " + Buffer.from("RadNi" + ":" + "Amirhossein11").toString('base64'));

xml.send()
 xml.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
         console.log(this.responseText)
         console.log(this.getAllResponseHeaders())
     }
 };