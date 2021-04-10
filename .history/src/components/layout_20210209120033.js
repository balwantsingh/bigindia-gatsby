/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"


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
    
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
    
      <div>
        <main>{children}</main>
        <footer class="py-10 text-center">
        <div class="border-t border-b">

        <div class="grid grid-cols-3 gap-5">

        <div class="bg-white p-5">
        <div class="text-3xl font-extrabold mb-5 text-gray-700">Products</div>
        <p class="text-gray-800">CRM Software</p>
        <p class="text-gray-800">Job Board Software</p>
        <p class="text-gray-800">Content Management System</p>
      </div>

      <div class="bg-white p-5">
        <div class="text-3xl font-extrabold mb-5 text-gray-700">Services</div>
        <p class="text-gray-800">Web Development</p>
        <p class="text-gray-800">Software Development</p>
        <p class="text-gray-800">Mobile App Development</p>
      </div>

      <div class="bg-white p-5">
        <div class="text-3xl font-extrabold mb-5 text-gray-700">Company</div>
        <p class="text-gray-800">About Us</p>
        <p class="text-gray-800">Support</p>
        <p class="text-gray-800">Privacy</p>
        <p class="text-gray-800">Sitemap</p>
        <p class="text-gray-800">Contact Us</p>
        <p class="text-gray-800">Career</p>
      </div>

        </div>

        </div>
         <p class="pt-5">© {new Date().getFullYear()}, Software and Web Development Services</p>
          {` `}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
