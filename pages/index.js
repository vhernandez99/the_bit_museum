import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    // <div className=" flex flex-col justify-between "  style={{backgroundImage: `url(/assets/purplebg.jpeg)`}}>
    // <div className="bg-gradient-to-r from-mainColor-100">
    <div>
      <div>
        <div className="flex justify-center">
          <div className="lg:w-3/4 w-full flex justify-between p-4 lg:p-0">
            <div className="flex items-center ">
              <div className="">
                <Link href="https://www.thebitmuseum.com/" passHref>
                  <a target="_blank" rel="noreferrer">
                    <Image
                      src="/assets/logo.png"
                      width={100}
                      height={100}
                      objectFit="cover"
                    />
                  </a>
                </Link>
              </div>
              <h1 className="tracking-wider font-bold text-white hidden lg:flex">
                The Bit Museum
              </h1>
            </div>
            <div className="flex space-x-2 items-center p-4">
              {/* <div className="flex items-center bg-white rounded-lg space-x-10 p-4 ">
                {/* <button className="tracking-wider font-bold bg-mainColor-100 text-white cursor-pointer h-10 w-28 rounded-lg">
                  Roadmap
                </button> */}
              {/* <button className="tracking-wider font-bold bg-mainColor-100 text-white h-10 w-28 rounded-lg">
                  Mint
                </button> */}
              {/* </div>  */}
              <button className="tracking-wider font-bold bg-white h-14 w-48 rounded-lg text-mainColor-100 cursor-pointer">
                Roadmap
              </button>
              <button className="tracking-wider font-bold bg-white h-14 w-48 rounded-lg text-mainColor-100 cursor-pointer">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="lg:flex w-full lg:w-3/4 mx-auto p-4 lg:p-4">
            <div className="relative lg:w-1/2">
              {/* <Image src="/assets/poster.png" layout="fill"/> */}
              <video
                src="/assets/ticket.webm"
                autoPlay
                muted
                loop
                width={1500}
                height={1500}
                type="video/mp4"
              ></video>
            </div>
            <div className="w-full lg:w-1/2 text-mainColor-100 lg:pl-6  text-justify tracking-wide space-y-8 mt-8">
              <h1 className="text-center font-bold mb-6 text-3xl text-white">
                Become a TBM Founder!
              </h1>
              <p className="">
                By owning a ticket, you will kickstart the project. Being a
                Founder of the first Historic Metaverse Museum rewards you with
                the following benefits.
              </p>
              <ul className="space-y-1">
                <li>
                  1. Free access to any future Museum opening in our metaverse
                  platform.
                </li>
                <li>2. Exclusive access to mints from Museum Partners</li>
                <li>3. Reward over 10% of TBM utilities:</li>
                <li>• All Sold Historical NFTs listed by the TBM</li>
                <li>• TBM’s Metaverse Museum Ticket Services</li>
                <li>
                  • Mesh-Texture Digitization Service (Paid like dividends every
                  3 months)
                </li>
              </ul>

              <div className="flex flex-col items-center space-y-2">
                <h1>How many tickets to mint?</h1>
                <input
                  className="border border-mainColor-100 rounded-lg p-2"
                  type="number"
                  placeholder="0"
                />
                <button className="tracking-wider font-bold bg-mainColor-100 text-white h-10 w-28 rounded-lg">
                  Mint
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <footer className="bg-mainColor-100 h-32 flex justify-center items-end">
        <div>
          <h1>© 2022 The Bit Museum</h1>
        </div>
      </footer> */}
      <footer className="dark:bg-gray-800 lg:w-3/4 w-full mx-auto m-6 p-4 lg:p-0">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
              href="https://www.thebitmuseum.com/"
              className="flex items-center"
            >
              <Image
                src="/assets/logo.png"
                width={30}
                height={30}
                objectFit="cover"
              />
              <span className="tracking-wider font-bold text-white">
                The Bit Museum
              </span>
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-between">
          <span className="text-sm text-white sm:text-center ">
            © 2022{" "}
            <Link href="https://www.thebitmuseum.com/" passHref>
              <a target="_blank" rel="noreferrer" className="hover:underline">
                The Bit Museum™ . All Rights Reserved.
              </a>
            </Link>
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://www.tiktok.com/@thebitmuseum"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-0.32296740998066475 -3.1283528999801873 42.68446958125966 42.128352899980186"
              >
                <g fill="none">
                  <path
                    d="M14 15.599v-1.486A13.1 13.1 0 0 0 12.337 14C5.535 14 0 19.18 0 25.547 0 29.452 2.086 32.91 5.267 35c-2.13-2.132-3.315-4.942-3.313-7.861 0-6.276 5.377-11.394 12.046-11.54"
                    fill="#00f2ea"
                  />
                  <path
                    d="M14.327 32c2.876 0 5.221-2.273 5.328-5.107l.01-25.292h4.65A8.72 8.72 0 0 1 24.164 0h-6.35l-.011 25.293c-.106 2.832-2.453 5.105-5.328 5.105a5.329 5.329 0 0 1-2.476-.61A5.34 5.34 0 0 0 14.327 32m18.672-21.814V8.78a8.818 8.818 0 0 1-4.81-1.421A8.85 8.85 0 0 0 33 10.186"
                    fill="#00f2ea"
                  />
                  <path
                    d="M28 7.718A8.63 8.63 0 0 1 25.832 2h-1.697A8.735 8.735 0 0 0 28 7.718M12.325 20.065c-2.94.004-5.322 2.361-5.325 5.27A5.267 5.267 0 0 0 9.854 30a5.2 5.2 0 0 1-1.008-3.073c.003-2.91 2.385-5.268 5.325-5.271.55 0 1.075.09 1.572.244v-6.4a11.72 11.72 0 0 0-1.572-.114c-.092 0-.183.006-.274.007v4.916a5.286 5.286 0 0 0-1.572-.244"
                    fill="#ff004f"
                  />
                  <path
                    d="M32.153 11v4.884a15.15 15.15 0 0 1-8.813-2.811V25.84c0 6.377-5.23 11.565-11.658 11.565-2.485 0-4.789-.778-6.682-2.097A11.67 11.67 0 0 0 13.528 39c6.429 0 11.659-5.188 11.659-11.564V14.668A15.15 15.15 0 0 0 34 17.478v-6.283A8.87 8.87 0 0 1 32.153 11"
                    fill="#ff004f"
                  />
                  <path
                    d="M23.979 25.42V12.632A15.741 15.741 0 0 0 33 15.448v-4.89a9.083 9.083 0 0 1-4.912-2.82C26.016 6.431 24.586 4.358 24.132 2h-4.747l-.01 25.215c-.11 2.824-2.505 5.09-5.44 5.09-1.754-.002-3.398-.822-4.42-2.204-1.794-.913-2.919-2.716-2.92-4.682.003-2.92 2.44-5.285 5.45-5.289.56 0 1.098.09 1.608.245v-4.933C7.202 15.589 2 20.722 2 27.016c0 3.045 1.219 5.816 3.205 7.885A12.115 12.115 0 0 0 12.045 37c6.58 0 11.934-5.195 11.934-11.58"
                    fill="#fff"
                  />
                </g>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/thebitmuseum/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a
              href="https://discord.com/invite/YXWjqxYusK"
              target="_blank"
              
              rel="noreferrer"
              className="text-white hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-8 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/TheBitMuseum"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
