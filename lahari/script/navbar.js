function navbar(){
    return `<div id="left">
    <a href="home.html"> <img src="https://static.naukri.com/s/4/100/i/naukri_Logo.png" alt="logo"></a>
        
    </div>
    <div class="mid">
    <ul>
    <li class="active"><a href="../sahillagad/job.html">JOBS</a>
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
    <li><a href="../sahillagad/recruiters.html">RECRUITERS</a>
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
    <li><a href="./tool.html">TOOLS</a>
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

    <li><a href="../karishmaji/profile.html">MY NAUKRI</a>
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


function footer(){
    return `
    <div id="footer1">
    <div id="foot">
        <div id="foot1">
            <h3>Information</h3>
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Careers with Us</p>
            <p>Sitemap</p>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>Summons/Notices</p>
            <p>Grievances</p>
            <p>Fraud Alert</p>
            <p>Trust & Safety</p>
            <h3>Naukri on Mobile</h3>
            <img src="images/playstore.jpg" alt=""><br>
            <img src="images/apple.jpg" alt="">
            
        </div>
        <div id="foot2">
            <h3>Jobseekers</h3>
            <p>Upload Resume</p>
            <p>Search Jobs</p>
            <p>Create Job Alert</p>
            <p>Report a Problem</p>
            <p>Naukri Blogs</p>
            <h3>Browse Jobs</h3>
            <p>Browse All Jobs</p>
            <p>Premium MBA Jobs</p>
            <p>Premium Engineering Jobs</p>
            <p>Govt. Jobs</p>
            <p>International Jobs</p>
            <p>Jobs in Gulf</p>
            <p>Jobs by Company</p>
            <p>Jobs by Category</p>
            <p>Jobs by Designation</p>
            <p>Jobs by Location</p>
            <p>Jobs by Skill</p>
            
        </div>
        <div id="foot3">
            <h3>Jobseeker Services</h3>
            <p>Priority Applicant</p>
            <p>Resume Display</p>
            <p>Resume Writting</p>
            <p>Jobs4U</p>
            <p>Recruiter Connection</p>
            <p>Job Search Booster</p>
            <h3>Naukri Learning</h3>
            <p>Software and Technology</p>
            <p>Artificial Intelligence & Data Science</p>
            <p>Management</p>
            <p>Finance</p>
            <p>Creativity and Design</p>
            <p>Emerging Technologies</p>
            <p>Engineering-non CS</p>
            <p>Healthcare</p>
            <p>Energy and Environment</p>
            <p>Social Sciences</p>
            <p>Personal growth</p>
        </div>
        <div id="foot4">
            <h3>Employers</h3>
            <p>Job Posting</p>
            <p>Resume Database Access</p>
            <p>Recruiter Login</p>
            <p>Naukri RMS</p>
            <p>Buy Resume Packages Online</p>
            <p>Transition Services</p>
            <p>Report a Problem</p>
            <p>Recruiters from US-A,call</p>
            <p>Toll Free # 1866-557-3340</p>
            <h3>Ambition Box</h3>
            <p>Interview Questions</p>
            <p>About Companies</p>
            <p>Share Interview Advice</p>
            <p>Write Company Review</p>
            <p>Company Reviews</p>
            <p>Company Salaries</p>
            <h3>Follow Us</h3>
            <img src="images/fb.jpg" alt="">
            <img src="images/twiter.jpg" alt="">
            <img src="images/linkedin.jpg" alt="">
        </div>
    </div>
   
</div>
<div id="footer2">
        <h2>Partner Sites</h2>
        <div id="motionfooter">
            <marquee>
                <div id="motionimg">
                    <div><img src="https://cdn.newsnationtv.com/resize/460_-/images/2020/09/11/zomato-96.jpg" alt="zomato"></div>
                    <div><img src="https://ask2human.com/wp-content/uploads/2020/06/Meritnation-Customer-Care-1170x400.jpg" alt="meritnation"></div>
                    <div><img src="https://image4.owler.com/logo/mydala_owler_20160226_214954_original.png" alt="mydala"></div>
                    <div><img src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-sneufhma344t4ukj6c74he4pc0-20180925164322.Medi.jpeg" alt="paisabazzar"></div>
                    <div><img src="https://customercarecontacts.com/wp-content/uploads/2018/01/99acres-logo.jpg" alt="99acres"></div>
                    <div><img src="https://www.medianews4u.com/wp-content/uploads/2019/08/Jeevansathi.jpg" alt="jeevansathi"></div>
                    <div><img src="https://customercarecontacts.com/wp-content/uploads/2018/06/naukrigulf-logo.jpg" alt="naukrigulf"></div>
                    <div><img src="http://w10.naukri.com/mailers/tips_04may10/gifs/logo.gif" alt="firstnaukri"></div>
                    <div><img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/h6oclq7lq9rqqb0hze3d" alt="brijj"></div>
                
                <div><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQFTbt5HmwY9HA/company-logo_200_200/0/1519904647162?e=2147483647&v=beta&t=9QA6FHaba1P_17gG7NrtA0KW3pSqLWxKpvtAADtL1Sc" alt="allcheckdeal"></div>
                <div><img src="https://images.shiksha.ws/public/images/shareThumbnail.jpg" alt="siksha"></div>
                <div><img src="https://m.economictimes.com/thumb/msid-77048166,width-1200,height-900,resizemode-4,imgsize-72290/policybazaar.jpg" alt="policybazzar"></div>

                
                </div>
            </marquee>
        
        </div>
    
       
</div>
<div id="footer3">
    <p>All rights reserved @ 2022 Info Edge (India) Ltd.</p>
</div>

        `

}






export  {navbar,footer}
