import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <nav class="flex items-center bg-white py-4 flex-wrap mx-auto border-b">
    <span class="p-2 mr-4 inline-flex items-center text-3xl text-gray-700 font-bold tracking-wide">
    <Image src="/gatsby-icon.png" />
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
      <div class="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
        <span class="lg:inline-flex lg:w-auto w-auto px-5 py-2 rounded text-gray-500 hover:text-gray-700 hover:bg-gray-100">
          <Link to="https://crm.bigindia.com/register" target="_blank">Become a seller</Link>
        </span>
        <span class="lg:inline-flex lg:w-auto w-auto px-5 py-2 rounded text-gray-500 hover:text-gray-700 hover:bg-gray-100">
          <Link to="https://crm.bigindia.com/login" target="_blank">RFQ</Link>
        </span>
        <span class="lg:inline-flex lg:w-auto w-auto px-5 py-2 rounded text-gray-500 hover:text-gray-700 hover:bg-gray-100">
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
