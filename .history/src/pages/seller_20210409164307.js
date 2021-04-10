import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import seller from "../images/seller.jpg"

const Seller = () => (
  <Layout>
    <SEO title="Sell with us" />
    <div className="text-gray-700 body-font">
      <div className="flex p-8 md:flex-row flex-col">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Seller
          </h1>
          <p className="mb-5 leading-relaxed text-lg">
            BigIndia.com offers several benefits and features to sellers:
          </p>
          <p className="mb-3 text-xl font-semibold leading-relaxed">
            B2B Services
          </p>
          <ul className="mb-5 ml-3 leading-relaxed">
            <li className="py-1">
              <ion-icon name="caret-forward-outline"></ion-icon> Add Company
            </li>
            <li className="py-1">
              <ion-icon name="caret-forward-outline"></ion-icon> Post Product
            </li>
            <li className="py-1">
              <ion-icon name="caret-forward-outline"></ion-icon> View Leads
            </li>
            <li className="py-1">
              <ion-icon name="caret-forward-outline"></ion-icon> Communicate
              with buyers
            </li>
          </ul>
          <p className="mb-3 text-xl font-semibold leading-relaxed">RFQ</p>
          <ul className="mb-5 ml-3 leading-relaxed">
            <li className="py-1">
              <ion-icon name="caret-forward-outline"></ion-icon> View RFQ's
            </li>
            <li className="py-1">
              <ion-icon name="caret-forward-outline"></ion-icon> Submit Quote
            </li>
          </ul>
          <p className="mb-3 text-xl font-semibold leading-relaxed">
            CRM Software
          </p>
          <ul className="mb-5 ml-3 leading-relaxed">
            <li className="py-1">
              <ion-icon name="caret-forward-outline"></ion-icon> Lead Generation
            </li>
            <li className="py-1">
              <ion-icon name="caret-forward-outline"></ion-icon> Analytics
            </li>
            <li className="py-1">
              <ion-icon name="caret-forward-outline"></ion-icon> Order
              Management
            </li>
            <li className="py-1">
              <ion-icon name="caret-forward-outline"></ion-icon> Product
              Management
            </li>
          </ul>
          <p className="mb-3 leading-relaxed">
            BigIndia.com provides leads to sellers listed on the website. And
            get access to an advanced CRM Software that helps you manage leads
            received from BigIndia.com
          </p>

          <div className="flex">
            <Link to="https://crm.bigindia.com/register" target="_blank">
              <span
                className="inline-flex text-white getStarted border-0 py-2 px-6 focus:outline-none hover:shadow-lg rounded text-lg"
                
                rel="noopener noreferrer"
              >
                Register Now
              </span>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img src={seller} alt="Seller" alt="Seller" />
        </div>
      </div>
    </div>
  </Layout>
)

export default Seller
