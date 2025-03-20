let hr=document.querySelector(".hour");
let min=document.querySelector(".min");
let sec=document.querySelector(".sec");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
setInterval(()=>{
    let date=new Date();
    hr.innerText=date.getHours();
    min.innerText=date.getMinutes();
    sec.innerText=date.getSeconds();
    

},1000);
let date=document.querySelector(".date");
let d=new Date();
date.innerText=d.toISOString().split('T')[0];
let idx=d.getDay();
let day=document.querySelector(".days");
day.innerText=days[idx];
const hour=d.getHours();
const amPm = hour >= 12 ? "PM" : "AM";
document.querySelector(".ampm").innerText=amPm;