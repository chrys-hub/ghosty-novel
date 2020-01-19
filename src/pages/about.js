import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./about.css"
import "../grid/simple-grid.min.css"
import Question from "../images/question.png"
import Star from "../images/stareffect.png"
import Starborder from "../images/starborder.png"
import Cutecat from "../images/cat.jpg"

const AboutUs= () => (
  <Layout>
    <SEO title="About Us" />
    <div class="container">
      <div class="row">
        <div class="col-5">
        <center>
        <img src={Question} style={{maxWidth:`200px`}}/>
        </center>
        </div>
        <div class="col-7">
         <h1>What Are We</h1>
      <h3>Welcome to GhostyNovel inc, your number one source for all things novel. 
          We're dedicated to giving you the very best of Great novel by various artist,
           with a focus on give the best novel,</h3>
        </div>
      </div>
    </div>
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <center>
              <img src={Star} style={{maxWidth:`300px`}}/>
              </center>
              </div>
              <div class="col-12" style={{textAlign:`center`}}>
                <h1>HISTORY</h1>
                <h3>
                Founded in 2020 by Chrysna ardy, GhostyNovel inc has come a long way from its beginnings 
                in Indonesia,East-Java. When Chrysna first started out, 
                his passion for Novel drove them to  publish and promote the best novel so that GhostyNovel inc
                 can offer you . "the world's most adore novel". We now serve customers all over  the world, 
                 and are thrilled that we're able to turn our passion into our own website.
                </h3>
              </div>
          </div>
      </div>

      <div class="container">
          <div class="row">
              <div class="col-12">
                  <center>
              <img src={Cutecat} style={{maxWidth:`300px`}}/>
              </center>
              </div>
              <div class="col-12" style={{textAlign:`center`}}>
                <h1>ABOUT THE DEVELOPER</h1>
                <h3>
                Hello My Name Is Chrysna ardy and i am a Junior Front-End Web developer,i from Indonesia
                And i enjoying doing things and making things i'm also a guitarist,so don't hesitate to contact me from
                that facebook icon on the footer,have fun and if you wanted to use this project i also got the repo on github
                Just visit my github from that github icon on the footer,so that's it sorry i'm to shy to show my face (／≧ω＼)
                so i just upload some cute cat for my face repleacer,that's all see you. 
                </h3>
              </div>
          </div>
      </div>

      <div class="container">
          <div class="row">
              <div class="col-12">
                  <center>
              <img src={Starborder} style={{maxWidth:`300px`}}/>
              </center>
              </div>
              <div class="col-12" style={{textAlign:`center`}}>
                <h1>FROM US FOR YOU</h1>
                <h3>
                We hope you enjoy our best novel list as much as we 
                enjoy offering them to you. If you have any questions or comments, p
                lease don't hesitate to contact us.
                </h3>
                <i>Note!:That you cannot buy novel here this site just a simulation of my project</i>
                <h3>Sincerely,</h3>
                <h3>Chrysna ardy</h3>
                <i>The developer</i>
              </div>
          </div>
      </div>

    
  </Layout>
  
)

export default AboutUs
