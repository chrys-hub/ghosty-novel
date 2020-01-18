import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./shop.css"
import "../grid/simple-grid.min.css"
import seahearth from "../images/seaofhearthmini.png"
import Shopbutton from "../components/reactincrement"
import Chart from "../components/chart"
import TextKeren from "../images/cooltext.png"

const PageShop= () => (
  <Layout>
    <SEO title="Shop" />
      <h2 style={{textAlign:`center`,fontWeight:`200`}}>NOVEL SHOP</h2>
      <center><Chart/></center>
      
      <div class="row" style={{marginTop:`150px`}}>
        <div class="col-4">
          <img src={seahearth} alt="description"/>
          <p>Your hearth is the sea<i> IDR.245,587.57</i></p>
          <p>By Nikita Gill</p>
          <Shopbutton/>
        </div>
        <div class="col-4">
        <img src={seahearth} alt="description"/>
        <p>Your hearth is the sea<i> IDR.245,587.57</i></p>
          <p>By Nikita Gill</p>
        <Shopbutton/>
        </div>
        <div class="col-4">
        <img src={seahearth} alt="description"/>
        <p>Your hearth is the sea<i> IDR.245,587.57</i></p>
          <p>By Nikita Gill</p>
          <Shopbutton/>
        </div>
      </div>
    
      <div class="row" style={{marginTop:`100px`,marginBottom:`100px`}}>
        <div class="col-4">
          <img src={seahearth}/>
          <p>Your hearth is the sea<i> IDR.245,587.57</i></p>
          <p>By Nikita Gill</p>
          <Shopbutton/>
        </div>
        <div class="col-4">
        <img src={seahearth}/>
          <p>Your hearth is the sea<i> IDR.245,587.57</i></p>
          <p>By Nikita Gill</p>
        <Shopbutton/>
        </div>
        <div class="col-4">
        <img src={seahearth}/>
        <p>Your hearth is the sea<i> IDR.245,587.57</i></p>
          <p>By Nikita Gill</p>
        <Shopbutton/>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <img src={seahearth}/>
          <p>Your hearth is the sea<i> IDR.245,587.57</i></p>
          <p>By Nikita Gill</p>
          <Shopbutton/>
        </div>
        <div class="col-4">
        <img src={seahearth}/>
        <p>Your hearth is the sea<i> IDR.245,587.57</i></p>
          <p>By Nikita Gill</p>
        <Shopbutton/>
        </div>
        <div class="col-4">
        <img src={seahearth}/>
        <p>Your hearth is the sea<i> IDR.245,587.57</i></p>
          <p>By Nikita Gill</p>
        <Shopbutton/>
        </div>
      </div>
      <div style={{marginTop:`100px`}}>
        <img src={TextKeren}/>
      </div>
      
  </Layout>
  
)

export default PageShop
