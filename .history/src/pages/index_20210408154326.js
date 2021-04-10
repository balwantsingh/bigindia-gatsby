import React from "react"
import { Link } from "gatsby"
import Image from 'next/image'
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
                  <Image src="../images/agriculture.jpg" alt="Agriculture" width="64" height="64" />
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
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">
                    Agriculture
                  </div>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Agricultural Implements
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Agricultural Machinery
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Agricultural Plantation Machinery
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Agricultural Tanks
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Agricultural Tools
                  </p>
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
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">
                    Apparel
                  </div>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Accessories
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Activewear
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Airline Uniform
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Aluminium Buttons
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    American Football Trouser
                  </p>
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
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">
                    Automobiles
                  </div>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    AC Brake
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    AC Solenoid Operated Brakes
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Acid Exhaust System
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Acrylic Number Plate
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Adhesive Weight
                  </p>
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
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">
                    Jewellery
                  </div>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Abalone Shell Ring
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Abrasive Glass Beads
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Acrylic Bangles
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Acrylic Beads
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Acrylic Bracelet
                  </p>
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
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">
                    Furniture
                  </div>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Accent Tables
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Acrylic Dining Table
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Activity Tables
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Adjustable Chairs
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Advertising Brochure
                  </p>
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
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">
                    Printing & Packaging
                  </div>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    ABS Tray
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Adhesive Decals
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Adhesive Paper
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Adhesive Tape
                  </p>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Aerosol Cans
                  </p>
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
                  <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">
                    Others
                  </div>
                  <p class="hover:underline text-gray-700 capitalize text-sm leading-7">
                    Others
                  </p>
                </h1>
              </div>
            </header>
          </article>
        </div>
      </div>
    </div>

    <div class=" justify-center bg-gray-100 border pt-10 pb-0 px-12 relative z-10">
      <h4 class="text-xl font-bold uppercase text-gray-700 text-center mb-5 hover:underline hover:text-blue-500">
        Request For Quotation
      </h4>
      <div class="mb-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 border-r border-gray-300 p-10 mt-5">
                  <h1 class="ml-3 -mt-2">
                    <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">
                      Image here
                    </div>
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
                    <div class="text-lg mb-7">
                      Get quotations from the most reputed suppliers
                    </div>
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
                        Become a seller
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
                    <div class="text-lg mb-7">
                      Most Recent RFQs from leading Companies
                    </div>
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
                    <div class="text-lg mb-7">
                      Manage Leads from your RFQ's and close deals
                    </div>
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
                        View Leads{" "}
                      </a>
                    </Link>
                  </h1>
                </div>
              </header>
            </article>
          </div>
        </div>
      </div>
    </div>

    <h5 class="text-xl font-bold uppercase text-gray-700 text-center mb-5 hover:underline hover:text-blue-500 mt-10">
      Browse by Companies
    </h5>

    <div class="mb-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">Logo1</h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">Logo1</h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">Logo1</h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">Logo1</h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">Logo1</h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">Logo1</h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">Logo1</h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">Logo1</h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">Logo1</h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">Logo1</h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">Logo1</h1>
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <h1 class="ml-3 -mt-2">Logo1</h1>
              </div>
            </header>
          </article>
        </div>
      </div>
    </div>

    <div class=" justify-center bg-gray-100 border pt-10 pb-0 px-12 relative z-10">
      <h4 class="text-xl font-bold uppercase text-gray-700 text-center mb-5 hover:underline hover:text-blue-500">
        CHOOSE YOUR SUPPLIERS BY CITIES
      </h4>
      <div class="mb-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 border-r border-gray-300 p-10 mt-5">
                  <h1 class="ml-3 -mt-2">logo1</h1>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 p-10 mt-5">
                  <h1 class="ml-3 -mt-2">logo2</h1>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 p-10 mt-5">
                  <h1 class="ml-3 -mt-2">logo2</h1>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 p-10 mt-5">
                  <h1 class="ml-3 -mt-2">logo2</h1>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 p-10 mt-5">
                  <h1 class="ml-3 -mt-2">logo2</h1>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 p-10 mt-5">
                  <h1 class="ml-3 -mt-2">logo2</h1>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 p-10 mt-5">
                  <h1 class="ml-3 -mt-2">logo2</h1>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 p-10 mt-5">
                  <h1 class="ml-3 -mt-2">logo2</h1>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 p-10 mt-5">
                  <h1 class="ml-3 -mt-2">logo2</h1>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 p-10 mt-5">
                  <h1 class="ml-3 -mt-2">logo2</h1>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 p-10 mt-5">
                  <h1 class="ml-3 -mt-2">logo2</h1>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 p-10 mt-5">
                  <h1 class="ml-3 -mt-2">logo2</h1>
                </div>
              </header>
            </article>
          </div>
        </div>
      </div>
    </div>

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
              <h3 class="text-lg text-gray-700 font-semibold mb-4">Customer Services</h3>
              <ul class="list-none footer-links">
              <li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" aria-label="contact-us" href="/contact">Contact Us</a></li>
              <li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" aria-label="privacy-policy" href="/privacy">Privacy Policies</a></li>
              <li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" aria-label="terms-conditions" href="/terms">Terms &amp; Conditions</a></li>
              <li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" aria-label="help-center" href="/helpCenter">Help Center</a></li></ul>
              </div>
              <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 sm:mt-0">
              <h4 class="text-lg text-gray-700 font-semibold mb-4">Services</h4>
              <ul class="list-none footer-links">
              <li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" aria-label="buyer" href="/buyer">Buyer</a></li>
              <li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" aria-label="rfq" href="/rfq">RFQ</a></li>
              <li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" aria-label="seller" href="/seller">Seller</a></li>
              <li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" aria-label="become-seller" href="https://crm.bigindia.com/register">Become a seller</a></li>
              <li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" aria-label="post-product" href="https://crm.bigindia.com/products">Post Your Product<span class="bg-red-600 text-white px-1 text-xs ml-1 italic freeProduct">FREE</span></a></li>
              </ul></div>
              <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 md:mt-0">
              <h5 class="text-lg text-gray-700 font-semibold mb-4">About Us</h5>
              <ul class="list-none footer-links">
              <li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" aria-label="pricing" href="/pricing">Pricing</a></li>
              <li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" aria-label="about-us" href="/about">About Us</a></li>
              <li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" aria-label="career" href="/career">Career</a></li>
              <li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" aria-label="career" href="/benefits">Benefits</a></li>
              </ul>
              </div>
              <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 md:mt-0"><h6 class="text-lg text-gray-700 font-semibold mb-4">Bigindia.com</h6>
              <ul class="list-none footer-links"><li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" aria-label="all-categories" href="/category">All categories</a></li>
              <li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" aria-label="crm-software" href="/crmSoftware">CRM Software</a></li>
              <li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" aria-label="advertise" href="/advertise">Advertise</a></li>
              <li class="mb-1"><a class="border-b border-solid border-transparent  text-gray-600 hover:text-blue-500 hover:underline" aria-label="site-map" href="/siteMap">Site Maps</a></li>
              </ul></div>
              
              </div>
              <div class="sm:-mx-4 mt-2 sm:mt-2 sm:pt-2 "><div class="sm:w-full px-4 text-center">© 2021 bigindia.com. All rights reserved.</div>
              </div>
              </div>
              
              </footer>
              
              

              

  </Layout>
)

export default IndexPage
