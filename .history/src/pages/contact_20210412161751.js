import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"


const Contact = () => (
  <Layout>
    <SEO title="Advertise with Bigindia.com" />
    <div className="text-gray-700 body-font">
          <div className="flex p-8 md:flex-row flex-col">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Contact Us
              </h1>
              <p className="mb-8 leading-relaxed">
                BigIndia.com is an Indian company that provides online B2Bdd
                services.
              </p>


              <div className="mt-4"> 
                <p className="text-lg font-semibold">Address:</p>
                <p>
                  AJ 48B
                  <br />
                  Shalimar Bagh
                  <br />
                  Delhi 110088
                  <br />
                  Email -
                  <Link to="mailto:info@bigindia.com">
                  <span
                    className="hover:text-blue-500"
                  >
                    info@bigindia.com
                  </span>
                  </Link>
                  <br />
                  Ph -
                  <Link to="tel:8754210365">
                  <span className="hover:text-blue-500">
                    8287762654
                  </span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <StaticImage
                src="../images/advertise.jpg"
                width={1000}
                alt="Buy and Sell with Bigindia"
                placeholder="tracedSVG"
                quality="40"
              />
            </div>
          </div>
        </div>
  </Layout>
)

export default Contact
