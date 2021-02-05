import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav class=" bg-blue-800 color-white font-mono text-white w-full flex relative justify-between items-center mx-auto m-0 px-8 h-15">
    <h1 class="inline-flex">
        <a class="_o6689fn" href="/">
        Ayn Software
        </a>
    </h1>
   <div class="flex-initial">
      <div class="flex justify-end items-center relative">
        <div class="flex mr-4 items-center">
          <a class="inline-block hover:bg-blue-900 rounded-full" href="#">
            <div class="flex items-center relative cursor-pointer whitespace-nowrap">Become a host</div>
          </a>
        </div>
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
