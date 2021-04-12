import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import help from "../images/help-support.jpg"

const Help = () => (
  <Layout>
    <SEO title="Advertise with Bigindia.com" />
    <div className="text-gray-700 body-font">
          <div className="flex p-8 md:flex-row flex-col">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Help Canter
              </h1>
              <p className="mb-8 leading-relaxed">
                It is our endeavour to provide best services to our customers
                and work on principles of ethics, please contact us for any
                query
              </p>
              <div className="flex justify-center">
                <Link href="contact">
                  <span
                    className="inline-flex text-white getStarted border-0 py-2 px-6 focus:outline-none hover:shadow-lg rounded text-lg"
                    rel="noopener noreferrer"
                  >
                    Contact us
                  </span>
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <StaticImage
                src="../images/help-support.png"
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

export default Help
