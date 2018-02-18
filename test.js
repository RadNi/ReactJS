  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let xml = new XMLHttpRequest()

xml.open('GET', 'https://api.github.com', true)
xml.setRequestHeader('Accept', 'application/vnd.github.v3+json')
xml.setRequestHeader ("Authorization", "Basic " + Buffer.from("RadNi" + ":" + "Amirhossein11").toString('base64'));

xml.send()
 xml.onreadystatechange = function() {
     if (this.readyState == 4) {
         console.log(this.getAllResponseHeaders())
     }

     if (this.readyState == 4 && this.status == 200) {
         console.log(JSON.parse(this.responseText))
         console.log(this.getResponseHeader('Cookie'))
         console.log(this.getAllResponseHeaders())


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

                 console.log("here : ")
                 console.log(JSON.parse(this.responseText))

                 console.log(JSON.parse(this.responseText).id)
                 //
                 // for ( let x in JSON.parse(this.responseText)) {
                 //     console.log(JSON.parse(this.responseText)[x])
                 // }

                 // https://github.com/settings/connections/applications
                 let xml = new XMLHttpRequest()

                 xml.open('GET', 'https://github.com/settings/connections/applications', true)
                 xml.setRequestHeader('Accept', 'application/vnd.github.v3+json')
                 let tmp = this.getResponseHeader("access-control-expose-headers").split(', ');

                 console.log("tmp : ")
                 console.log(tmp)
                 for (let i in tmp) {
                     console.log(tmp[i])
                      if(this.getResponseHeader(tmp[i].toLowerCase())) {
                          console.log(tmp[i] + " : " + this.getResponseHeader(tmp[i].toLowerCase()))
                          xml.setRequestHeader(tmp[i].toLowerCase(), this.getResponseHeader(tmp[i].toLowerCase()))
                      }
                  }
                  xml.send()

                  xml.onreadystatechange = function () {
                      if(this.readyState == 4) {
                          console.log(this.getAllResponseHeaders())
                      }
                  }

             }
         }

     }
 };




// let xml = new XMLHttpRequest()
//
// xml.open('GET', 'https://api.github.com/user', true)
// xml.setRequestHeader('Accept', 'application/vnd.github.v3+json')
// xml.setRequestHeader ("Authorization", "Basic " + Buffer.from("RadNi" + ":" + "Amirhossein11").toString('base64'));


// for (let i in tmp) {
//     if(this.getResponseHeader(tmp[i].toLowerCase())) {
//         console.log(tmp[i] + " : " + this.getResponseHeader(tmp[i].toLowerCase()))
//         xml.setRequestHeader(tmp[i].toLowerCase(), this.getResponseHeader(tmp[i].toLowerCase()))
//     }
// }


// xml.send()
//
// xml.onreadystatechange = function () {
//     if(this.readyState == 4) {
//         console.log(JSON.parse(this.responseText))
//         console.log(this.getAllResponseHeaders())
//     }
// }


  let mp = "hiiesell"
  console.log(mp.indexOf('{'))

  console.log(mp.substring(mp.indexOf('s') + 1, mp.length))

  // console.log(mp.substring(3))
  // console.log(mp.indexOf('s'))

let url = 'https://github.com/settings/connections/applications{/client_id}'

  console.log(makeURL(url))

  function makeURL(url, ...args) {
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