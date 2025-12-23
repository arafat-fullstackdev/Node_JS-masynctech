const { error } = require('console');
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
    const relese = os.release();
    const hostName = os.hostname();
    const upTime= formatTime(os.uptime());

    // console.log({
    //     type,
    //     platform,
    //     relese,
    //     hostName,
    //     upTime
    // })
}

getOsInfo();
//get user info

const getUserInfo =()=>{
    const user = os.userInfo();

    //console.log(user)
}

getUserInfo()
//get network info

const getNetInfo=()=>{
    const netInfo = os.networkInterfaces();

    //console.log(netInfo)
}
getNetInfo()
//get process

const getProcessInfo=()=>{
    const pid= process.pid;
    const title = process.title;
    const nodeVersion = process.version;

    console.log({pid,title,nodeVersion});

    cwd: process.cwd();
    memoryUsage: {
        rss: formatBytes(process.memoryUsage().rss);
        heapTotal: formatBytes(process.memoryUsage().heapTotal);
        heapUsed: formatBytes(process.memoryUsage().heapUsed);
        external: formatBytes(process.memoryUsage().external);
    }

    env:{
        NODE_ENV: process.env.NODE_ENV || 'Not set'
    }
};

getProcessInfo()

//! create server

const server = http.createServer((req,res)=>{
     const parseUrl = url.parse(req.url, true);
     res.setHeader("Content-Type", "application/json");
     if(parseUrl.pathname ==='/'){
        res.statusCode = 200;
        res.end(JSON.stringify({
            name: "Syctem view API",
            description: "Acces system ",
            routes: ['/cpu','/memory','user']
        }))
     }else if(parseUrl.pathname === '/cpu'){
     res.end(JSON.stringify(getCpuInfo(), null, 2));
     }else{
        res.statusCode = 404;
        JSON.stringify({
          error: "Route not found",
        })
     }


})

//! start server
const PORT = 2000;
server.listen(PORT, ()=>{
    console.log(`System is running at http://localhost: ${PORT}`);
})
