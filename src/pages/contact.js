import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contact from "../images/contact-us.jpg"


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
                  Email -{" "}
                  <a
                    className="hover:text-blue-500"
                    href="mailto:info@bigindia.com"
                  >
                    info@bigindia.com
                  </a>
                  <br />
                  Ph -{" "}
                  <a className="hover:text-blue-500" href="tel:8754210365">
                    8287762654
                  </a>
                </p>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src={contact} alt="Contact us" />
            </div>
          </div>
        </div>
  </Layout>
)

export default Contact
