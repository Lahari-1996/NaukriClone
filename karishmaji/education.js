document.getElementById("button").addEventListener("click",info)
var arr= JSON.parse(localStorage.getItem("education"))||[]
function info(){
     console.log(1)
var obj={
     education:document.getElementById("education").value,
     course:document.getElementById("course").value,
     specl:document.getElementById("specialisation").value,
     university:document.getElementById("university").value
}
arr.push(obj)
window.location.href="../karishmaji/profile.html"
console.log(1)
localStorage.setItem("education",JSON.stringify(arr));
}