import Container from './container'
import cn from 'classnames'

import {useState} from "react";

export default function Alert({ preview }) {
    const [showMe, setShowMe] = useState(true);
    function toggle(){
        setShowMe(!showMe);
    }
  return (
    <div
      className={cn({
        'bg-accent-7 border-accent-7 text-white': preview,
      })}
    >

     {/*   <div style={{display: showMe?"block":"none"}} className="transition transform fixed z-5 opacity-75 ease-out duration-500">

                <div className="bg-black w-screen h-screen">
                </div>

        </div>*/}

      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
            </>
          )}
        </div>
      </Container>



       {/* <div style={{display: showMe?"block":"none"}} className="transition transform fixed z-100 bottom-0 right-0 pb-2 sm:pb-5 opacity-100 scale-100 translate-y-0 ease-out duration-500">
            <div className="mx-auto max-w-md px-4 sm:px-4">
                <div className="p-3 rounded-lg bg-white shadow-lg">
                    <div className="flex flex-col sm:flex justify-start ml-1">

                            <div className="font-medium text-black">
                                We use cookies 🍪 and pixels to provide you with the best browsing experience. The data collected by cookies and pixels is used to optimise the website for our visitors and deliver targeted information to MATEO users and prospective MATEO customers. This data is used as part of our EU operations.
                            </div>
                            <div className="font-medium text-black mt-2">
                                <a href={`https://heyanna.co/privacy`} className="underline hover:pointer text-black">Learn more</a>
                            </div>

                    </div>
                    <div className="sm:flex sm:justify-center lg:justify-start mt-3">
                        <div className="flex-1 flex items-center">
                        <div className="mt-1 sm:mt-1 mr-1 sm:ml-1 mb-1 flex-grow rounded-md" onClick={toggle}>
                            <div className="cursor-pointer flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-black hover:text-gray-800 focus:outline-none focus:underline">
                                Accept
                            </div>
                        </div>
                        <div className="mt-1 ml-3 sm:mt-1 sm:ml-3 mb-1 flex-grow rounded-md" onClick={toggle}>
                            <div className="cursor-pointer flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium bg-gray-300 rounded-md text-black hover:text-gray-800 focus:outline-none focus:underline">
                                Decline
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>*/}

    </div>
  )
}
