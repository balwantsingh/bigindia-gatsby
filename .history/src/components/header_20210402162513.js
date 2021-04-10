import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (

<Link href="https://wa.me/918287762654">
        <a
          className="fixed z-20 bottom-5 right-0  shadow-lg bgWhatsapp rounded-full float-right mr-8 -mt-60 w-16 h-16 text-4xl font-semibold text-white hover:bg-green-600 text-center transform transition duration-300 hover:scale-110 hover:shadow-xl"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="mt-3 block">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </span>
        </a>
      </Link>
      <nav className="flex items-center bg-white flex-wrap mx-auto border-b">
        <span className="flex items-center justify-between text-3xl text-gray-500 font-black pl-5">
          <Link href="/">
            <a aria-label="logo-bigindia" role="button">
              <Image
                className=""
                src={`/images/bigindia.jpg`}
                alt="Thumbnail"
                width={115}
                height={65}
                objectFit="contain"
                priority
              />
            </a>
          </Link>
        </span>
        <button
          className="text-indigo-400 inline-flex p-2 hover:bg-indigo-500 lg:hidden ml-auto nav-toggler hover:text-white"
          onClick={handleClick}
        >
          <ion-icon name="apps"></ion-icon>
        </button>

        <SearchBox />

        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
            <span className="lg:inline-flex lg:w-auto w-auto px-4 py-2 text-md text-gray-700 hover:text-blue-500 hover:underline">
              <Link href={`${crm_url}/register`}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                  aria-label="become-a-seller"
                >
                  Become a seller
                </a>
              </Link>
            </span>

            <span className="lg:inline-flex lg:w-auto w-auto px-4 py-2 text-md text-gray-700 hover:text-blue-500 hover:underline">
              <Link href="/rfq">
                <a role="button" aria-label="rfq">
                  RFQ
                </a>
              </Link>
            </span>

            <span className="lg:inline-flex lg:w-auto w-auto px-4 py-2 text-md text-gray-700 hover:text-blue-500 hover:underline">
              <Link href="/advertise">
                <a role="button" aria-label="advertise">
                  Advertise
                </a>
              </Link>
            </span>

            {/* {isCookie ? (
              <Logout setIsCookie={setIsCookie} />
            ) : (
              <Login setIsCookie={setIsCookie} />
            )} */}

            <span className="lg:inline-flex lg:w-auto w-auto px-4 py-2 text-md text-gray-700 hover:text-blue-500">
              <Link href={`${crm_url}/login`}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                  aria-label="signIn"
                >
                  Sign in
                </a>
              </Link>
            </span>
          </div>
        </div>
      </nav>


)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
