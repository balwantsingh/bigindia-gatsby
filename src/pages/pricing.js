import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Pricing = () => (
  <Layout>
    <SEO title="Advertise with Bigindia.com" />
    <div className="text-gray-700 body-font">
          <div className="container mx-auto px-10 py-5">
            <header className="mb-3">
              <h1 className="text-2xl mb-1">Our Plans</h1>
              <p className="leading-normal text-grey-dark md:w-1/2">
                The pricing is simple
              </p>
            </header>

            <div className="lg:flex  lg:-mx-2 max-w-4xl">
              <div className="mb-4 lg:mb-0 lg:w-1/2 lg:px-2">
                <div className="border border-gray-300 pt-5 pb-10 px-10 rounded">
                  <h2 className="text-lg mb-4">STARTER</h2>
                  <div className="pb-4 border-b">
                    <span className="block text-5xl pb-2">FREE</span>
                    <p className="text-xl">Home Business</p>
                    <p className="text-md text-gray-500">
                      Start your journey in Online Marketing and CRM<br />&nbsp;
                    </p>
                  </div>
                  <ul className="text-gray-900 leading-loose list-reset my-4">
                    <li>
                    <ion-icon name="checkmark-outline"></ion-icon> Add
                      Company
                    </li>
                    <li>
                    <ion-icon name="checkmark-outline"></ion-icon> Free
                      Web Page
                    </li>
                    <li>
                    <ion-icon name="checkmark-outline"></ion-icon> 5
                      Products
                    </li>
                    <li>
                    <ion-icon name="checkmark-outline"></ion-icon> View
                      Leads
                    </li>
                    <li className="text-gray-400">
                    <ion-icon name="close-outline"></ion-icon> CRM
                      Software
                    </li>
                    <li className="text-gray-400">
                    <ion-icon name="close-outline"></ion-icon>
                      Featured Products
                    </li>
                    <li className="text-gray-400">
                    <ion-icon name="close-outline"></ion-icon>
                      Company highlighted in Search Results
                    </li>
                    <li className="text-gray-400">
                    <ion-icon name="close-outline"></ion-icon>
                      Premium Company Themes
                    </li>
                    <li className="text-gray-400">
                    <ion-icon name="close-outline"></ion-icon> Email
                      Support
                    </li>
                    <li className="text-gray-400">
                    <ion-icon name="close-outline"></ion-icon>
                      Analytics
                    </li>
                  </ul>

                  <Link href="contact">
                    <a
                      className="text-center text-sm tracking-wide uppercase inline-block bg-white border postProduct font-bold w-full p-3 rounded no-underline lg:hover:shadow-xl"
                      rel="noopener noreferrer"
                    >
                      Get started
                    </a>
                  </Link>
                </div>
              </div>

              <div className="mb-4 lg:mb-0 lg:w-1/2 lg:px-2">
                <div className="border border-gray-300  pt-5 pb-10 px-10 rounded lg:shadow-lg">
                  <h2 className="text-lg mb-4">POPULAR</h2>
                  <div className="pb-4 border-b">
                    <span className="block text-5xl pb-2 text-gray-800">
                      <span className="text-gray-400">₹</span>2,000
                    </span>
                    <p className="text-xl">Best for Business</p>
                    <p className="text-md text-gray-500">
                      Show your products to the people who are interested in
                      your products
                    </p>
                  </div>
                  <ul className="text-gray-900 leading-loose list-reset my-4">
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon> Add
                      Company
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon> Free
                      Web Page
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon> 5
                      Products
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon> View
                      Leads
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon> CRM
                      Software
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon>{" "}
                      Featured Products
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon>{" "}
                      Company highlighted in Search Results
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon>{" "}
                      Premium Company Themes
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon> Email
                      Support
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon>{" "}
                      Analytics
                    </li>
                  </ul>
                  <Link href="contact">
                    <a
                      className="text-center text-sm tracking-wide uppercase inline-block border text-white lg:border-none getStarted lg:hover:shadow-xl lg:text-white font-bold w-full p-3 rounded no-underline"
                      rel="noopener noreferrer"
                    >
                      Get started
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-xl font-semibold mt-10 mb-2">
              Need an enterprise solution?
            </p>
            <p className="mb-1">
              Drive amazing results with value added features.
            </p>
            <p className="mb-4">
              We provide everything a company needs to build and run best in
              class customer experiences at scale Contact Us
            </p>
            <p className="italic px-2 bg-yellow-100 inline">
              Note: Local taxes (VAT, GST, etc.) will be charged in addition to
              the prices mentioned
            </p>
          </div>
        </div>
  </Layout>
)

export default Pricing
