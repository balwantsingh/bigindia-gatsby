import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const Categories = () => (
  <Layout>
    <SEO title="Advertise with Bigindia.com" />
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
  </Layout>
)

export default Categories
