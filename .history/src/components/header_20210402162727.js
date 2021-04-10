import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (


      <nav class="flex items-center bg-white flex-wrap mx-auto border-b">
        <span class="flex items-center justify-between text-3xl text-gray-500 font-black pl-5">
          <Link To="/">
            <a aria-label="logo-bigindia" role="button">
              <Image
                class=""
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
          class="text-indigo-400 inline-flex p-2 hover:bg-indigo-500 lg:hidden ml-auto nav-toggler hover:text-white"
          onClick={handleClick}
        >
          <ion-icon name="apps"></ion-icon>
        </button>

        <SearchBox />

        <div
          class={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div class="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
            <span class="lg:inline-flex lg:w-auto w-auto px-4 py-2 text-md text-gray-700 hover:text-blue-500 hover:underline">
              <Link To={`${crm_url}/register`}>
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

            <span class="lg:inline-flex lg:w-auto w-auto px-4 py-2 text-md text-gray-700 hover:text-blue-500 hover:underline">
              <Link To="/rfq">
                <a role="button" aria-label="rfq">
                  RFQ
                </a>
              </Link>
            </span>

            <span class="lg:inline-flex lg:w-auto w-auto px-4 py-2 text-md text-gray-700 hover:text-blue-500 hover:underline">
              <Link To="/advertise">
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

            <span class="lg:inline-flex lg:w-auto w-auto px-4 py-2 text-md text-gray-700 hover:text-blue-500">
              <Link To={`${crm_url}/login`}>
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