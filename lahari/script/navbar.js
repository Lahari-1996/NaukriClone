function navbar(){
    return `<div id="left">
        <img src="https://static.naukri.com/s/4/100/i/naukri_Logo.png" alt="logo">
    </div>
    <div class="mid">
    <ul>
    <li class="active"><a href="#">JOBS</a>
       <div class="jobchild">

        <ul>
            <li><a href="#">Search Jobs</a></li>
            <li><a href="#">Create Free Job Alert</a></li>
        </ul>
        <ul>
            <li><a href="#">Jobs by Location</a></li>
            <li><a href="#">Jobs by Skills</a></li>
            <li><a href="#">Jobs by Designation</a></li>
            <li><a href="#">Jobs by Company</a></li>
            <li><a href="#">Jobs by Category</a></li>
            <li><a href="#">Browse All Jobs</a></li>
      </div>



    </li>
    <li><a href="#">RECRUITERS</a>
        <div class="jobchild">
        <ul>
            <li><a href="#">Browse All Recruiters</a></li>
            <li><a href="#">Recruiter Connection</a></li>
            <li><a href="#">Go to NaukriRecruiter</a></li>
        </ul>
    </div>
    </li>
    
    <li><a href="#">COMPANIES</a>
        <div class="jobchild">
           <ul>
               <li>Browse All Companies</li>
               <li>About Companies</li>
               <li>Interview Questions</li>
               <li>Write Company Review</li>
               <li>Write Interview Advice</li>
               <li>Company Reviews</li>
               <li>Company Salaries</li>
           </ul>
        </div>
    </li>
    <li><a href="#">TOOLS</a>
        <div class="jobchild">
            <ul>
                <li>Career Dashboard</li>
                <li>Your next career move</li>
                <li>Skills Trends</li>
                <li>Naukri Lab</li>
            </ul>
         </div>
    </li>
    <li><a href="#">SERVICES</a>
        <div class="jobchild">
            <ul>
                <li id="resumewritting">Resume Writting</li>
                <li>Text Resume</li>
                <li>Visual Resume</li>
                <li>Resume Quality Score-Free</li>
                <li>Resume Samples</li>
                <li id="jobsforyou">Jobs For You</li>
                <li>job4U</li>
            </ul>
            <ul>
                <li id="recruiterreach">Recruiter Reach</li>
                <li>Resume Display</li>
                <li>Priority Applicant</li>
                <li>RecruiterConnection</li>
                <li>Job Search Booster</li>
                <li id="other">Other</li>
                <li>Help/FAQ</li>
                <li>Career Advice</li>
                <li>Contact Us</li>
                <li id="monthlysubscriptions">Monthly Subscriptions</li>
                <li>Basic & Premium Plans</li>
            </ul>
            <ul>
                <li>Courses/Certifications</li>
                <li>Data Science</li>
                <li>Machine Learning</li>
                <li>Big Data</li>
                <li>Programming</li>
                <li>Business Analytics</li>
                <li>Project Management</li>
                <li>Web Design</li>
                <li>DevOps and CloudComputing</li>
                <li>Marketing</li>
                <li>Accounting and Finance</li>
                <li>Banking</li>
                <li>Logistics and Supply Chain</li>
                <li>Strategy and Leadership</li>
            </ul>
         </div>
    </li>
    <li><a href="#">MORE</a>
        <div class="jobchild">
            <ul>
                <li id="careertools">Career Tools</li>
                <li>Naukri Blog</li>
                <li>FAQ</li>
                <li>Take Home Calculator</li>
                <li id="studyabroad">Study Abroad</li>
                <li>MBA</li>
                <li>MS</li>
                <li>SOP</li>
                <li>GMAT</li>
                <li>IELTS</li>
            </ul>
            <ul>
               <li>Top Courses & Colleges</li>
               <li>MBA</li>
               <li>MBA Colleges in India</li>
               <li>Top MBA Colleges</li>
               <li>Engineering</li>
               <li>Engineering Colleges</li>
               <li>Top Engineering Colleges</li>
               <li>BBA/BBM</li>
               <li>BHM</li>
               <li>BCA,DCA,BSc CS/IT</li>
            </ul>
            <ul>
                <li>Top Exams</li>
                <li>JEE Main</Main></li>
                <li>JEE Advanced</li>
                <li>BCECE</li>
                <li>GATE</li>
                <li>CAT</li>
                <li>SNAP</li>
                <li>MAT</li>
                <li>NEET</li>
                <li>SBI PO</li>
                <li>IBPS PO</li>
            </ul>
        </div>
    </li>

</ul>
    </div>
    
    <div class="right">
    <ul>
    <li><a href="#"><i class="fa-regular fa-bell"></i></a>
        <div class="rightchild">
            <ul>
                <li>Job Recommendations</li>
                <li>Application Status</li>
                <li>Interior Designer Applied</li>
                <li>Pending Actions</li>
                <li>Verify Mobile Number</li>
                <li>Recomended Skills</li>
                <li>Engineering Design</li>
                <li>Recruiter Searches</li>
            </ul>
    
        </div>
    </li>

    <li><a href="#">MY NAUKRI</a>
     <div class="rightchild">
         <ul>
             <li>Edit Profile</li>
             <li>Recomended Jobs</li>
             <li>Profile Performance</li>
             <li>Recruiter Messages</li>
             <li>Application Status</li>
             <li>Manage Alerts</li>
         </ul>
         <ul>
             <li>Saved Jobs</li>
             <li>Settings</li>
             <li>My Fastforward Services</li>
             <li>Logout</li>
             
         </ul>
     </div>
   </li>
</ul>
    </div>
        `

}

// function footer(){
//     return `
//     <div id="left">
//             <img src="https://static.naukri.com/s/4/100/i/naukri_Logo.png" alt="logo">
//         </div>
//         <div id="mid">
//             <div><p>JOBS</p></div>
//             <div><p>RECRUITERS</p></div>
//             <div><p>COMPANIES</p></div>
//             <div><p>TOOLS</p></div>
//             <div><p>SERVICES</p></div>
//             <div><p>MORE</p></div>
//         </div>
//         <div id="right">
//             <div><i class="fa-regular fa-bell"></i></div>
//             <div><p>MY NAUKRI</p></div>
//         </div>`

// }

export default navbar;