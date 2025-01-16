"use client";
import { useEffect, useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { IoMdClose, IoIosNotifications } from "react-icons/io";

const people = [
  {
    name: "Talon James Toye",
    title: "In-between opportunities",
    role: "Unemployed",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl: "/talonJamesToye.webp",
  },
  // More people...
];
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const [isBellOpen, setIsBellOpen] = useState(false);

  const handleEmailClick = () => {
    setIsEmailOpen(true);
    console.log("Fuck");
  };

  const handleEmailClose = () => {
    setIsEmailOpen(false);
  };

  const handlePhoneClick = () => {
    setIsPhoneOpen(true);
    console.log("Fuck");
  };

  const handlePhoneClose = () => {
    setIsPhoneOpen(false);
  };

  const handleBellClick = () => {
    setIsBellOpen(true);
  };

  const handleBellClose = () => {
    setIsBellOpen(false);
  };

  return (
    <div className="bg-white">
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-blue-800">Web dev?</span>
                <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
                <a
                  href="https://ethanbdev.com"
                  target="blank"
                  className="flex items-center gap-x-1"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  Check the dev out
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="-mr-2 size-5 text-gray-400"
                  />
                </a>
              </div>
            </div>
            <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              This IS<span className="italic">REAL</span>
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              This is the <span className="text-xs">un</span> offical website of
              Talon James Toye ( the Toye machine ( TTM ) ).
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="https://www.instagram.com/talon_toye_/"
                rel="noreferrer"
                className="rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 ease-in-out"
              >
                Talk to TTM
              </a>
              <a
                href="https://www.google.com/search?q=really+nice%2C+just+generally+good+looking+hot+dog.+good+shape+and+size.+good+meat+to+bun+ratio.&sca_esv=b083010cef7ef4d4&udm=2&biw=1854&bih=927&sxsrf=ADLYWIJXd35eBVweB03UfFv-JGkmmmpIhg%3A1737001787311&ei=O4uIZ5HZEv_v0PEPw7iWmAQ&ved=0ahUKEwjR4ob0s_mKAxX_NzQIHUOcBUMQ4dUDCBE&uact=5&oq=really+nice%2C+just+generally+good+looking+hot+dog.+good+shape+and+size.+good+meat+to+bun+ratio.&gs_lp=EgNpbWciXnJlYWxseSBuaWNlLCBqdXN0IGdlbmVyYWxseSBnb29kIGxvb2tpbmcgaG90IGRvZy4gZ29vZCBzaGFwZSBhbmQgc2l6ZS4gZ29vZCBtZWF0IHRvIGJ1biByYXRpby5I-lxQ9ghYsVpwBngAkAEBmAFmoAGQFaoBBDQzLjG4AQPIAQD4AQGYAgCgAgCYAwCIBgGSBwCgB7wP&sclient=img"
                className="text-sm/6 font-semibold text-gray-900"
                target="_blank"
                rel="noreferrer"
              >
                Learn about TTM <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
            <svg
              role="img"
              viewBox="0 0 366 729"
              className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
            >
              <title>App screenshot</title>
              <defs>
                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                  <rect rx={36} width={316} height={684} />
                </clipPath>
              </defs>
              <path
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                fill="#4B5563"
              />
              <path
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                fill="#343E4E"
              />
              <foreignObject
                width={316}
                height={684}
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                transform="translate(24 24)"
              >
                <div
                  role="list"
                  className="h-full w-full flex flex-col bg-white px-4"
                >
                  <div className="relative p-1 flex justify-between">
                    <Image
                      alt="Talon James Toye staring seductively into the camera"
                      src={"indeedLogo.png"}
                      className="object-contain size-24 shrink-0"
                      width={50}
                      height={12}
                    />
                    <IoIosNotifications
                      className="text-blue-800 text-3xl my-auto bell cursor-pointer"
                      onClick={handleBellClick}
                    />
                  </div>
                  {people.map((person) => (
                    <div
                      key={person.email}
                      className="flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-sm border my-auto py-auto h-[60%]"
                    >
                      <div className="flex flex-1 flex-col p-8">
                        <Image
                          alt="Talon James Toye staring seductively into the camera"
                          src={person.imageUrl}
                          className="mx-auto size-32 shrink-0 rounded-full"
                          width={32}
                          height={32}
                        />
                        <h3 className="mt-6 text-sm font-medium text-gray-900">
                          {person.name}
                        </h3>
                        <dl className="mt-1 flex grow flex-col justify-between">
                          <dt className="sr-only">Title</dt>
                          <dd className="text-sm text-gray-500 italic font-bold">
                            {person.title}
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="mt-3">
                            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 ">
                              {person.role}
                            </span>
                          </dd>
                        </dl>
                      </div>
                      <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                          <div className="flex w-0 flex-1">
                            <div
                              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 cursor-pointer"
                              onClick={handleEmailClick}
                            >
                              <EnvelopeIcon
                                aria-hidden="true"
                                className="size-5 text-gray-400 "
                              />
                              Email
                            </div>
                          </div>
                          <div className="-ml-px flex w-0 flex-1">
                            <div
                              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 cursor-pointer"
                              onClick={handlePhoneClick}
                            >
                              <PhoneIcon
                                aria-hidden="true"
                                className="size-5 text-gray-400"
                              />
                              Call
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className={`fixed bg-black inset-0 z-50 transition-all duration-500 ease-in-out ${
                    isEmailOpen
                      ? "translate-y-0 opacity-90"
                      : "translate-y-full opacity-20"
                  }`}
                >
                  <div className="p-5 max-w-5xl mx-auto">
                    <IoMdClose
                      onClick={handleEmailClose}
                      className="text-3xl ml-auto mt-5 cursor-pointer"
                    />
                    <div className="relative bg-blue-200 h-[500px] w-full mt-14">
                      <Image
                        alt="A lovely emotion of a yellow man with a beard and top hat"
                        src={"/jewishMan.webp"}
                        fill
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`fixed bg-black inset-0 z-50 transition-all duration-500 ease-in-out ${
                    isPhoneOpen
                      ? "translate-y-0 opacity-90"
                      : "translate-y-full opacity-20"
                  }`}
                >
                  <div className="p-5 max-w-5xl mx-auto">
                    <IoMdClose
                      onClick={handlePhoneClose}
                      className="text-3xl ml-auto mt-5 cursor-pointer"
                    />
                    <div className="relative bg-blue-200 h-[500px] w-full mt-14">
                      <Image
                        alt="A lovely emotion of a yellow man with a beard and top hat"
                        src={"/cheeseWig.webp"}
                        fill
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`fixed inset-0 z-50 transition-all duration-700 ease-in-out ${
                    isBellOpen ? "translate-y-0" : "-translate-y-full"
                  }`}
                >
                  <div className="flex items-center gap-x-6 bg-blue-800 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                    <p className="text-sm/6 text-white">
                      <strong className="font-semibold">
                        Hear ye, hear ye
                      </strong>
                      <svg
                        viewBox="0 0 2 2"
                        aria-hidden="true"
                        className="mx-2 inline size-0.5 fill-current"
                      >
                        <circle r={1} cx={1} cy={1} />
                      </svg>
                      <br /> I will be working the corner on Leon ave at 10am
                      PST.
                      <a
                        href="https://www.google.com/search?sca_esv=b083010cef7ef4d4&sxsrf=ADLYWIL6adrCSqJDLa6ChaiD5UGDBIgVaA:1737001620827&q=lynrick+rd+kelowna&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkW1DRbm01j6DCVS0r1sTxn7h_rt6mVhwDmwtd3hPZjM8yExIiDaiXmTUfySTHDiZj3V9mpz1bEofJZpCcuvq0qkaFEQHlcUV3IJl6mBPvCW0wVaREbeK939AyaGsn59rsLKNARtA5gItOKDJSE3SvsVFiBgnZdBcSgak6KqATi2g7PR4LLLAgRPhg-Gu_Cl4T-PpU4CQ&sa=X&ved=2ahUKEwibs9Wks_mKAxVzGDQIHTc6AKoQtKgLegQIEhAB&biw=1854&bih=927&dpr=1#vhid=lW_qwMxesisA2M&vssid=mosaic"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 ml-2"
                      >
                        Register now <span aria-hidden="true">&rarr;</span>
                      </a>
                    </p>
                    <div className="flex flex-1 justify-end">
                      <button
                        type="button"
                        className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
                      >
                        <span className="sr-only">Dismiss</span>
                        <IoMdClose
                          onClick={handleBellClose}
                          className="text-3xl ml-auto cursor-pointer"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
