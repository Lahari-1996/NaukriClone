
var arr=JSON.parse(localStorage.getItem("register"))
console.log(arr)
document.getElementById("login").addEventListener("click",login)
function login(){
    console.log(1)
    var emailid=document.getElementById("nameji").value;
    console.log(emailid)
    var password=document.getElementById("passwordji").value
    var count=0;

    if((emailid===arr.email)&&(password===arr.password))
    {

        count++;
        window.location.href="../lahari/home.html";
        alert("login successfull")
    
    dataji.push(el)
        }
console.log(el)

console.log(dataji)
localStorage.setItem("login_data",JSON.stringify(register))

    


if(count==0)
{
    alert("login fail")
}
document.getElementById("nameji").value=" ";
document.getElementById("passwordji").value=" ";
}