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
                  BigIndia.com is a leading online marketplace<br />
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
    
    <div class="text-2xl font-bold px-10">Latest Products</div>
    <div class="flex px-10">
      <div class="w-1/5 border shadow p-5">
        <p>Image</p>
        <p>Product Title</p>
        <p>Company</p>
        <p>Location</p>
        <p>Price</p>
      </div>
      <div class="w-1/5 border shadow p-5">
        <p>Image</p>
        <p>Product Title</p>
        <p>Company</p>
        <p>Location</p>
        <p>Price</p>
      </div>
      <div class="w-1/5 border shadow p-5">
        <p>Image</p>
        <p>Product Title</p>
        <p>Company</p>
        <p>Location</p>
        <p>Price</p>
      </div>
      <div class="w-1/5 border shadow p-5">
        <p>Image</p>
        <p>Product Title</p>
        <p>Company</p>
        <p>Location</p>
        <p>Price</p>
      </div>
      <div class="w-1/5 border shadow p-5">
        <p>Image</p>
        <p>Product Title</p>
        <p>Company</p>
        <p>Location</p>
        <p>Price</p>
      </div>
    </div>
    
  </Layout>
  
)

export default IndexPage
