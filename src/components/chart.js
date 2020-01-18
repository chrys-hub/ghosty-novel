import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Chart from "../images/charticon.png"
import "./chart.css"
const ThisChart = ({ siteTitle }) => (
  <div>
      <img src={Chart}/>
  </div>
 
 )
 
 ThisChart.propTypes = {
   siteTitle: PropTypes.string,
 }
 
 ThisChart.defaultProps = {
   siteTitle: ``,
 }
 
 export default ThisChart