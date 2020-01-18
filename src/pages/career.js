import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../pages/termandcondition.css"



const Careers = () => (
    <Layout>
      <SEO title="Careers"/>
      <div class="Termandconditions" style={{marginTop:`200px`}}>
      <h1>Ghostly Novel</h1>

      <h2 style={{marginTop:`100px`}}><strong>Careers</strong></h2>
      <p> GhostlyNovel is a static site built with gatsby and react and in here on my site performance is number 1

      </p>

        <p>This is the first Gatsby project created by chrysna ardy, 
             Since Ghostlynovel launched in 2020,
             over a million Front-end have used this gatsby javascript. 
             To make a responsive blazin fast static website,
              it became clear that we could create a responsive fast beautiful static website — 
            with gatsby,and react.</p>
        <p>
        At least three years of relevant experience may substitute Gatsby is 
        a free and open source framework based on React that helps 
        developers build blazing fast websites and apps
        </p>
        <p>Gatsby can benefit you include:</p>
        <ul>
            <li>Modern web tech without the headache</li>
            <li>Bring your own data</li>
                <li>Scale to the entire internet</li>
                <li>Future-proof your website</li>
                <li>Progressive Web Apps</li>
                <li>Speed past the competition</li>
        </ul>
        <p>Job Available:</p>
<div style={{marginBottom:`200px`}}>
<div>
  <form>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="lname">Full Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your full name.."/>


    

    <label for="jobselect">Select Job:</label>
    <select id="jobselect" name="country">
    <option value="australia">Select one job below..</option>
      <option value="australia">Front-End Developer</option>
      <option value="canada">Back-End Developer</option>
      <option value="usa">Full-Stack Developer</option>
      <option value="usa">Website Designer</option>
    </select>
    <label for="subject">Why do you want to join our company?:</label>
    <textarea id="subject" name="subject" placeholder="Write your reason here.."></textarea>

    <label for="subject">Write Something About You:</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
    <p>Real-time Interview will be held after you send us this form</p>
    <p class="morebtn" onClick={()=>{ alert('Thanks for sending your form to us');}} style={{cursor:`pointer`,userSelect:`none`}}>TAKE THIS JOB</p>
    
  </form>
</div>
</div>
</div>

{
    
}
    </Layout>
    
  )
  
  export default Careers