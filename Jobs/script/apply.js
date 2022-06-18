function cancleform(){
    window.location.href="./jobs.html"
   }

   let jobdata=JSON.parse(localStorage.getItem("jobdata"))||[];
   console.log(jobdata);
   jobdata.forEach(el => {
    let one=document.getElementById('loc');
    one.innerHTML="Are you ready for working from Office at " + el.location+ " Location";

    let two=document.getElementById('sal');
    two.innerHTML="Are you agree to initial 6 months training period with  Annual salary"+ el.salary ;
    
   });

   function submitdata(e){
    e.preventDefault();
     let   location=document.getElementById('location').checked;
     let   period=document.getElementById('period').checked;
     let   bond=document.getElementById('bond').checked;
     let   technology=document.getElementById('technology').checked;
       let prev=document.getElementById('prev').checked;
       let location1=document.getElementById('location1').checked;
      let  period1=document.getElementById('period1').checked;
      let bond1=document.getElementById('bond1').checked;
        let technology1=document.getElementById('technology1').checked;
       let prev1=document.getElementById('prev1').checked;
     console.log(location,location1,period1,prev1,bond1,technology1)

     if((location ==true || location1==true)&&(period ==true|| period1==true) && (bond ==true || bond1==true)&& (technology ==true|| technology1==true)&&(prev ==true || prev1==true)){
        alert("Successfully applied")
        window.location.href="../lahari/home.html"
     }
     else{
        alert("Please provide answer to this question")
        window.location.reload();
     }


   let data= [{
        
        location:document.getElementById('location').checked,
        period:document.getElementById('period').checked,
        bond:document.getElementById('bond').checked,
        technology:document.getElementById('technology').checked,
        prev:document.getElementById('prev').checked,
        
    }]
    
    console.log(data)
   }