import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

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
                  BigIndia.com is a leading online marketplace{" "}
                  <ion-icon name="add-circle-outline"></ion-icon>
                  <br />
                  connecting Buyers and Sellers
                </h1>
                <Link to="https://crm.bigindia.com/register" target="_blank">
                  <span
                    className="inline-flex truncate getStarted font-semibold px-5 py-3 rounded outline-none focus:outline-none mr-5 text-white border text-lg shadow hover:shadow-xl"
                    rel="noopener noreferrer"
                    aria-label="become a seller"
                  >
                    Become a seller
                  </span>
                </Link>
                <Link to="https://crm.bigindia.com/login" target="_blank">
                  <span
                    className="inline-flex text-white truncate font-semibold px-5 py-3 rounded outline-none focus:outline-none mr-3 hover:bg-orange-300 bg-indigo-700 text-lg shadow hover:shadow-xl"
                    rel="noopener noreferrer"
                    aria-label="post your product"
                  >
                    Post your product
                  </span>
                </Link>
              </header>
              <footer className="flex text-gray-700 font-bold leading-none p-2 md:p-4 text-center gap-x-16">
                <div className="">
                  <p className="text-lg text-gray-600">Trusted Platform</p>
                </div>
                <div className="">
                  <p className="text-lg text-gray-600">Safe & Secure</p>
                </div>
                <div className="">
                  <p className="text-lg text-gray-600">Quick Assistance</p>
                </div>
              </footer>
            </article>
          </div>

          <div className="px-1 w-full md:w-1/2 lg:my-0 lg:px-4 lg:w-1/2">
            <div className="flex justify-end">
              <StaticImage
                src="../images/connect-buyer-seller.png"
                width={600}
                alt="Buy and Sell with Bigindia"
                placeholder="tracedSVG"
                quality="40"
              />
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
          <StaticImage
            src="../images/dryer.jpeg"
            width={1000}
            height={1000}
            alt="Foldable Hair Dryer"
            placeholder="tracedSVG"
            quality="40"
          />
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
          <StaticImage
            src="../images/mobile.jpg"
            width={1000}
            height={1000}
            alt="Pigeon by Stovekraft Quartz Kettle"
            placeholder="tracedSVG"
            quality="40"
          />
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
          <StaticImage
            src="../images/luggage.jpg"
            width={1000}
            height={1000}
            alt="Medium Check-in Luggage"
            placeholder="tracedSVG"
            quality="40"
          />
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
          <StaticImage
            src="../images/backpack.jpg"
            width={1000}
            height={1000}
            alt="Laptop Backpack Spacy unisex backpack"
            placeholder="tracedSVG"
            quality="40"
          />
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
          <StaticImage
            src="../images/watch.jpeg"
            width={1000}
            height={1000}
            alt="GOLD PLATED DAY & DATE FUNCTIONING Analog Watch"
            placeholder="tracedSVG"
            quality="40"
          />
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
          <StaticImage
            src="../images/headset.jpg"
            width={1000}
            height={1000}
            alt="boAt Rockerz 400 Bluetooth Headset"
            placeholder="tracedSVG"
            quality="40"
          />
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
          <StaticImage
            src="../images/red.jpg"
            width={1000}
            height={1000}
            alt="REDMI 9i"
            placeholder="tracedSVG"
            quality="40"
          />
        </p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
          REDMI 9i (Sea Blue, 64 GB) (4 GB RAM)
        </p>
        <p class="text-sm text-gray-700 capitalize my-1">Mi</p>
        <p class="text-sm text-gray-700 capitalize my-1">Delhi</p>
        <p class="text-gray-700 my-1">&#8377;7,999</p>
      </div>
      <div class="w-1/5 border shadow p-5 mr-8 overflow-hidden rounded-lg py-2 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-gray-400">
        <p>
          <StaticImage
            src="../images/bagpack2.jpg"
            width={1000}
            height={1000}
            alt="Large 35 L Laptop Backpack Spacy unisex backpack"
            placeholder="tracedSVG"
            quality="40"
          />
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
          <StaticImage
            src="../images/tripod.jpg"
            width={1000}
            height={1000}
            alt="CASADOMANI 3110 Tripod stand With 3-Way Head Light"
            placeholder="tracedSVG"
            quality="40"
          />
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
          <StaticImage
            src="../images/wallet.jpg"
            width={1000}
            height={1000}
            alt="Men Tan Artificial Leather Money Clip"
            placeholder="tracedSVG"
            quality="40"
          />
        </p>
        <p class="block font-semibold hover:underline text-gray-700 mt-2">
          Men Tan Artificial Leather Money Clip (6 Card Slots)
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
                <StaticImage
                  src="../images/agriculture.jpg"
                  width={70}
                  alt="Agriculture"
                  placeholder="tracedSVG"
                  quality="40"
                />
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
                <StaticImage
                  src="../images/apparel.jpg"
                  width={70}
                  alt="Apparel"
                  placeholder="tracedSVG"
                  quality="40"
                />
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
                <StaticImage
                  src="../images/automobiles.jpg"
                  width={70}
                  alt="Automobiles"
                  placeholder="tracedSVG"
                  quality="40"
                />
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
                <StaticImage
                  src="../images/jewellery.jpg"
                  width={70}
                  alt="Jewellery"
                  placeholder="tracedSVG"
                  quality="40"
                />
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
                <StaticImage
                  src="../images/furniture.jpg"
                  width={70}
                  alt="Furniture"
                  placeholder="tracedSVG"
                  quality="40"
                />
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
                <StaticImage
                  src="../images/printing.jpg"
                  width={70}
                  alt="Printing"
                  placeholder="tracedSVG"
                  quality="40"
                />
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
                <StaticImage
                  src="../images/others.jpg"
                  width={70}
                  alt="Others"
                  placeholder="tracedSVG"
                  quality="40"
                />
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
                      <StaticImage
                        src="../images/rfqs.png"
                        width={1000}
                        alt="Others"
                        placeholder="tracedSVG"
                        quality="40"
                      />
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
                      <span
                        className="text-gray-800 font-semibold px-5 py-3 rounded outline-none focus:outline-none mr-3 mb-1 hover:bg-orange-300 bg-gray-100 text-md border border-gray-400 hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="become a seller"
                      >
                        <span className="text-2xl mr-2">
                          <ion-icon name="people-outline"></ion-icon>
                        </span>
                        Become a seller
                      </span>
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
                      <span
                        className="text-gray-800 font-semibold px-5 py-3 rounded outline-none focus:outline-none mr-3 mb-1 hover:bg-orange-300 bg-gray-100 text-md border border-gray-400 hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="become a seller"
                      >
                        <span className="text-2xl mr-2">
                          <ion-icon name="people-outline"></ion-icon>
                        </span>
                        View RFQ's
                      </span>
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
                      <span
                        className="text-gray-800 font-semibold px-5 py-3 rounded outline-none focus:outline-none mr-3 mb-1 hover:bg-orange-300 bg-gray-100 text-md border border-gray-400 hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="become a seller"
                      >
                        <span className="text-2xl mr-2">
                          <ion-icon name="people-outline"></ion-icon>
                        </span>
                        View Leads{" "}
                      </span>
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
              <StaticImage
                src="../images/company1.jpg"
                width={500}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              />
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <StaticImage
                src="../images/company2.jpg"
                width={500}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              />
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <StaticImage
                src="../images/company3.jpg"
                width={500}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              />
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <StaticImage
                src="../images/company4.jpg"
                width={500}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              />
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <StaticImage
                src="../images/company5.jpg"
                width={500}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              />
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <StaticImage
                src="../images/company6.jpg"
                width={500}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              />
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <StaticImage
                src="../images/company7.jpg"
                width={500}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              />
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <StaticImage
                src="../images/company8.jpg"
                width={500}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              />
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <StaticImage
                src="../images/company9.jpg"
                width={500}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              />
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <StaticImage
                src="../images/company10.jpg"
                width={500}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              />
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <StaticImage
                src="../images/company11.jpg"
                width={500}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              />
            </header>
          </article>
        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/6">
          <article class="overflow-hidden rounded-lg">
            <header class="flex">
              <StaticImage
                src="../images/company12.jpg"
                width={500}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              />
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
                <StaticImage
                src="../images/delhi.jpg"
                width={100}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              /> <div>Delhi</div>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                <StaticImage
                src="../images/bengaluru.jpg"
                width={100}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              /> <div>Bengaluru</div>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                <StaticImage
                src="../images/chennai.jpg"
                width={100}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              /> <div>Chennai</div>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                <StaticImage
                src="../images/mumbai.jpg"
                width={100}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              /> <div>Mumbai</div>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                <StaticImage
                src="../images/ahmedabad.jpg"
                width={100}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              /> <div>Ahmedabad</div>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                <StaticImage
                src="../images/kolkata.jpg"
                width={100}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              /> <div>Kolkata</div>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                <StaticImage
                src="../images/pune.jpg"
                width={100}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              /> <div>Pune</div>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                <StaticImage
                src="../images/surat.jpg"
                width={100}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              /> <div>Surat</div>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                <StaticImage
                src="../images/jaipur.jpg"
                width={100}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              /> <div>Jaipur</div>
                </div>
              </header>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
            <article class="overflow-hidden rounded-lg">
              <header class="flex">
                <div class="text-gray-700 mt-5 text-center text-lg">
                <StaticImage
                src="../images/hyderabad.jpg"
                width={100}
                alt="Others"
                placeholder="tracedSVG"
                quality="40"
              /> <div>Hyderabad</div>
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
