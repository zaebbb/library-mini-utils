import { ENV } from "../config";

export function lang(langsObj = {}){
  return langsObj[ENV.LANG]
}