const lang = require("../utils/lang");
const MESS = require("./lang");

function addHTML(html, text) {
  switch (html){
    case 'h1': 
    return  `<h1>${text}</h1>`
    case 'p': 
    return  `<p>${text}</p>`
  }
}