
document.getElementById("register").addEventListener("click",sign)
function sign(){

var obj={
   name: document.getElementById("name").value,
   email:document.getElementById("email").value,
   password:document.getElementById("password").value,
   mobile:document.getElementById("number").value,
   city:document.getElementById("city1").value,
   
}
// var arr= JSON.parse(localStorage.getItem("register"))||[];
// arr.push(obj)
localStorage.setItem("register",JSON.stringify(obj))
window.location.href="sign.html"
document.getElementById("name").value=" ";
document.getElementById("email").value=" ";
document.getElementById("password").value=" ";
document.getElementById("number").value=" ";
document.getElementById("city1").value=" ";


}