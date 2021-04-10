import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contact from "../images/contact-us.jpg"


const Contact = () => (
  <Layout>
    <SEO title="Advertise with Bigindia.com" />
    <div className="text-gray-700 body-font">
          <div className="flex p-8 md:flex-row flex-col">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Contact Us
              </h1>
              <p className="mb-8 leading-relaxed">
                BigIndia.com is an Indian company that provides online B2B
                services.
              </p>
              <form
                name="formLead"
                action="https://crm.bigindia.com/leadgenerate/submitcontact"
                method="post"
                enctype="multipart/form-data"
              >
                <input
                  type="hidden"
                  name="_token"
                  id="csrf-token"
                  value="CE1fhGNfHeNihdF1T1eB91cn89KC1JH4arUQLbcM"
                  className="border border-gray-300 shadow w-full  rounded p-3 outline-none focus:shadow-outline"
                />
                <input type="hidden" name="uid" id="uid" value="3" />
                <input type="hidden" name="form_id" id="form_id" value="2" />
                <input
                  type="hidden"
                  name="purl"
                  id="purl"
                  value="https://www.bigindia.com/contact"
                  className="hidden"
                />
                <input
                  type="hidden"
                  name="rurl"
                  id="rurl"
                  value="https://www.bigindia.com/thankyou"
                  className="hidden"
                />
                <img
                  src="https://crm.bigindia.com/leadgenerate/formviews/2"
                  width="1"
                  height="1"
                  border="0"
                  className="hidden"
                />
                <span className="block w-full text-xl font-bold mb-4">
                  For any query, please submit the form:
                </span>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  pattern="[a-zA-Z\s]+"
                  className="border border-gray-300 shadow w-full  rounded p-3 outline-none focus:shadow-outline mb-3 required"
                  placeholder="Full Name"
                />
                 <input
                  type="text"
                  name="emailid"
                  id="emailid"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                  className="border border-gray-300 shadow w-full  rounded p-3 outline-none focus:shadow-outline mb-3 required"
                  placeholder="Email Id"
                />
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  maxlength="15"
                  pattern="\d*"
                  className="border border-gray-300 shadow w-full  rounded p-3 outline-none focus:shadow-outline mb-3"
                  placeholder="Phone"
                />
                <br />
                <input
                  type="text"
                  name="website"
                  id="website"
                  className="border border-gray-300 shadow w-full  rounded p-3 outline-none focus:shadow-outline mb-3"
                  placeholder="Website"
                />
                <textarea
                  name="notes"
                  id="notes"
                  pattern="[A-Za-z0-9]{1,500}"
                  className="border border-gray-300 shadow w-full  rounded p-3 outline-none focus:shadow-outline mb-3"
                  placeholder="Message"
                ></textarea>
                <input
                  type="hidden"
                  id="captcha-response"
                  name="captcha-response"
                />

                <input
                  type="submit"
                  name="submitLead"
                  className="w-full sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 getStarted uppercase text-sm shadow hover:shadow-lg cursor-pointer"
                />
                <br />
              </form>

              <div className="mt-4"> 
                <p className="text-lg font-semibold">Address:</p>
                <p>
                  AJ 48B
                  <br />
                  Shalimar Bagh
                  <br />
                  Delhi 110088
                  <br />
                  Email -{" "}
                  <a
                    className="hover:text-blue-500"
                    href="mailto:info@bigindia.com"
                  >
                    info@bigindia.com
                  </a>
                  <br />
                  Ph -{" "}
                  <a className="hover:text-blue-500" href="tel:8754210365">
                    8287762654
                  </a>
                </p>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src={contact} alt="Contact us" />
            </div>
          </div>
        </div>
  </Layout>
)

export default Contact
