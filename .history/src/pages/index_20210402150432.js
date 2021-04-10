import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Helmet from "react-helmet"


const IndexPage = () => (
  <Layout>
        <Helmet>
        <script src={('static/script.js')} type="text/javascript" />
        <script src={('static/jquery-3.5.1.min.js')} type="text/javascript" />
        </Helmet>
    <SEO title="Home" />

    <div class="container mx-auto pb-20">
  <div class="block">
    <div class="md:max-w-4xl mx-auto over-hidden">
      <div class="p-7">
      <div class="justify-between">
        <div class="text-4xl font-black text-indigo-600 mb-8 leading-tight">BigIndia.com is a leading online marketplace connecting Buyers and Sellers</div>
        <a class="inline-flex truncate bg-red-500 font-semibold px-5 pt-3 pb-2 rounded outline-none focus:outline-none mr-5 text-white border text-lg shadow hover:shadow-xl" target="_blank" rel="noopener noreferrer" href="https://crm.bigindia.com/register"><span class="text-2xl mr-2"><ion-icon name="people-outline" role="img" class="md hydrated" aria-label="people outline"></ion-icon></span> Become a seller</a>
        <a class="inline-flex text-white truncate font-semibold px-5 pt-3 pb-2 rounded outline-none focus:outline-none mr-3 hover:bg-orange-300 bg-indigo-700 text-lg shadow hover:shadow-xl" target="_blank" rel="noopener noreferrer" href="https://crm.bigindia.com/products"><span class="text-2xl mr-2"><ion-icon name="create-outline" role="img" class="md hydrated" aria-label="create outline"></ion-icon></span> Post your product</a>
      <div>
    </div>
      </div>
      </div>
    </div>
    </div>
  </div>

  <div class="container mx-auto md:max-w-6xl  pb-20">
    <div class="grid grid-cols-3 gap-5">
      <div class="bg-white p-5 text-center rounded-lg">
        <div class="text-3xl font-extrabold mb-5 text-gray-700">Job Board Software</div>
        <p class="text-gray-800">Setup a fully functional advanced job board with applicant tracking system. It is Mobile friendly, easy to use job board software that automates the hiring process.</p>
        <button class="bg-purple-500 text-white text-xl py-2 px-10 rounded-md mt-7 hover:bg-purple-300">Try demo</button>
      </div>

      <div class="bg-white p-5 text-center rounded-lg">
        <div class="text-3xl font-extrabold mb-5 text-gray-700">Recruitment Software</div>
        <p class="text-gray-500">Automate the entire recruitment process of career site right from posting job, application to applicant tracking, interview and candidate selection online.</p>
        <button class="bg-green-500 text-white text-xl py-2 px-10 rounded-md mt-7 hover:bg-green-300">Try demo</button>
      </div>

      <div class="bg-white p-5 text-center rounded-lg">
        <div class="text-3xl font-extrabold mb-5 text-gray-700">CRM Software</div>
        <p class="text-gray-500">Automate the process of Lead management, Sales Pipeline, Customer acquisition. It gives companies the ability to track sales performance.</p>
        <button class="bg-pink-500 text-white text-xl py-2 px-10 rounded-md mt-7 hover:bg-pink-300">Try demo</button>
      </div>
      </div>     
    </div>


    <div class="container mx-auto">
    <div class="block text-center">
      <p class="my-10 text-gray-500 text-xl">Our Expertise - We create custom software solutions on PHP, Laravel, WordPress, iOS, Android platform</p>
    </div>
    </div>
  
  <div class="container mx-auto md:max-w-6xl pb-20">
  <div class="grid grid-cols-12 gap-5">
    <div class="bg-white p-5 text-center rounded-lg shadow border"><img src="https://aynsoft.com/wp-content/uploads/2020/03/wordpress-logo.jpg" /></div>
    <div class="bg-white p-5 text-center rounded-lg shadow border"><img src="https://aynsoft.com/wp-content/uploads/2020/03/android-logo.jpg" /></div>
    <div class="bg-white p-5 text-center rounded-lg shadow border"><img src="https://aynsoft.com/wp-content/uploads/2020/03/ios-logo.jpg" /></div>
    <div class="bg-white p-5 text-center rounded-lg shadow border"><img src="https://aynsoft.com/wp-content/uploads/2020/03/laravel-logo.jpg" /></div>
    <div class="bg-white p-5 text-center rounded-lg shadow border"><img src="https://aynsoft.com/wp-content/uploads/2020/03/swift-logo.jpg" /></div>
    <div class="bg-white p-5 text-center rounded-lg shadow border"><img src="https://aynsoft.com/wp-content/uploads/2020/03/php-mysql-logo.jpg" /></div>
    <div class="bg-white p-5 text-center rounded-lg shadow border"><img src="https://aynsoft.com/wp-content/uploads/2020/03/wordpress-logo.jpg" /></div>
    <div class="bg-white p-5 text-center rounded-lg shadow border"><img src="https://aynsoft.com/wp-content/uploads/2020/03/android-logo.jpg" /></div>
    <div class="bg-white p-5 text-center rounded-lg shadow border"><img src="https://aynsoft.com/wp-content/uploads/2020/03/ios-logo.jpg" /></div>
    <div class="bg-white p-5 text-center rounded-lg shadow border"><img src="https://aynsoft.com/wp-content/uploads/2020/03/laravel-logo.jpg" /></div>
    <div class="bg-white p-5 text-center rounded-lg shadow border"><img src="https://aynsoft.com/wp-content/uploads/2020/03/swift-logo.jpg" /></div>
    <div class="bg-white p-5 text-center rounded-lg shadow border"><img src="https://aynsoft.com/wp-content/uploads/2020/03/php-mysql-logo.jpg" /></div>

  </div>
  </div>


  <div class="container mx-auto pt-5 m-10">
    <div class="block text-center">
      <div class="text-3xl font-bold text-gray-700">Software and web development services</div>
      <p class="my-2 text-gray-500 text-sm">Completed over 2000+ Software Development Outsourcing Projects for Clients based Worldwide</p>
    </div>
    </div>

  <div class="container mx-auto md:max-w-6xl pb-20">
    <div class="grid grid-cols-3 gap-2">

      <div class="bg-white p-6 text-center">
        <div class="text-2xl font-bold mb-2 text-gray-700">Web Applications</div>
        <p class="text-gray-500">We develop database driven web based applications with real-time payment processing system to your website</p>
      </div>

      <div class="bg-white p-6 text-center">
        <div class="text-2xl font-bold mb-2 text-gray-700">Custom Programming</div>
        <p class="text-gray-500">We develop database driven web based applications with real-time payment processing system to your website</p>
      </div>

      <div class="bg-white p-6 text-center">
        <div class="text-2xl font-bold mb-2 text-gray-700">Software Development</div>
        <p class="text-gray-500">Our outsourced product development model delivers high quality, reliable and cost-effective software product lifecycle services to software companies globally.</p>
      </div>

      <div class="bg-white p-6 text-center">
        <div class="text-2xl font-bold mb-2 text-gray-700">Web & Graphic Design</div>
        <p class="text-gray-500">As a part of web application product development we provide website design, logo, corporate Identity, promotional materials and banners etc</p>
      </div>

      <div class="bg-white p-6 text-center">
        <div class="text-2xl font-bold mb-2 text-gray-700">IT Outsourcing</div>
        <p class="text-gray-500">Our competency lie in setting up dedicated offshore software development teams for outsourced product development</p>
      </div>

      <div class="bg-white p-6 text-center">
        <div class="text-2xl font-bold mb-2 text-gray-700">Web Hosting</div>
        <p class="text-gray-500">We provide Shared Web Hosting & Dedicated Web Hosting on Linux servers. For hosting web applications.</p>
      </div>

      </div>     
    </div>


  <div class="container mx-auto pt-1">
  <div class="block">
    <div class="flex flex-col md:flex-row md:max-w-6xl max-w-sm mx-auto bg-white  my-5 over-hidden text-center">
      <div class="p-7">
      <div class="h-full flex flex-col justify-between">
        <div class="text-4xl font-extrabold text-gray-700">About Us</div>
        <p class="my-2 text-gray-500 text-lg">Aynsoft is a web design and software development company that specializes in dynamic database driven websites and mobile apps. </p>
        <p class="my-2 text-gray-500 text-lg">We have been developing Web based software solutions since 2002 and since then, we continue to innovate and enable our customers to get the most business value from the latest technologies. </p>
      <div>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div> 
   </Layout>
)

export default IndexPage
