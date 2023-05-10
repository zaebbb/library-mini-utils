export {}

// config.ts
enum LangVal {
  RU = 'RU',
  EN = 'EN',
}

interface ENVType {
  LANG: LangVal
}

const ENV: ENVType = {
  LANG: LangVal.RU,
}

// lang/types.ts
interface LangProps {
  RU: string,
  EN: string
}

// lang/lang.ts
function lang(langsObj: LangProps){
  return langsObj[ENV.LANG]
}

// module/lang.ts
const MESS: Record<string, LangProps> = {
  HEADER: {
    RU: 'Привет мир',
    EN: 'Hello world'
  },
  DESCRIPTION: {
    RU: 'Это описание',
    EN: 'Description'
  }
}

// module/component.ts
function addHTML(html: string, text: string): string {
  switch (html){
    case 'h1': 
      return  `<h1>${text}</h1>`
    case 'p': 
      return  `<p>${text}</p>`
    default: 
      return text
  }
}

console.log(addHTML('h1', lang(MESS.HEADER)));
