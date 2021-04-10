import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import sitemap from "../images/sitemap.png"

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
                <Link to="/category">
                  <a>Product Categories</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/product">
                  <a>Latest Products</a>
                </Link>
              </p>

              <p className="text-xl font-semibold mb-3 leading-relaxed">
                Companies
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="/company">
                  <a>List of Companies</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="cities">
                  <a>Companies by Cities</a>
                </Link>
              </p>

              <p className="text-xl font-semibold mb-3 leading-relaxed">
                Member
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/login">
                  <a>User Login</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/register">
                  <a>User Register</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/products/create">
                  <a>Post your Product</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/companies/create">
                  <a>Post your Company</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/companies">
                  <a>Dashboard</a>
                </Link>
              </p>

              <p className="text-xl font-semibold mb-3 leading-relaxed">
                CRM Software
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/leads/getproductleads/list">
                  <a>Leads</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/customers">
                  <a>Customers</a>
                </Link>
              </p>

              <p className="text-xl font-semibold mb-2 leading-relaxed">
                Benefits
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="siteMap">
                  <a>Site Map</a>
                </Link>
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6">
              <p className="text-xl font-semibold mb-3 leading-relaxed">
                RFQ&#39;s
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/rfq-forms/create">
                  <a>Submit RFQ&#39;s</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
              <Link to="https://crm.bigindia.com/rfq">
                  <a>View RFQ&#39;s</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="https://crm.bigindia.com/rfq-leads">
                  <a>View Quotes</a>
                </Link>
              </p>

              <p className="mb-3 leading-relaxed">
                <Link to="/">
                  <a>Home Page</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="contact">
                  <a>Contact Us</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="advertise">
                  <a>Advertise</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="pricing">
                  <a>Pricing</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="privacy-policy">
                  <a>Privacy Policies</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="terms">
                  <a>Terms &amp; Conditions</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="helpCenter">
                  <a>Help Canter</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="buyer">
                  <a>Buyer</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="seller">
                  <a>Seller</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="aboutus">
                  <a>About Us</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="career">
                  <a>Career</a>
                </Link>
              </p>
              <p className="mb-3 leading-relaxed">
                <Link to="crmSoftware">
                  <a>CRM Software</a>
                </Link>
              </p>
            </div>

            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6">
            <img src={sitemap} alt="Site Map" />
            </div>
          </div>
        </div>
  </Layout>
)

export default Sitemap
