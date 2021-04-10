import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import about from "../images/about.jpg"

const About = () => (
  <Layout>
    <SEO title="Advertise with Bigindia.com" />
    <div className="text-gray-700 body-font">
      <div className="flex p-8 md:flex-row flex-col">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About BigIndia.com
          </h1>
          <p className="mb-5 leading-relaxed">
            BigIndia.com is a leading online B2B marketplace connecting Buyers
            and Sellers Benefits for Sellers
          </p>

          <p className="mb-5 leading-relaxed">
            BigIndia.com offers services to help businesses grow fast and
            discover new sales opportunities with several lead generation
            features
          </p>

          <ul className="mb-5 ml-3 leading-relaxed">
            <li className="py-1">
              <ion-icon name="caret-forward-outline"></ion-icon> Add Free
              Company Page and post Products online
            </li>
            <li className="py-1">
              <ion-icon name="caret-forward-outline"></ion-icon> Get Business
              Leads from buyers all over the world
            </li>
            <li className="py-1">
              <ion-icon name="caret-forward-outline"></ion-icon> Free CRM
              Software to manage Leads, Deals and Orders
            </li>
          </ul>

          <p className="mb-3 text-xl font-semibold leading-relaxed">
            Benefits for Buyers
          </p>

          <p className="mb-5 leading-relaxed">
            BigIndia.com brings you thousands of Products and Companies from
            different major categories, including Medicines, Software and Food
          </p>

          <ul className="mb-5 ml-3 leading-relaxed">
            <li className="py-1">
              <ion-icon name="caret-forward-outline"></ion-icon> Buy bulk
              wholesale products directly from manufacturers
            </li>
            <li className="py-1">
              <ion-icon name="caret-forward-outline"></ion-icon> Instantly
              contact product suppliers from your city
            </li>
            <li className="py-1">
              <ion-icon name="caret-forward-outline"></ion-icon> Product
              requirement RFQ and get quotes online
            </li>
          </ul>
          <p className="mb-5 leading-relaxed">
            Our mission is to make it easy for everybody to do business
          </p>

          <Link to="https://crm.bigindia.com/login">
            <span
              class="inline-flex text-white truncate font-semibold px-6 pt-3 pb-2 rounded outline-none focus:outline-none mr-3 hover:bg-orange-300 getStarted text-lg shadow hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="text-2xl mr-2">
                <ion-icon
                  name="create-outline"
                  role="img"
                  class="md hydrated"
                  aria-label="create outline"
                ></ion-icon>
              </span>
              Register Now For Free
            </span>
          </Link>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img src={about} alt="About" />
        </div>
      </div>
    </div>
  </Layout>
)

export default About
