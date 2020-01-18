import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"


/**JSX start Header Only(Navbar) */
const Header = ({ siteTitle }) => (
   <div class="nav" style={{marginBottom:`50px`}}>
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
<Link to="/">GhostyNovel</Link>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <Link to="/">Home</Link>
    <Link to="/shop">Novel Shop</Link>
    <Link to="/career">Job Vacancy</Link>
    <Link to="/about">About Us</Link>
  </div>
   
</div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
