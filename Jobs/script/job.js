

    let jobdata=JSON.parse(localStorage.getItem("jobdata"));
    let count=JSON.parse(localStorage.getItem("count"));
    document.querySelector("#ssss").innerHTML=" Applied jobs:"+count
    console.log(count)
    console.log(jobdata)
    jobdata.forEach(el => {

        let exp=document.getElementById('exp');
        exp.innerHTML="Experience:"+el.experience +"(Candidates with 1-year experience will be considered as freshers)";

        let home=document.querySelector('.home');

        let jobin11=document.getElementById("jobin1");
        let box=document.createElement('div');
        box.setAttribute('class','div')
      
        let y=document.getElementById("root2")

        let h4=document.createElement("h4");
        h4.innerText=el.titeljob;

         let p=document.createElement("p");
        p.innerText=el.company;

        let p1= document.createElement('p');
        p1.innerText=el.location;

        box.append(h4,p,p1)
        jobin11.append(box)
        //  x.append(jobin11);
         y.append(jobin11)
        // document.getElementById('jobin2').append(jobin11)
        


        home.innerHTML="Home>"+el.location;

        let depart=document.getElementById("jobtitle");
        depart.innerHTML=el.titeljob;

        let company=document.getElementById('company');
        company.innerHTML=el.company;

        let experience=document.getElementById("exprience");
        experience.innerHTML=el.experience;

        let salary=document.getElementById('sal')
        salary.innerHTML=el.salary;

        let loc=document.getElementById('loc11');
        loc.innerHTML=el.location;

        let day =document.querySelector('.post');
        day.innerHTML=el.daysago;

        let open=document.querySelector('.open');
        open.innerHTML=el.opening;
    });


    
