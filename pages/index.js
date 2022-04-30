import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center">
        <div className="w-1/2 flex justify-between">
          <div className="flex items-center">
            <div>
              <Image
                src="/assets/logo.png"
                width={50}
                height={50}
                objectFit="cover"
              />
            </div>
            <h1 className="tracking-wider font-bold text-mainColor-100">
              The Bit Museum
            </h1>
          </div>
          <div className="flex space-x-2 items-center p-4">
            <div className="flex items-center bg-white rounded-lg space-x-10 p-4">
              <h1 className="tracking-wider font-bold bg-white text-mainColor-100 cursor-pointer">
                Roadmap
              </h1>
              <button className="tracking-wider font-bold bg-mainColor-100 text-white h-10 w-28 rounded-lg">
                Mint
              </button>
            </div>
            <button className="tracking-wider font-bold bg-white h-14 w-48 rounded-lg text-mainColor-100 cursor-pointer">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="flex w-1/2 mx-auto">
          <div className="relative w-1/2">
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
          <div className=" w-1/2 text-mainColor-100 pl-6 text-justify tracking-wide space-y-4">
            <div>
              <h1 className="text-center font-bold">Become a TBM Founder!</h1>
              <p>
                By owning a ticket, you will kickstart the project. Being a
                Founder of the first Historic Metaverse Museum rewards you with
                the following benefits.
              </p>
              <ul>
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
            </div>
            <div>
              <h1>How many tickets to mint?</h1>
              <input className="border border-mainColor-100 rounded-lg p-2" type="number" placeholder="0"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
