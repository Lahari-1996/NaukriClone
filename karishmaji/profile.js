var hmm=document.getElementById("box2")

var hnji=document.getElementById("box3")
var dataji=JSON.parse(localStorage.getItem("register"))
console.log(dataji)


 function append(dataji){



  
  var name=  document.createElement("h3");
  name.innerText=dataji.name
var ji=document.getElementById("name_box")
ji.innerHTML=" "
ji.append(name)

var address=document.createElement("p")
address.innerText=dataji.city
var exp=document.createElement("p")
exp.innerText="Fresher";
var jiki=document.createElement("p")
jiki.innerText="Add availability to join"
var email=document.createElement("p")
email.innerText=dataji.email;
var mobile=document.createElement("p")
mobile.innerText=dataji.mobile;


hmm.append(address,exp,jiki)

hnji.append(mobile,email)

}
 append(dataji)





















function click(){
    document.getElementById(image).value
}


// <---------------------------------------------------------------------------------------------->

var arr= JSON.parse(localStorage.getItem("education"))
arr.forEach(function (ele){
  var school=document.createElement("h4")
  school.innerText=ele.education;
  var course=document.createElement("h4")
  course.innerText=ele.course;
  var spcl=document.createElement("h4")
  spcl.innerText=ele.specl;
  var uni=document.createElement("h4")
  uni.innerText=ele.university;
  var hogya=document.getElementById("education")
  education.append(school,course,spcl,uni)

})
// <---------------------------------------------------------------------------------->

var arr2= JSON.parse(localStorage.getItem("itskill"))||[]
arr2.forEach(function (ele){
  var school=document.createElement("h4")
  school.innerText=ele.skill;
  var course=document.createElement("h4")
  course.innerText=ele.experience;
  
  var hogya=document.getElementById("it")
  hogya.append(school,course)

})
 document.getElementById("logout").addEventListener("click",deleteji)
function deleteji(){
  console.log(1)
  localStorage.removeItem("login_data")
  localStorage.removeItem("Education")
  localStorage.removeItem("itskill")
}


