import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/bigindia.jpg"

const Footer = ({ siteTitle }) => (
    <div class="bg-blue-50 border-t border-b w-full p-5 md:px-8">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div class="px-1 w-full md:w-1/1 lg:my-4 lg:w-1/1">
          <p class="text-gray-700">
            BigIndia.com is a leading online B2B marketplace connecting Buyers
            and Sellers
            <br />
            Sellers can add Company Page and post Products online - Free
            <br />
            And get business Leads from buyers all over the world
            <br />
            BigIndia.com provides in-built CRM Software to all members using
            which they can manage Leads, Deals and Orders
          </p>
        </div>
        <div clas="w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
          <h1 class="text-md font-semibold text-gray-700 mb-3">
            Benefits for Buyer
          </h1>
          <ul class="list-none footer-links">
            <li class="mb-1">
              <span class="border-b border-solid border-transparent text-gray-600">
                <ion-icon
                  name="chevron-forward-outline"
                  role="img"
                  class="md hydrated"
                  aria-label="chevron forward outline"
                ></ion-icon>{" "}
                Buy bulk wholesale products directly from manufacturers
              </span>
            </li>
            <li class="mb-1">
              <span class="border-b border-solid border-transparent text-gray-600">
                <ion-icon
                  name="chevron-forward-outline"
                  role="img"
                  class="md hydrated"
                  aria-label="chevron forward outline"
                ></ion-icon>{" "}
                Instantly contact product suppliers from your city
              </span>
            </li>
            <li class="mb-1">
              <span class="border-b border-solid border-transparent text-gray-600">
                <ion-icon
                  name="chevron-forward-outline"
                  role="img"
                  class="md hydrated"
                  aria-label="chevron forward outline"
                ></ion-icon>{" "}
                Post product requirement RFQ and get quotes online
              </span>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
          <h2 class="text-md font-semibold text-gray-700 mb-3">
            Benefits for Seller
          </h2>
          <ul class="list-none footer-links">
            <li class="mb-1">
              <span class="tecxt-xsborder-b border-solid border-transparent text-gray-600">
                <ion-icon
                  name="chevron-forward-outline"
                  role="img"
                  class="md hydrated"
                  aria-label="chevron forward outline"
                ></ion-icon>{" "}
                Add Free Company Page and post Products online
              </span>
            </li>
            <li class="mb-1">
              <span class="border-b border-solid border-transparent text-gray-600">
                <ion-icon
                  name="chevron-forward-outline"
                  role="img"
                  class="md hydrated"
                  aria-label="chevron forward outline"
                ></ion-icon>{" "}
                Get Business Leads from buyers all over the world
              </span>
            </li>
            <li class="mb-1">
              <span class="border-b border-solid border-transparent text-gray-600">
                <ion-icon
                  name="chevron-forward-outline"
                  role="img"
                  class="md hydrated"
                  aria-label="chevron forward outline"
                ></ion-icon>{" "}
                Free CRM Software to manage Leads, Deals and Orders
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <footer class="footer-1 bg-white pt-6">
      <div class="container mx-auto px-8">
        <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4">
            <h3 class="text-lg text-gray-700 font-semibold mb-4">
              Customer Services
            </h3>
            <ul class="list-none footer-links">
              <li class="mb-1">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  aria-label="contact-us"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
              <li class="mb-1">
                <Link to="privacy-policy">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  aria-label="privacy-policy"
                  
                >
                  Privacy Policies
                </a>
                </Link>
              </li>
              <li class="mb-1">
              <Link to="terms">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  aria-label="terms-conditions"
                  
                >
                  Terms &amp; Conditions
                </a>
                </Link>
              </li>
              <li class="mb-1">
              <Link to="helpCenter">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  aria-label="help-center"
                  
                >
                  Help Center
                </a>
                </Link>
              </li>
            </ul>
          </div>
          <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 sm:mt-0">
            <h4 class="text-lg text-gray-700 font-semibold mb-4">Services</h4>
            <ul class="list-none footer-links">
              <li class="mb-1">
              <Link to="buyer">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  aria-label="buyer"
                  
                >
                  Buyer
                </a>
                </Link>
              </li>
              <li class="mb-1">
              <Link to="https://crm.bigindia.com/login">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  aria-label="rfq"
                  
                >
                  RFQ
                </a>
                </Link>
              </li>
              <li class="mb-1">
              <Link to="seller">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  aria-label="seller"
                  
                >
                  Seller
                </a>
                </Link>
              </li>
              <li class="mb-1">
              <Link to="https://crm.bigindia.com/register">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="become-seller"
                 
                >
                  Become a seller
                </a>
                </Link>
              </li>
              <li class="mb-1">
              <Link to="https://crm.bigindia.com/products">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="post-product"
                >
                  Post Your Product
                  <span class="bg-red-600 text-white px-1 text-xs ml-1 italic freeProduct">
                    FREE
                  </span>
                </a>
                </Link>
              </li>
            </ul>
          </div>
          <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 md:mt-0">
            <h5 class="text-lg text-gray-700 font-semibold mb-4">About Us</h5>
            <ul class="list-none footer-links">
              <li class="mb-1">
              <Link to="pricing">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  aria-label="pricing"
                  href="/pricing"
                >
                  Pricing
                </a>
                </Link>
              </li>
              <li class="mb-1">
              <Link to="aboutus">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  aria-label="about-us"
                  
                >
                  About Us
                </a>
                </Link>
              </li>
              <li class="mb-1">
              <Link to="career">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  aria-label="career"
                  href="/career"
                >
                  Career
                </a>
                </Link>
              </li>
              <li class="mb-1">
              <Link to="benefits">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  aria-label="career"
                >
                  Benefits
                </a>
                </Link>
              </li>
            </ul>
          </div>
          <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 md:mt-0">
            <h6 class="text-lg text-gray-700 font-semibold mb-4">
              Bigindia.com
            </h6>
            <ul class="list-none footer-links">
              <li class="mb-1">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  aria-label="all-categories"
                  href="/category"
                >
                  All categories
                </a>
              </li>
              <li class="mb-1">
              <Link to="crmSoftware">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  aria-label="crm-software"
                  
                >
                  CRM Software
                </a>
                </Link>
              </li>
              <li class="mb-1">
                <Link to="advertise">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  aria-label="advertise"
                 
                >
                  Advertise
                </a>
                </Link>
              </li>
              <li class="mb-1">
              <Link to="siteMap">
                <a
                  class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline"
                  aria-label="site-map"
                >
                  Site Mapsdd
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="sm:-mx-4 mt-2 sm:mt-2 sm:pt-2 ">
          <div class="sm:w-full px-4 text-center">
            © 2021 bigindia.com. All rights reserved.
          </div>
        </div>
      </div>
    </footer>

)

export default Footer
