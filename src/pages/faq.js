import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./about.css"
import "../grid/simple-grid.min.css"
import Question from "../images/question.png"
import Star from "../images/stareffect.png"
import Starborder from "../images/starborder.png"

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
        <div class="col-5">
        <center>
        <img src={Question} style={{maxWidth:`200px`}}/>
        </center>
        </div>
        <div class="col-7">
         <h1>What Is This Site For?</h1>
      <h3>This site is for simluation only there no actual buying and selling here</h3>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-5">
        <center>
        <img src={Question} style={{maxWidth:`200px`}}/>
        </center>
        </div>
        <div class="col-7">
         <h1>What Is This Site Built With?</h1>
      <h3>This site built with awesome GatsbyJs an react based framework who have
          amazing ability to create static website
      </h3>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-5">
        <center>
        <img src={Question} style={{maxWidth:`200px`}}/>
        </center>
        </div>
        <div class="col-7">
         <h1>What is GatsbyJs?</h1>
      <h3>Gatsby is a free and 
          open source framework based on React that helps developers
           build blazing fast websites and apps,Visit here:<a href="https://www.gatsbyjs.org/" target="_Blank">https://www.gatsbyjs.org/</a></h3>
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        <div class="col-5">
        <center>
        <img src={Question} style={{maxWidth:`200px`}}/>
        </center>
        </div>
        <div class="col-7">
         <h1>Where is this Site Hosted?</h1>
      <h3>This site hosted from Netlify,Netlify is everything you need to build fast, modern websites: continuous deployment, serverless functions, and so much more.
          ,Visit This <a href="https://www.netlify.com/" target="_Blank">https://www.netlify.com/</a>
      </h3>
        </div>
      </div>
    </div>
  </Layout>
  
)

export default AboutUs
