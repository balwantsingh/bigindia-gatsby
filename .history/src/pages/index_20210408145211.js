import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Helmet from "react-helmet"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <script src={"static/script.js"} type="text/javascript" />
      <script src={"static/jquery-3.5.1.min.js"} type="text/javascript" />
      <script src={"https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"} />
    </Helmet>
    <SEO title="Home" />

    <div className="bg-white mb-5 border-b">
      <div className="mx-auto px-4 md:px-8">
        <div className="flex flex-wrap -mx-1 lg:-mx-0">
          <div className="my-1 w-full md:w-1/2 lg:my-4 lg:px-0 lg:w-1/1">
            <article className="overflow-hidden">
              <header className="items-center justify-between leading-tight p-2 md:py-4">
                <h1 className="text-3xl font-semibold text-gray-700 mb-5">
                  BigIndia.com is a leading online marketplace
                  <br />
                  connecting Buyers and Sellers
                </h1>
                <Link to="https://crm.bigindia.com/register">
                  <a
                    className="inline-flex truncate getStarted font-semibold px-5 pt-3 pb-2 rounded outline-none focus:outline-none mr-5 text-white border text-lg shadow hover:shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="become a seller"
                  >
                    <span className="text-2xl mr-2">
                      <ion-icon name="people-outline"></ion-icon>
                    </span>
                    Become a seller
                  </a>
                </Link>
                <Link to="https://crm.bigindia.com/login">
                  <a
                    className="inline-flex text-white truncate font-semibold px-5 pt-3 pb-2 rounded outline-none focus:outline-none mr-3 hover:bg-orange-300 bg-indigo-700 text-lg shadow hover:shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="post your product"
                  >
                    <span className="text-2xl mr-2">
                      <ion-icon name="create-outline"></ion-icon>
                    </span>
                    Post your product
                  </a>
                </Link>
              </header>
              <footer className="flex text-gray-700 leading-none p-2 md:p-4 text-center gap-x-16">
                <div className="">
                  <p className="text-lg text-gray-600">
                    <ion-icon name="star"></ion-icon> Trusted Platform
                  </p>
                </div>
                <div className="">
                  <p className="text-lg text-gray-600">
                    <ion-icon name="shield-checkmark"></ion-icon> Safe & Secure
                  </p>
                </div>
                <div className="">
                  <p className="text-lg text-gray-600">
                    <ion-icon name="chatbox-ellipses"></ion-icon> Quick
                    Assistance
                  </p>
                </div>
              </footer>
            </article>
          </div>

          <div className="px-1 w-full md:w-1/2 lg:my-0 lg:px-4 lg:w-1/2">
            <div className="flex justify-end">
              {/* <Image
                src={`/images/connect-buyer-seller.png`}
                alt={`additional-image`}
                width={400}
                height={280}
                objectFit="contain"
                layout="intrinsic"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-lg font-bold hover:underline text-gray-700 uppercase px-10 mb-5">
      Latest Products
    </div>
    <div class="flex px-10">
      <div class="w-1/5 border shadow p-5 mr-8 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>Image</p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
          Product Title
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">Company</p>
        <p class="text-sm text-gray-700 capitalize my-1">Location</p>
        <p class="text-gray-700 my-1">Price</p>
      </div>
      <div class="w-1/5 border shadow p-5 mr-8 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>Image</p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
          Product Title
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">Company</p>
        <p class="text-sm text-gray-700 capitalize my-1">Location</p>
        <p class="text-gray-700 my-1">Price</p>
      </div>
      <div class="w-1/5 border shadow p-5 mr-8 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>Image</p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
          Product Title
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">Company</p>
        <p class="text-sm text-gray-700 capitalize my-1">Location</p>
        <p class="text-gray-700 my-1">Price</p>
      </div>
      <div class="w-1/5 border shadow p-5 mr-8 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>Image</p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
          Product Title
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">Company</p>
        <p class="text-sm text-gray-700 capitalize my-1">Location</p>
        <p class="text-gray-700 my-1">Price</p>
      </div>
      <div class="w-1/5 border shadow p-5 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>Image</p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
          Product Title
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">Company</p>
        <p class="text-sm text-gray-700 capitalize my-1">Location</p>
        <p class="text-gray-700 my-1">Price</p>
      </div>
    </div>

    <div class="flex px-10 mt-8">
      <div class="w-1/5 border shadow p-5 mr-8 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>Image</p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
          Product Title
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">Company</p>
        <p class="text-sm text-gray-700 capitalize my-1">Location</p>
        <p class="text-gray-700 my-1">Price</p>
      </div>
      <div class="w-1/5 border shadow p-5 mr-8 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>Image</p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
          Product Title
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">Company</p>
        <p class="text-sm text-gray-700 capitalize my-1">Location</p>
        <p class="text-gray-700 my-1">Price</p>
      </div>
      <div class="w-1/5 border shadow p-5 mr-8 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>Image</p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
          Product Title
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">Company</p>
        <p class="text-sm text-gray-700 capitalize my-1">Location</p>
        <p class="text-gray-700 my-1">Price</p>
      </div>
      <div class="w-1/5 border shadow p-5 mr-8 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>Image</p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
          Product Title
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">Company</p>
        <p class="text-sm text-gray-700 capitalize my-1">Location</p>
        <p class="text-gray-700 my-1">Price</p>
      </div>
      <div class="w-1/5 border shadow p-5 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>Image</p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
          Product Title
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">Company</p>
        <p class="text-sm text-gray-700 capitalize my-1">Location</p>
        <p class="text-gray-700 my-1">Price</p>
      </div>
    </div>

    <div class="text-lg font-bold hover:underline text-gray-700 uppercase px-10 mt-10 mb-5">
      Browse by Categories
    </div>
    
    <div class="mb-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">Agriculture</div>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Agricultural Implements</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Agricultural Machinery</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Agricultural Plantation Machinery</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Agricultural Tanks</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Agricultural Tools</p>
                </h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">Apparel</div>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Accessories</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Activewear</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Airline Uniform</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Aluminium Buttons</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">American Football Trouser</p>
                </h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">Automobiles</div>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">AC Brake</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">AC Solenoid Operated Brakes</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Acid Exhaust System</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Acrylic Number Plate</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Adhesive Weight</p>
                </h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">Jewellery</div>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Abalone Shell Ring</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Abrasive Glass Beads</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Acrylic Bangles</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Acrylic Beads</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Acrylic Bracelet</p>
                </h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">Furniture</div>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Accent Tables</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Acrylic Dining Table</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Activity Tables</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Adjustable Chairs</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Advertising Brochure</p>
                </h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">Printing & Packaging</div>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">ABS Tray</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Adhesive Decals</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Adhesive Paper</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Adhesive Tape</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Aerosol Cans</p>
                </h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">Others</div>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Others</p>
                </h1>
              </div>
            </header>
          </article>
        </div>
      </div>
    </div>

    <div class=" justify-center bg-gray-100 border pt-10 pb-0 px-12 relative z-10">
    <h4 class="text-xl font-bold uppercase text-gray-700 text-center mb-5 hover:underline hover:text-blue-500">Request For Quotation</h4>
    <div class="mb-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">Agriculture</div>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Agricultural Implements</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Agricultural Machinery</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Agricultural Plantation Machinery</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Agricultural Tanks</p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">Agricultural Tools</p>
                </h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 border-r border-gray-300">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl mb-5">Get quotations from the most reputed suppliers</div>
                  <Link to="https://crm.bigindia.com/rfq-forms/create">
                  <a
                    className="inline-flex truncate getStarted font-semibold px-5 pt-3 pb-2 rounded outline-none focus:outline-none mr-5 text-white border text-lg shadow hover:shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="become a seller"
                  >
                    <span className="text-2xl mr-2">
                      <ion-icon name="people-outline"></ion-icon>
                    </span>
                    Become a seller
                  </a>
                </Link>
                </h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 border-r border-gray-300">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl mb-5">Most Recent RFQs from leading Companies</div>
                  <Link to="https://crm.bigindia.com/rfq-forms/create">
                  <a
                    className="inline-flex truncate getStarted font-semibold px-5 pt-3 pb-2 rounded outline-none focus:outline-none mr-5 text-white border text-lg shadow hover:shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="become a seller"
                  >
                    <span className="text-2xl mr-2">
                      <ion-icon name="people-outline"></ion-icon>
                    </span>
                    View RFQ's
                  </a>
                </Link>
                </h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div class="text-gray-700 border-r border-gray-300 p-10 mt-5">
                <h1 class="ml-3 -mt-2">
                  <div class="text-lg mb-7">Manage Leads from your RFQ's and close deals</div>
                  <Link to="https://crm.bigindia.com/rfq-forms/create">
                  <a
                    className="text-gray-800 font-semibold px-5 py-3 rounded outline-none focus:outline-none mr-3 mb-1 hover:bg-orange-300 bg-gray-100 text-md border border-gray-400 hover:shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="become a seller"
                  >
                    <span className="text-2xl mr-2">
                      <ion-icon name="people-outline"></ion-icon>
                    </span>
                    View Leads                  </a>
                </Link>
                </h1>
              </div>
            </header>
          </article>
        </div>
        </div>
        </div>
    </div>
  </Layout>
)

export default IndexPage
