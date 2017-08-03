/*** sample file to reload service configuration ***/

const fs = require('fs');
// Rest mng int model
const rmiFunctions = require('./rmiFunctions.js');

var domain = 'RMI';
var objectName = 'StockQuote';
var objectType = 'WSGateway';

try {
  rmiFunctions.reloadObj(objectName, objectType, domain, (resCode)=>{
    if(resCode != 200 && resCode != 201){
      console.log(' fail to acitivate obj %s', objectName);
    } else {
      console.log('successfully reload obj %s ', objectName);
    }
  });
} catch (e){
  console.log(e.message);
}
