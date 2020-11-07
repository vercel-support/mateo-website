import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
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

        <div style={{display: showMe?"block":"none"}} className="transition transform fixed z-100 bottom-0 inset-x-0 pb-2 sm:pb-5 opacity-100 scale-100 translate-y-0 ease-out duration-500">
            <div className="max-w-screen-xl mx-auto px-2 sm:px-4">
                <div className="p-2 rounded-lg bg-black shadow-lg sm:p-3">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="w-0 flex-1 flex items-center">
                            <div
                            className="ml-3 font-medium text-white truncate"><span>This website uses <strong className="text-white font-semibold mr-1">cookies</strong>to enhance your experience. <a href={`https://instagram.com/mateo.estate`} className="hover:underline hover:pointer mb-1 text-white">Learn more</a>
                            </span>
                        </div></div>
                        <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                            <div className="rounded-md shadow-sm"><button
                                onClick={toggle}
                                className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-900 bg-white hover:text-gray-800 focus:outline-none focus:underline">Accept</button></div>
                        </div>
                        <div className="order-3 mt-2 ml-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                            <div className="rounded-md shadow-sm"><button
                                onClick={toggle}
                                className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-900 bg-gray-600 hover:text-gray-800 focus:outline-none focus:underline">Decline</button></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
