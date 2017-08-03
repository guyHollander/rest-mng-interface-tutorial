/*** sample file to upload files from local machine fs to DP fs ***/

const fs = require('fs');
const dirlocation = 'files';
// Rest mng int model
const rmiFunctions = require('./rmiFunctions.js');

var domain = 'RMI';
var dpDirPath = 'local/exemple';
var overwrite = true;

function uploadFile(fileName) {
  /* read file data */
  var filePath = './files/' + fileName
  console.log('read data from ' + fileName);
  var fileData =  fs.readFileSync(filePath);
  /* transform to base64 */
  var base64Data = fileData.toString('base64')
  // console.log(base64Data);

  /* upload file to DP file store */
  rmiFunctions.uploadFile(fileName, dpDirPath, domain, base64Data, overwrite, (resCode)=> {
    if(resCode != 200 && resCode != 201){
      console.log(' fail to upload file %s', fileName);
    } else {
      console.log('successfully upload file %s ', fileName);
    }
  });
}
/* read files from local dir */
var files = fs.readdirSync(dirlocation);
console.log(files);

/* read the data of each file in dir, calls uploadFile function */
for (var i = 0, len = files.length; i < len; i++) {
  try {
    uploadFile(files[i]);
  } catch (e) {
    console.log(e.message);
  }

}
