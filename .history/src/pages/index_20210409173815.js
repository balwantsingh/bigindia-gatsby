import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import welcome from "../images/connect-buyer-seller.png"
import product1 from "../images/product1.jpg"
import product2 from "../images/product2.jpg"
import product3 from "../images/product3.jpg"
import product4 from "../images/product4.jpg"
import product5 from "../images/product5.jpg"
import product6 from "../images/product6.jpg"
import product7 from "../images/product7.jpg"
import product8 from "../images/product8.jpg"
import product9 from "../images/product9.jpg"
import product10 from "../images/product10.jpg"

import agriculture from "../images/agriculture.jpg"
import apparel from "../images/apparel.jpg"
import automobiles from "../images/automobiles.jpg"
import jewellery from "../images/jewellery.jpg"
import furniture from "../images/furniture.jpg"
import printing from "../images/printing.jpg"
import others from "../images/others.jpg"
import rfq from "../images/rfqs.png"

import company1 from "../images/company1.jpg"
import company2 from "../images/company2.jpg"
import company3 from "../images/company3.jpg"
import company4 from "../images/company4.jpg"
import company5 from "../images/company5.jpg"
import company6 from "../images/company6.jpg"
import company7 from "../images/company7.jpg"
import company8 from "../images/company8.jpg"
import company9 from "../images/company9.jpg"
import company10 from "../images/company10.jpg"
import company11 from "../images/company11.jpg"
import company12 from "../images/company12.jpg"

import delhi from "../images/delhi.jpg"
import bengaluru from "../images/bengaluru.jpg"
import chennai from "../images/chennai.jpg"
import mumbai from "../images/mumbai.jpg"
import ahmedabad from "../images/ahmedabad.jpg"
import kolkata from "../images/kolkata.jpg"
import pune from "../images/pune.jpg"
import surat from "../images/surat.jpg"
import jaipur from "../images/jaipur.jpg"
import hyderabad from "../images/hyderabad.jpg"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="bg-white mb-5 border-b">
      <div className="mx-auto px-4 md:px-8">
        <div className="flex flex-wrap -mx-1 lg:-mx-0">
          <div className="my-1 w-full md:w-1/2 lg:my-4 lg:px-0 lg:w-1/1">
            <article className="overflow-hidden">
              <header className="items-center justify-between leading-tight p-2 md:py-4">
                <h1 className="text-3xl font-semibold text-gray-700 mb-5">
                  BigIndia.com is a leading online marketplace <ion-icon name="add-circle-outline"></ion-icon>
                  <br />
                  connecting Buyers and Sellers
                </h1>
                <Link to="https://crm.bigindia.com/register" target="_blank">
                  <a
                    className="inline-flex truncate getStarted font-semibold px-5 py-3 rounded outline-none focus:outline-none mr-5 text-white border text-lg shadow hover:shadow-xl"
                    rel="noopener noreferrer"
                    aria-label="become a seller"
                  >
                    Become a seller
                  </a>
                </Link>
                <Link to="https://crm.bigindia.com/login" target="_blank">
                  <a
                    className="inline-flex text-white truncate font-semibold px-5 py-3 rounded outline-none focus:outline-none mr-3 hover:bg-orange-300 bg-indigo-700 text-lg shadow hover:shadow-xl"
                    rel="noopener noreferrer"
                    aria-label="post your product"
                  >
                    Post your product
                  </a>
                </Link>
              </header>
              <footer className="flex text-gray-700 font-bold leading-none p-2 md:p-4 text-center gap-x-16">
                <div className="">
                  <p className="text-lg text-gray-600">
                    Trusted Platform
                  </p>
                </div>
                <div className="">
                  <p className="text-lg text-gray-600">
                    Safe & Secure
                  </p>
                </div>
                <div className="">
                  <p className="text-lg text-gray-600">
                    Quick Assistance
                  </p>
                </div>
              </footer>
            </article>
          </div>

          <div className="px-1 w-full md:w-1/2 lg:my-0 lg:px-4 lg:w-1/2">
            <div className="flex justify-end">
              <img src={welcome} alt="agriculture" />
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
        <p>
          <img alt="Product1" src="/src/images/product1.jpg"  class="productImage" />
        </p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
          Foldable Hair Dryer, 3 Heat (Hot/Cool/Warm) Settings...
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">Havells</p>
        <p class="text-sm text-gray-700 capitalize my-1">New Delhi</p>
        <p class="text-gray-700 my-1">&#8377;600</p>
      </div>
      <div class="w-1/5 border shadow p-5 mr-8 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>
          <img src={product2} alt="Product2" class="productImage" />
        </p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
        Pigeon by Stovekraft Quartz Kettle with Stainless Steel Body
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">Pigeon</p>
        <p class="text-sm text-gray-700 capitalize my-1">Ahmedabad</p>
        <p class="text-gray-700 my-1">&#8377;749</p>
      </div>
      <div class="w-1/5 border shadow p-5 mr-8 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>
          <img src={product3} alt="Product3" class="productImage" />
        </p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
        Medium Check-in Luggage (65 cm) - PHOTON STROLLY
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">ARISTOCRAT</p>
        <p class="text-sm text-gray-700 capitalize my-1">Mumbai</p>
        <p class="text-gray-700 my-1">&#8377;2,313</p>
      </div>
      <div class="w-1/5 border shadow p-5 mr-8 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>
          <img src={product4} alt="Product4" class="productImage" />
        </p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
        Large 35 L Laptop Backpack Spacy unisex backpack
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">PROVOGUE</p>
        <p class="text-sm text-gray-700 capitalize my-1">Chandigarh</p>
        <p class="text-gray-700 my-1">&#8377;801</p>
      </div>
      <div class="w-1/5 border shadow p-5 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>
          <img src={product5} alt="Product5" class="productImage" />
        </p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
        GOLD PLATED DAY & DATE FUNCTIONING Analog Watch
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">LOIS CARON </p>
        <p class="text-sm text-gray-700 capitalize my-1">Gurgaon</p>
        <p class="text-gray-700 my-1">&#8377;549</p>
      </div>
    </div>

    <div class="flex px-10 mt-8">
      <div class="w-1/5 border shadow p-5 mr-8 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>
          <img src={product6} alt="Product6" class="productImage" />
        </p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
        boAt Rockerz 400 Bluetooth Headset...
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">boAt</p>
        <p class="text-sm text-gray-700 capitalize my-1">Noida</p>
        <p class="text-gray-700 my-1">&#8377;1,499</p>
      </div>
      <div class="w-1/5 border shadow p-5 mr-8 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>
          <img src={product7} alt="Product7" class="productImage" />
        </p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
        REDMI 9i (Sea Blue, 64 GB)  (4 GB RAM)
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">Mi</p>
        <p class="text-sm text-gray-700 capitalize my-1">Delhi</p>
        <p class="text-gray-700 my-1">&#8377;7,999</p>
      </div>
      <div class="w-1/5 border shadow p-5 mr-8 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>
          <img src={product8} alt="Product8" class="productImage" />
        </p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
        Large 35 L Laptop Backpack Spacy unisex backpack
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">PROVOGUE</p>
        <p class="text-sm text-gray-700 capitalize my-1">Jaipur</p>
        <p class="text-gray-700 my-1">&#8377;801</p>
      </div>
      <div class="w-1/5 border shadow p-5 mr-8 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>
          <img src={product9} alt="Product9" class="productImage" />
        </p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
        CASADOMANI 3110 Tripod stand With 3-Way Head Light
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">CASADOMANI</p>
        <p class="text-sm text-gray-700 capitalize my-1">Noida</p>
        <p class="text-gray-700 my-1">&#8377;287</p>
      </div>
      <div class="w-1/5 border shadow p-5 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>
          <img src={product10} alt="Product10" class="productImage" />
        </p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
        Men Tan Artificial Leather Money Clip  (6 Card Slots)
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">SAMTROH</p>
        <p class="text-sm text-gray-700 capitalize my-1">Agra</p>
        <p class="text-gray-700 my-1">&#8377;189</p>
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
                <img src={agriculture} alt="" class="productImage2" />
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
                <img src={apparel} alt="" class="productImage2" />
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
                <img src={automobiles} alt="" class="productImage2" />
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
                <img src={jewellery} alt="" class="productImage2" />
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
                <img src={furniture} alt="" class="productImage2" />
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
                <img src={printing} alt="" class="productImage2" />
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
                <img src={others} alt="" class="productImage2" />
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
                <div class="text-gray-700 p-10 mt-5">
                  <h1 class="ml-3 -mt-2">
                    <div class="no-underline hover:underline text-gray-700 font-semibold text-xl">
                      <img src={rfq} alt="" class="productImage2" />
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
                <img src={company1} alt="company1" class="productImage2" />
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <img src={company2} alt="company2" class="productImage2" />
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <img src={company3} alt="company3" class="productImage2" />
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <img src={company4} alt="company" class="productImage2" />
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <img src={company5} alt="company" class="productImage2" />
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <img src={company12} alt="company" class="productImage2" />
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <img src={company6} alt="company" class="productImage2" />
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <img src={company7} alt="company" class="productImage2" />
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <img src={company8} alt="company" class="productImage2" />
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <img src={company9} alt="company" class="productImage2" />
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <img src={company10} alt="company" class="productImage2" />
              </div>
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <div>
                <img src={company11} alt="company" class="productImage2" />
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
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                  <img src={delhi} alt="company" class="productImage3 mb-3" />
                  Delhi
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                  <img
                    src={bengaluru}
                    alt="company"
                    class="productImage3 mb-3"
                  />
                  Bengaluru
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                  <img src={chennai} alt="company" class="productImage3 mb-3" />
                  Chennai
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                  <img src={mumbai} alt="company" class="productImage3 mb-3" />
                  Mumbai
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                  <img
                    src={ahmedabad}
                    alt="company"
                    class="productImage3 mb-3"
                  />
                  Ahmedabad
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                  <img src={kolkata} alt="company" class="productImage3 mb-3" />
                  Kolkata
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                  <img src={pune} alt="company" class="productImage3 mb-3" />
                  Pune
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                  <img src={surat} alt="company" class="productImage3 mb-3" />
                  Surat
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                  <img src={jaipur} alt="company" class="productImage3 mb-3" />
                  Jaipur
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                  <img
                    src={hyderabad}
                    alt="company"
                    class="productImage3 mb-3"
                  />
                  Hyderabad
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
