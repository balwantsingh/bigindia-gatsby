import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (
 
    <nav class="flex items-center bg-white py-8 flex-wrap md:max-w-6xl mx-auto">
    <span class="p-2 mr-4 inline-flex items-center text-3xl text-gray-700 font-bold tracking-wide">
    <Link to="index.js">BigIndia</Link>
    </span>
    <button class="text-gray-400 inline-flex p-3 hover:bg-blue-900 rounded lg:hidden ml-auto nav-toggler" data-target="#navigation">
      <span class="material-icons">
menu
</span>
    </button>
    <div class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
      <div class="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
        <span class="lg:inline-flex lg:w-auto w-auto px-5 py-2 rounded text-gray-500 hover:text-gray-700 hover:bg-gray-100">
          <Link to="/">Home</Link>
        </span>
        
          <span class="lg:inline-flex lg:w-auto w-auto px-5 py-2 rounded text-gray-500 hover:text-gray-700 hover:bg-gray-100"><Link to="/page-2.js">Products</Link></span>
        
        <span class="lg:inline-flex lg:w-auto w-auto px-5 py-2 rounded text-gray-500 hover:text-gray-700 hover:bg-gray-100">
        <Link to="/">Services</Link>
        </span>
        <span class="lg:inline-flex lg:w-auto w-auto px-5 py-2 rounded text-gray-500 hover:text-gray-700 hover:bg-gray-100">
        <Link to="/">Outsourcing</Link>
        </span>
        <span class="lg:inline-flex lg:w-auto w-auto px-5 py-2 rounded text-gray-500 hover:text-gray-700 hover:bg-gray-100">
        <Link to="/">Contact Us</Link>
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