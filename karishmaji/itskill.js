document.getElementById("button1").addEventListener("click",info2)
var arr2= JSON.parse(localStorage.getItem("itskill"))||[]
function info2(){
var obj={
     skill:document.getElementById("skill").value,
     experience:document.getElementById("experience").value,
    
}
arr2.push(obj)
window.location.href="/login/profile.html"
console.log(1)
localStorage.setItem("itskill",JSON.stringify(arr2));
}