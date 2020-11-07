import { NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
      <>
    <section className="flex-col items-center md:justify-between mt-16 mb-16">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
          Let's put your flats on autopilot.
      </h1>
        <h4 className="mt-8 text-base sm:mt-8 sm:text-lg sm:mx-auto md:mt-8 md:text-3xl lg:mx-0">
            We free up landlords from manual operational tasks by putting their portfolio on autopilot, while creating a geniue connection between tenants and landlords.
        </h4>
        <div className="mt-8 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 sm:mt-0 rounded-md flex-grow md:max-w-md">
                <input href="#" x-model="email" type="email" required="" placeholder="Enter your email" className="w-full flex items-center justify-center px-8 py-3 text-base leading-6 font-medium rounded-md appearance-none border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:border-green-400 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:py-4 md:text-lg md:px-5"/>
            </div>

            <div className="mt-3 sm:mt-0 sm:ml-3 rounded-md">
                <a href="https://cdn.forms-content.sg-form.com/c6532c96-e2b1-11ea-8f23-fedb32b3ac17" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-black hover:bg-green-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:py-4 md:text-lg md:px-10">
                    Try it first
                </a>
            </div>

            <div className="mt-3  sm:mt-0 sm:ml-3">
                <a href="https://calendly.com/hejsfj/30min" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-800 bg-gray-300 hover:text-black-600 hover:bg-green-400 hover:text-white focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Live demo
                </a>
            </div>
        </div>
        <div className="mt-32 mb-32 text-base sm:mt-9 sm:text-lg sm:mx-auto md:mt-9 md:text-xl lg:mx-0">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                 src="./images/mateo-preview.png"
                 alt=""/>
        </div>

    </section>
          </>
  )
}
