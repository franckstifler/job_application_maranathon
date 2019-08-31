import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav className="uk-navbar-container" data-uk-navbar>
    <div className="uk-navbar-left">
        <Link className="uk-navbar-item uk-logo" to="/">MBC</Link>
    </div>
    <div className="uk-navbar-right">
      <ul className="uk-navbar-nav">
        <li><Link to="/">About Us</Link></li>
        <li><Link to="#requirements">Requirements</Link></li>
        <li><Link to="#contact">Contact Us</Link></li>
      </ul>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
