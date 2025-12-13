console.log("Hello From Node JS");

let user = "Dimitri"
const currentTime = new Date();
const hour = currentTime.getHours();
let greeting;


if(hour< 12){
    greeting ="Good Morning";
}else if(hour<18){
    greeting ="Good Afternoon"
}else{
greeting= "Good Evening"
}
console.log(`${user} ${greeting} Welcome to Node Course`);