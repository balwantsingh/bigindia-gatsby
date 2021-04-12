import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const Buyer = () => (
  <Layout>
    <SEO title="Advertise with Bigindia.com" />
    <div className="text-gray-700 body-font">
          <div className="flex p-8 md:flex-row flex-col">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Buyers
              </h1>
              <p className="mb-5 leading-relaxed text-lg">
                BigIndia.com offers several benefits and features to buyers:
              </p>
              <p className="mb-3 text-xl font-semibold leading-relaxed">RFQ</p>
              <ul className="mb-5 ml-3 leading-relaxed">
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon> Post RFQ
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon> View Quotes
                </li>
              </ul>
              <p className="mb-3 text-xl font-semibold leading-relaxed">
                B2B Search
              </p>
              <ul className="mb-5 ml-3 leading-relaxed">
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon> Search
                  Products
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon> View
                  Product
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon> Enquire
                </li>
              </ul>
              <p className="mb-3 leading-relaxed">
                Discover quality vendors offering a wide selection of products
              </p>

              <div className="flex">
                <Link to="https://crm.bigindia.com/register">
                  <span
                    className="inline-flex text-white getStarted border-0 py-2 px-6 focus:outline-none hover:shadow-lg rounded text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </span>
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <StaticImage
                src="../images/buyer.jpg"
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

export default Buyer
