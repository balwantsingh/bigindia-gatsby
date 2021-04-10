import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import thankyou from "../images/about.jpg"


const Thankyou = () => (
  <Layout>
    <SEO title="Advertise with Bigindia.com" />
    <div className="text-gray-700 body-font">
          <div className="flex p-8 md:flex-row flex-col">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
              <h1 className="title-font sm:text-4xl text-2xl mb-4 font-light text-green-600">
              Thank you for contacting us
              </h1>
              <p className="mb-5 leading-relaxed text-lg">
                We will get back to you soon
              </p>

            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src={thankyou} alt="Thank you" />
            </div>
          </div>
        </div>
  </Layout>
)

export default Thankyou
