import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/bigindia.jpg"
import whatsapp from "../images/whatsapp.png"
const Header = ({ siteTitle }) => (
  
  <nav class="flex items-center bg-white py-4 px-10 flex-wrap mx-auto border-b">
    <span class=" mr-4 inline-flex items-center text-3xl text-gray-700 font-bold tracking-wide">
      <Link to="/"><img src={logo} width="125" alt="" /></Link>
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
    <Link to="https://wa.me/918287762654" target="_blank">
          <span
            className="fixed z-20 bottom-5 right-0  shadow-lg bgWhatsapp rounded-full float-right mr-8 -mt-60 w-16 h-16 text-4xl font-semibold text-white hover:bg-green-600 text-center transform transition duration-300 hover:scale-110 hover:shadow-xl items-center justify-items-center"
            rel="noopener noreferrer"
            aria-label={`whatsapp-widgets`}
            role="link"
          >
            <img src={whatsapp} alt="WhatsApp" class="w-8 h-8 mx-auto mt-4" />
          </span>
        </Link>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
