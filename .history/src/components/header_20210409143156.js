import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/bigindia.jpg"
import Helmet from "react-helmet"
const Header = ({ siteTitle }) => (
  
  <nav class="flex items-center bg-white py-4 px-10 flex-wrap mx-auto border-b">
  <Helmet>
  <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
    </Helmet>
    <span class=" mr-4 inline-flex items-center text-3xl text-gray-700 font-bold tracking-wide">
      <Link to="/"><img src={logo} width="125" alt="Bigindia Logo" /></Link>
    </span>
    <button
      class="text-gray-400 inline-flex p-3 hover:bg-blue-900 rounded lg:hidden ml-auto nav-toggler"
      data-target="#navigation"
    >
      <span class="material-icons">menu</span>
    </button>
    <div
      class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
      id="navigation"
    >
      <div class="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col text-xl">
        <span class="lg:inline-flex lg:w-auto w-auto px-5 py-2 rounded text-gray-500 hover:text-blue-600 hover:underline">
          <Link to="https://crm.bigindia.com/register" target="_blank">Become a seller</Link>
        </span>
        <span class="lg:inline-flex lg:w-auto w-auto px-5 py-2 rounded text-gray-500 hover:text-blue-600 hover:underline">
          <Link to="https://crm.bigindia.com/login" target="_blank">RFQ</Link>
        </span>
        <span class="lg:inline-flex lg:w-auto w-auto px-5 py-2 rounded text-gray-500 hover:text-blue-600 hover:underline">
          <Link to="/advertise">Advertise</Link>
        </span>
        <span class="lg:inline-flex lg:w-auto w-auto px-5 py-2 rounded text-gray-500 hover:text-blue-600 hover:underline">
          <Link to="https://crm.bigindia.com/login" target="_blank">Sign in</Link>
        </span>
      </div>
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