  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//
// let xml = new XMLHttpRequest()
//
// xml.open('GET', 'https://api.github.com', true)
// xml.setRequestHeader('Accept', 'application/vnd.github.v3+json')
// xml.setRequestHeader ("Authorization", "Basic " + Buffer.from("RadNi" + ":" + "Amirhossein11").toString('base64'));
//
// xml.send()
//  xml.onreadystatechange = function() {
//      if (this.readyState == 4 && this.status == 200) {
//          console.log(JSON.parse(this.responseText))
//          console.log(this.getResponseHeader('Cookie'))
//          console.log(this.getAllResponseHeaders())
//
//
//          let xml = new XMLHttpRequest()
//
//          xml.open('GET', 'https://api.github.com/user', true)
//          xml.setRequestHeader('Accept', 'application/vnd.github.v3+json')
//          xml.setRequestHeader ("Authorization", "Basic " + Buffer.from("RadNi" + ":" + "Amirhossein11").toString('base64'));
//
//          console.log("from here : ")
//          console.log(this.getResponseHeader("etag") + " " + this.getResponseHeader("x-github-request-id"))
//          let tmp = this.getResponseHeader("access-control-expose-headers").split(', ')
//
//          // for (let i in tmp) {
//          //     if(this.getResponseHeader(tmp[i].toLowerCase())) {
//          //         console.log(tmp[i] + " : " + this.getResponseHeader(tmp[i].toLowerCase()))
//          //         xml.setRequestHeader(tmp[i].toLowerCase(), this.getResponseHeader(tmp[i].toLowerCase()))
//          //     }
//          // }
//
//
//          xml.send()
//
//          xml.onreadystatechange = function () {
//              if(this.readyState == 4) {
//                  console.log(JSON.parse(this.responseText))
//                  console.log(this.getAllResponseHeaders())
//              }
//          }
//
//      }
//  };




let xml = new XMLHttpRequest()

xml.open('GET', 'https://api.github.com/user', true)
xml.setRequestHeader('Accept', 'application/vnd.github.v3+json')
xml.setRequestHeader ("Authorization", "Basic " + Buffer.from("RadNi" + ":" + "Amirhossein11").toString('base64'));


// for (let i in tmp) {
//     if(this.getResponseHeader(tmp[i].toLowerCase())) {
//         console.log(tmp[i] + " : " + this.getResponseHeader(tmp[i].toLowerCase()))
//         xml.setRequestHeader(tmp[i].toLowerCase(), this.getResponseHeader(tmp[i].toLowerCase()))
//     }
// }


xml.send()

xml.onreadystatechange = function () {
    if(this.readyState == 4) {
        console.log(JSON.parse(this.responseText))
        console.log(this.getAllResponseHeaders())
    }
}