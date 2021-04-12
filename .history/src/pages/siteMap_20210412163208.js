import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const Sitemap = () => (
  <Layout>
    <SEO title="Advertise with Bigindia.com" />
    <div className="text-gray-700 body-font">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 pt-8 px-8">
                Site Map
              </h1>
          <div className="flex p-8 md:flex-row flex-col">
            <div className="lg:flex-grow md:w-1/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
              <p className="text-xl font-semibold mb-2 leading-relaxed">
                Products
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/categories">
                  Product Categories
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/">
                  Latest Products
                </Link>
              </p>

              <p className="text-xl font-semibold mb-3 leading-relaxed">
                Companies
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/">
                  List of Companies
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/cities">
                  Companies by Cities
                </Link>
              </p>

              <p className="text-xl font-semibold mb-3 leading-relaxed">
                Member
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/login" target="_blank">
                  User Login
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/register" target="_blank">
                  User Register
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/products/create" target="_blank">
                  Post your Product
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/companies/create" target="_blank">
                  Post your Company
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/companies" target="_blank">
                  Dashboard
                </Link>
              </p>

              <p className="text-xl font-semibold mb-3 leading-relaxed" target="_blank">
                CRM Software
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/leads/getproductleads/list" target="_blank">
                  Leads
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/customers" target="_blank">
                  Customers
                </Link>
              </p>

              <p className="text-xl font-semibold mb-2 leading-relaxed">
                Benefits
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/siteMap">
                  Site Map
                </Link>
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6">
              <p className="text-xl font-semibold mb-3 leading-relaxed">
                RFQ&#39;s
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/rfq-forms/create" target="_blank">
                  Submit RFQ&#39;s
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/rfq" target="_blank">
                  View RFQ&#39;s
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="https://crm.bigindia.com/rfq-leads" target="_blank">
                  View Quotes
                </Link>
              </p>

              <p className="mb-3 leading-relaxed">
                <Link to="/">
                  Home Page
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/contact">
                  Contact Us
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/advertise">
                  Advertise
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/pricing">
                  Pricing
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/privacy-policy">
                  Privacy Policies
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/terms">
                  Terms &amp; Conditions
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/helpCenter">
                  Help Canter
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/buyer">
                  Buyer
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/seller">
                  Seller
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/aboutus">
                  About Us
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/career">
                  Career
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/crmSoftware">
                  CRM Software
                </Link>
              </p>
            </div>

            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6">
            <StaticImage
                src="../images/site-map.jpg"
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

export default Sitemap
