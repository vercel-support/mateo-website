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
                    <div className="sm:flex sm:justify-center lg:justify-start">
                        <div className="flex-1 flex items-center">
                            <div
                            className="order-1 ml-3 font-medium text-white"><span>This website uses <strong className="text-white font-semibold mr-1">cookies</strong>to enhance your experience. <a href={`https://instagram.com/mateo.estate`} className="hover:underline hover:pointer mb-1 text-white">Learn more</a>
                            </span>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center">
                        <div className="mt-3 sm:mt-0 mr-1 sm:ml-3 flex-grow rounded-md" onClick={toggle}>
                            <a href="https://cdn.forms-content.sg-form.com/c6532c96-e2b1-11ea-8f23-fedb32b3ac17" className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-900 bg-white hover:text-gray-800 focus:outline-none focus:underline">
                                Accept
                            </a>
                        </div>
                        <div className="mt-3 ml-1 sm:mt-0 sm:ml-3 flex-grow rounded-md" onClick={toggle}>
                            <a href="https://cdn.forms-content.sg-form.com/c6532c96-e2b1-11ea-8f23-fedb32b3ac17" className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-900 bg-gray-600 hover:text-gray-800 focus:outline-none focus:underline">
                                Decline
                            </a>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
