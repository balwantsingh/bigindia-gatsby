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

    <div class="container mx-auto pb-20">
      <div class="block">
        <div class="md:max-w-4xl mx-auto over-hidden">
          <div class="p-7">
            <div class="justify-between text-center">
              <div class="text-4xl font-black text-indigo-600 mb-8 leading-tight">
                BigIndia.com is a leading online marketplace connecting Buyers
                and Sellers
              </div>
              <a
                class="inline-flex truncate bg-red-500 font-semibold px-5 pt-3 pb-2 rounded outline-none focus:outline-none mr-5 text-white border text-lg shadow hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
                href="https://crm.bigindia.com/register"
              >
                <span class="text-2xl mr-2">
                <ion-icon name="add-circle-outline"></ion-icon>
                </span>
                Become a seller
              </a>
              <a
                class="inline-flex text-white truncate font-semibold px-5 pt-3 pb-2 rounded outline-none focus:outline-none mr-3 hover:bg-orange-300 bg-indigo-700 text-lg shadow hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
                href="https://crm.bigindia.com/products"
              >
                <span class="text-2xl mr-2">
                  <ion-icon
                    name="create-outline"
                    role="img"
                    class="md hydrated"
                    aria-label="create outline"
                  ></ion-icon>
                </span>
                Post your product
              </a>

            </div>
            <footer class="mx-auto flex text-gray-700 leading-none p-2 md:p-4 text-center gap-x-16">
                <div class="">
                  
                  <p class="text-lg text-gray-600"><ion-icon name="star"></ion-icon> Trusted Platform</p>
                </div>
                <div class="">

                  <p class="text-lg text-gray-600"><ion-icon name="shield-checkmark"></ion-icon> Safe & Secure</p>
                </div>
                <div class="">

                  <p class="text-lg text-gray-600"><ion-icon name="chatbox-ellipses"></ion-icon> Quick Assistance</p>
                </div>
              </footer>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
