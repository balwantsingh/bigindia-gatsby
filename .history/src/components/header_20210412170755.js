import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  
  <nav class="flex items-center bg-white py-4 px-10 flex-wrap mx-auto border-b">
    <span class=" mr-4 inline-flex items-center text-3xl text-gray-700 font-bold tracking-wide">
      <Link to="/">
      <StaticImage
                src="../images/bigindia.jpg"
                width={300}
                alt="Buy and Sell with Bigindia"
                placeholder="tracedSVG"
                quality="40"
              />
      </Link>
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
          <a href="https://crm.bigindia.com/register" target="_blank" rel="noopener noreferrer">Become a seller</a>
        </span>
        <span class="lg:inline-flex lg:w-auto w-auto px-5 py-2 rounded text-gray-500 hover:text-blue-600 hover:underline">
          <a href="https://crm.bigindia.com/login" target="_blank" rel="noopener noreferrer">RFQ</a>
        </span>
          <Link to="/advertise/" class="lg:inline-flex lg:w-auto w-auto px-5 py-2 rounded text-gray-500 hover:text-blue-600 hover:underline">Advertises</Link>
          <a href="https://crm.bigindia.com/login" target="_blank" rel="noopener noreferrer" className="lg:inline-flex lg:w-auto w-auto px-5 py-2 rounded text-gray-500 hover:text-blue-600 hover:underline">Sign in</a>
      </div>
    </div>
    <a href="https://wa.me/918287762654" target="_blank" rel="noopener noreferrer" class="fixed z-20 bottom-5 right-0  shadow-lg bgWhatsapp rounded-full float-right mr-8 -mt-60 w-16 h-16 text-4xl font-semibold text-white hover:bg-green-600 text-center transform transition duration-300 hover:scale-110 hover:shadow-xl items-center justify-items-center">
    <StaticImage
                src="../images/whatsapp.png"
                width={60}
                alt="Buy and Sell with Bigindia"
                placeholder="tracedSVG"
                quality="40"
              />
        </a>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
