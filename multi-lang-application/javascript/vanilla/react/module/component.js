import { lang } from "../utils/lang";
import { MESS } from "./lang";

function addHTML(html, text) {
  switch (html){
    case 'h1': 
    return  <h1>{text}</h1>
    case 'p': 
    return  <p>{text}</p>
  }
}

const h1 = addHTML('h1', lang(MESS.HEADER))
const p = addHTML('p', lang(MESS.DESCRIPTION))