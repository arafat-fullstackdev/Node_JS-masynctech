const http = require('http');
const os = require('os');
const process = require('process');
const url = require('url');


//? Formate byte to human-readable format 
function formatBytes(bytes, decimal =2){
    if(bytes ===0) return '0 bytes'

    //set base unit
    const k = 1024
    const size = ['Bytes','KB','MB','GB','TB','PB']
    const i = Math.floor(Math.log(bytes)/Math.log(k))
    return parseFloat((bytes/Math.pow(k,i))).toFixed(decimal) + ' ' + size[i]
}

//?Format seconds to human readable time
function formatTime(seconds){
    const days =Math.floor(seconds/(3600*24))
    const hours= Math.floor((seconds % (3600*24))/3600)
    const minutes = Math.floor((seconds%3600)/60)
    const sec = Math.floor((seconds%60))

    return `${days}D ${hours}H ${minutes}M ${sec}S`
}
//console.log(os.cpus()[0]);

//?cpu info
const getCpuInfo = ()=>{
    const model = os.cpus()[0].model 
    const cores = os.cpus().length
    const architecture = os.arch()
    const loadAvg = os.loadavg
    //console.log({model,cores,architecture,loadAvg})
    return {
        model,
        cores,
        architecture,
        loadAvg
    }
}
getCpuInfo();
//console.log(getCpuInfo())

//get memory info
const getTotalMemory =()=>{
    const total =formatBytes( os.totalmem())
    const free= formatBytes(os.freemem())
    // console.log({total,free})
    const usage = ((1-os.freemem()/os.totalmem())*100).toFixed(2)+'%'
    //console.log(usage)
    return {
        total,
        free,
        usage
    }
}

getTotalMemory();

//! get os info 
const getOsInfo =()=>{
    const platform = os.platform();
    const type=os.type();

    console.log({
        type,
        platform
    })
}

getOsInfo();
//get user info
//get network info
//get process
