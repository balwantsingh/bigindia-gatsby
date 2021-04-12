import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const Career = () => (
  <Layout>
    <SEO title="Advertise with Bigindia.com" />
        <div className="text-gray-700 body-font">
          <div className="flex p-8 md:flex-row flex-col">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Career
              </h1>
              <p className="mb-5 leading-relaxed text-lg">
                We have the following openings:
              </p>
              <p className="text-xl font-semibold">Sales Executive</p>
              <ul className="mb-5 ml-3 leading-relaxed">
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon> Handle lead
                  generation and sales
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon> Report and
                  provide feedback to management{" "}
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon> Maintain
                  and expand client database{" "}
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon> Strong
                  communication skills in written, oral, email and phone
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon> Excellent
                  organizational and time management skills
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon> Capable of
                  working independently
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon> Closing
                  business deals for the company by contacting potential
                  customers
                </li>
              </ul>
              <p className="text-xl font-semibold">PHP Developer</p>
              <ul className="mb-5 ml-3 leading-relaxed">
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon> Experience
                  in Laravel framework
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon>Experience
                  in Core PHP and MySQL
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon>
                  Understanding of various CMS and ecommerce software
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon>Write clean
                  object-oriented PHP as well as efficient SQL.
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon>Use
                  third-party APIs to source data at scale.
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon>Write
                  entirely new code and maintain and update existing code
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon>
                  Understanding of responsive CSS design frameworks and
                  JavaScript
                </li>
              </ul>
              <p className="text-xl font-semibold">Flutter Developer</p>
              <ul className="mb-5 ml-3 leading-relaxed">
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon> Develop
                  functional mobile applications
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon>Expertise in
                  app development for Android and/or iOS
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon>Experience
                  in Android Sudio, Swift, Java, Kotlin, Dart
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon>Support the
                  entire application lifecycle from concept, design, test,
                  release and support
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon>Design
                  interfaces to improve user experience
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon>Implement
                  Push notifications and API
                </li>
                <li className="py-1">
                  <ion-icon name="caret-forward-outline"></ion-icon>Integrate
                  app with Camera, Audio, Video and location services
                </li>
              </ul>
              <p className="mb-2 leading-relaxed font-semibold">For all the above roles:</p>
              <p className="mb-2 leading-relaxed">Experience: 1-3 years</p>
              <p className="mb-2 leading-relaxed">Work location: Delhi</p>
              <p className="mb-5 leading-relaxed">Pl. send us your Resume to - Contact Us</p>

              <div className="flex justify-center">
              <Link href="contact">
                  <span
                    className="inline-flex text-white getStarted border-0 py-2 px-6 focus:outline-none hover:shadow-lg rounded text-lg"
                    rel="noopener noreferrer"
                  >
                    Submit Resume
                  </span>
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <StaticImage
                src="../images/career.jpg"
                width={1000}
                alt="Buy and Sell with Bigindia"
                placeholder="tracedSVG"
                quality="40"
              />
            </div>
          </div>
        </div>
  </Layout>
)

export default Career
