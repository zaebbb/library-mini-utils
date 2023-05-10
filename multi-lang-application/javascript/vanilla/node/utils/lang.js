const ENV = require("../config");

module.exports = function(langsObj = {}){
  return langsObj[ENV.LANG]
}