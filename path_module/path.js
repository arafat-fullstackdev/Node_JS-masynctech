const path = require('path');
//console.log(path)

//Get the file name
//console.log(path.basename('/project/hello.js'))
//console.log(path.basename('math.js'))
//console.log(process.env.PATH);

//* dir name
//console.log(path.dirname('/project/hello.js'))

//?File extension name
//console.log(path.extname('/project/hello.jv'))

//! join path [Works across the os]
//console.log(path.join('/project', 'file','nodeP.js'));

//! Get Absolute path
console.log(path.resolve('code.txt'));

//? Access special path 
console.log(__filename);
console.log(__dirname);