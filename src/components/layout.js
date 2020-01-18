/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import "../grid/simple-grid.min.css"
import fbicon from "../images/facebook-icon.png"
import githubicon from "../images/githubicon.png"

console.log(fbicon)
console.log(githubicon)
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header/>
      <div style={{margin: `0 auto`,padding: `0px 1.0875rem 1.45rem`,paddingTop: 0,paddingBottom:100}}>
        <main>{children}</main>

      <div class="foot">
      <div style={{marginTop:`30px`,marginBottom:`-60px`}}>
      <div class="row">
        <div class="col-4" style={{marginLeft:`0px`}}>
          <center>
          <h3 style={{fontWeight:`1`,userSelect:`none`,cursor:`default`}}>Have a question?</h3>
          <Link to="/faq" style={{textDecoration:`none`}}><h3 style={{fontWeight:`lighter`}}>FAQ</h3></Link>
          <h4 style={{fontWeight:`1`}}>Chrysnaardy123@gmail.com</h4>
          <h4 style={{fontWeight:`1`}}>081-000-000</h4>
          </center>
        </div>
        <div class="col-4">
          <center>
          <h3 style={{fontWeight:`1`,userSelect:`none`,cursor:`default`}}>Connect with us</h3>
            <div>
              <a href="https://web.facebook.com/krisna.app.1" target="_blank"><img src={fbicon}/></a>
              <a href="https://github.com/chrysnaardy123/Ghosty-novel" target="_blank"><img src={githubicon}/></a>
            </div>
            <i>Icon:<a href="https://icons8.com/license" target="_Blank">https://icons8.com/license|</a></i>
            <i><a href='https://pngtree.com/so/decoration'>decoration png from pngtree.com</a></i>
          </center>
        </div>
        <div class="col-4">
          <center>
          <h3 style={{fontWeight:`1`,userSelect:`none`,cursor:`default`}}>Term & Security</h3>
            <div><Link to="/career" style={{textDecoration:`none`}}><h3 style={{fontWeight:`1`}}>Job Vacancy</h3></Link></div>
            <div><Link to="/privacy" style={{textDecoration:`none`}}><h3 style={{fontWeight:`1`}}>Privacy Policy</h3></Link></div>
            <div><a></a><Link to="/termandconditions" style={{textDecoration:`none`}}><h3 style={{fontWeight:`1`}}>Term & Conditions</h3></Link></div>
          </center>
        </div>
      </div>
    </div>
      </div>
      </div>
	   

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
