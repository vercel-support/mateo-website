import Link from 'next/link'
import { Transition } from '@headlessui/react'
import { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
  return (
      <>
      <div className="flex flex-row items-center mb-20 mt-8">
    <h2 className="text-2xl md:text-4xl font-bold">
      <Link href="/">
        <a className="hover:underline">MATEO</a>
      </Link>
    </h2>
          <div className="flex-grow"></div>
          <div className="hidden md:flex flex-row items-center">

              <h2 className="text-xl font-bold mr-10">
                  <Link href="/ueberuns">
                      <a className="hover:underline">Über Uns</a>
                  </Link>
              </h2>
              <div>
                  <div className="text-lg font-bold p-3 text-white rounded-md" style={{
                      backgroundImage: 'url(' + './images/mateobackground.jpg' + ')',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                  }}>
                  Kostenlos Testen
                  </div>
              </div>
          </div>


          <div className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <img src="./images/menu.svg" width="20px;" height="20px;"/>
          </div>


          <Transition
              show={isOpen}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
          >
          <div className="z-50 pl-5 fixed inset-0 mt-8 pr-5 bg-white w-full">
              <div className="flex flex-row items-center">
              <div>
                  <h2 className="text-2xl md:text-4xl font-bold">
                  <Link href="/">
                      <a className="hover:underline">MATEO</a>
                  </Link>
              </h2>
              </div>
                  <div className="flex-grow"></div>
                  <div className="" onClick={() => setIsOpen(!isOpen)}>
                  <img src="./images/cross.svg" width="20px;" height="20px;"/>
                  </div>
              </div>
              <h2 className="text-xl font-bold mt-5 mr-10">
                  <Link href="/ueberuns">
                      <a className="hover:underline">Über Uns</a>
                  </Link>
              </h2>
          </div>
          </Transition>
      </div>

    </>
  )
}
