const http = require('http');
const os = require('os');
const process = require('process');
const url = require('url');


//? Formate byte to human-readable format 
function formatBytes(bytes, decimal =2){
    if(bytes ===0) return '0 bytes'

    //set base unit
    const k = 1024
    const size = ['Bytes','KB','MB','TB','PB']
    const i = Math.floor(Math.log(bytes)/Math.log(k))
    return parseFloat((bytes/Math.pow(k,i))).toFixed(decimal) + ' ' + size[i]
}


//get memory info
//get os info
//get user info
//get network info
//get process
console.log(os.cpus())