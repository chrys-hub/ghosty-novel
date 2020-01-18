import React from "react"
import { Link } from "gatsby"
/**ukuran image 612x675 */
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import yourhearthisthesea from "../images/seahearth.jpg"
import metro2033 from "../images/metro2033.jpg"
import bioshock from "../images/bioshockrapture.jpg"
import ReactIncrement from "../components/reactincrement"
import "../grid/simple-grid.min.css"
import bestsale from "../images/bestsalebook.jpg"
import Starborder from "../images/starborder.png"
console.log(metro2033)
console.log(yourhearthisthesea)
console.log(bioshock)

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <div class="welcome">
     <h1>Welcome to Simple static Novel Shop</h1>
    </div>
  
  <div class="browse">
  <h4>Know The Best Novel</h4>
  </div>
  <div style={{marginTop:`100px`}} class="wrapthis">
    <div>
      <img src={yourhearthisthesea}/>
    </div>
    <div class="booksaledescription">
      <h3>Your Hearth Is The Sea <i style={{fontWeight:`1`}}> IDR.245,587.57</i></h3>
      <h5>The Best Book From Nikita Gill</h5>
      <h5>Description:Let poetry help you examine the depths of your wounds</h5>
      <ReactIncrement/>
    </div>
  </div>

  <div style={{marginTop:`100px`}} class="wrapthis2">
    <div>
      <img src={metro2033}/>
    </div>
    <div class="booksaledescription">
      <h3>Metro 2033 <i style={{fontWeight:`1`}}> IDR.98,115.15</i></h3>
      <h5>The Best Book From Dmitry Glukhovsky</h5>
      <h5>Description:It is set within the Moscow Metro, where the last survivors hide after a global nuclear holocaust</h5>
      <ReactIncrement/>
    </div>
  </div>

  <div style={{marginTop:`100px`}} class="wrapthis">
    <div>
      <img src={bioshock}/>
    </div>
    <div class="booksaledescription">
      <h3>Bioshock Rapture<i style={{fontWeight:`1`}}> IDR.166,810.92</i></h3>
      <h5>The Best Book From Jhon Shirley</h5>
      <h5>Description:t's the end of World War II. FDR's New Deal has redefined American politics. Taxes are at an all-time high</h5>
      <ReactIncrement/>
    </div>
  </div>
  
  <div style={{marginTop:`300px`,marginBottom:`50px`}}>
  <h4 className="bestchoice">The Best Choice Of 2020</h4>
      <div class="row">
        <div class="col-6">
          <img src={bestsale}/>
        </div>
        <div class="col-6">
        <div class="booksaledescription">
      <h3>Your Hearth Is The Sea <i style={{fontWeight:`1`}}>IDR.25.000.00</i></h3>
      <h5>The Best Book From Nikita Gill</h5>
      <h5>Description:Let poetry help you examine the depths of your wounds.
         Let it remind you that no matter how deep it goes, you will be able to heal it 
         because you have been able to heal every single wound inflicted on your heart and soul before.
         Let these words show you that you will be able to find the light 
        at the end of the wound because you.</h5>
      <ReactIncrement/>
    </div>
        </div>
      </div>
    </div>


  <div style={{marginBottom:`200px`}}>
  <center>
    <div>
    <img src={Starborder} style={{maxWidth:`400px`}}/>
    </div>
    <div style={{marginTop:`-270px`}}>
    <Link to="/shop" ><p class="morebtn">More product</p></Link>
    </div>
    </center>
  </div>
  </Layout>
  
)

export default IndexPage
