import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import advertise from "../images/advertise.jpg"


const Advertise = () => (
  <Layout>
    <SEO title="Advertise with Bigindia.com" />
    <div className="text-gray-700 body-font">
          <div className="flex p-8 md:flex-row flex-col">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Advertisedd
              </h1>
              <p className="mb-5 leading-relaxed">
                Sell on India’s leading online B2B marketplace
              </p>
              <p className="mb-5 leading-relaxed">
                BigIndia.com offers you several lead generation tools and
                services. Like online visibility, web page, mobile site, CRM
                Software, RFQ etc for increasing your business reach and
                connecting you with buyers.
              </p>
              <p className="mb-5 leading-relaxed">
                Create Account and add your business and product details for
                FREE
              </p>
              <p className="mb-5 leading-relaxed">
                For featured listing on BigIndia.com, pl. contact us
              </p>
              <div className="flex">
  
                {/* <Link to="/contact">
                  <span
                    className="inline-flex text-white getStarted border-0 py-2 px-6 focus:outline-none hover:shadow-lg rounded text-lg"
                    rel="noopener noreferrer"
                  >
                    Get started
                  </span>
                </Link> */}
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img src={advertise} alt="Advertise" />
            </div>
          </div>
        </div>
  </Layout>
)

export default Advertise
