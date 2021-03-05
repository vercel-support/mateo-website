import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'

import Head from 'next/head'
import Header from "../components/header";
import {useState} from 'react'


export default function Homepage() {

    const [toggle, setToggle] = useState(false);


    const onClick = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <Layout>
                <Head>
                    <title>MATEO - Funktionen</title>
                </Head>
                <Container>
                    <Header/>
                    <section className="flex-col items-center md:justify-between mt-16 mb-32 sm:mt-32 sm:mb-32">
                        <div>
                            <div className="font-extrabold text-3xl sm:text-6xl md:text-6xl items-center lg:text-7xl text-center mx-10
                        bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
            bg-repeat
            bg-clip-text
            text-transparent
            uppercase
            antialiased mb-5">
                                Der Autopilot für Ihre persönliche Mieter Interaktion.
                            </div>
                        </div>

                        <div className="mt-20 flex flex-col items-center justify-items-center">
                            <label htmlFor="toggle" className=" uppercase font-extrabold text-3xl text-center">Starte Deinen Autopilot</label>
                            <div
                                className="mt-5 relative inline-block w-48 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="toggle" onClick={onClick}
                                       className="focus:outline-none  toggle-checkbox absolute block w-16 h-16 rounded-full border-green-400 right-0 bg-white border-4 appearance-none cursor-pointer"/>
                                <label htmlFor="toggle"
                                       className="toggle-label block overflow-hidden h-16 rounded-full bg-green-300 cursor-pointer"></label>
                            </div>
                        </div>


                        {toggle ?
                        <form>
                            <div className="mt-8 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="mt-3 sm:mt-0 rounded-md flex-grow md:max-w-md">
                                    <input href="#" x-model="email" type="email" required=""
                                           placeholder="Enter your email"
                                           className="w-full flex items-center justify-center px-8 py-3 text-base leading-6 font-medium rounded-md appearance-none border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:border-green-400 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:py-4 md:text-lg md:px-5"/>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3 rounded-md">
                                    <button type="submit"
                                            className="w-full  uppercase font-bold  flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white transition duration-150 ease-in-out md:py-4 md:text-lg md:py-4 md:text-lg md:px-10"
                                            style={{
                                                backgroundImage: 'url(' + './images/mateobackground.jpg' + ')',
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                            }}>
                                        Kostenlos Testen
                                    </button>
                                </div>
                            </div>
                        </form> : '' }

                        <div className="mt-16 mb-16 text-base sm:mt-9 sm:text-lg sm:mx-auto md:mt-9 md:text-xl lg:mx-0">
                            <img className=" w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                                 src="./images/mateoflows1.png"
                                 alt=""/>
                        </div>
                    </section>
                    <section
                        className="flex-col items-center md:justify-between text-left md:text-center mt-32 mb-32 sm:mt-64 sm:mb-64">
                        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                            Die digitale Lösung für Vermieter und Hausverwaltungen

                        </h1>
                        <h4 className="mt-8 text-base sm:mt-3 sm:text-2xl sm:mx-auto md:mt-3 md:text-5xl lg:mx-0">
                            Eine kompromisslos gute Immobiliensoftware.
                            Speziell für produktivere Mitarbeiter & glückliche Mieter.

                        </h4>
                    </section>

                    <section className="flex-col items-center md:justify-between mt-32 mb-32 sm:mt-64 sm:mb-64">
                        <div className="flex flex-col sm:flex-row items-center">
                            <div>
                                <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight">
                                    Mieteranfragen werden mit MATEO zum Kinderspiel
                                </h1>
                                <h4 className="mt-3 text-base sm:mt-8 sm:text-lg sm:mx-auto md:mt-3 md:text-3xl lg:mx-0">
                                    Mit einem intelligenten Chatbot und Workflows macht MATEO das Leben für alle
                                    Immobilien-unternehmen einfacher, die mit Mieteranfragen konfrontiert sind und
                                    Wohnungen verwalten.
                                </h4>
                            </div>
                            <div className="pt-10 sm:pt-0 sm:pl-16 text-base sm:text-lg sm:mx-auto md:text-xl lg:mx-0">
                                <img className=" w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                                     src="./images/mateoflow1.png"
                                     alt=""/>
                            </div>
                        </div>
                    </section>

                    <section className="flex-col items-center md:justify-between mt-32 mb-32 sm:mt-64 sm:mb-64">
                        <div className="flex flex-col-reverse sm:flex-row items-center">
                            <div className="pt-10 sm:pt-0 sm:pr-16 text-base sm:text-lg sm:mx-auto md:text-xl lg:mx-0">
                                <img className=" w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                                     src="./images/mateoflat1.png"
                                     alt=""/>
                            </div>
                            <div>
                                <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight">
                                    Alle Wohnungen und Mieter auf einen Blick
                                </h1>
                                <h4 className="mt-3 text-base sm:mt-8 sm:text-lg sm:mx-auto md:mt-3 md:text-3xl lg:mx-0">
                                    MATEO liefert eine 360 Grad Sicht auf alle Wohnungen, Mieter und dazugehörige
                                    Dokumente. Alle Informationen 100 % Digital und mobil von überall aus abrufbar
                                </h4>
                            </div>
                        </div>
                    </section>
                    <section className="flex-col items-center md:justify-between mt-32 mb-32 sm:mt-64 sm:mb-64">
                        <div className="flex flex-col sm:flex-row items-center">
                            <div className="">
                                <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight">
                                    Glückliche Mieter mit MATEO Home
                                </h1>
                                <h4 className="mt-3 text-base sm:mt-8 sm:text-lg sm:mx-auto md:mt-3 md:text-3xl lg:mx-0">
                                    Mit MATEO Home haben Mieter umfassende Self Service Möglichkeiten und eine
                                    transparente Übersicht zu allen Anfragen. Zusätzlich gibt es auf dem MATEO
                                    Marketplace weitere attraktive und nützliche Services.
                                </h4>
                            </div>
                            <div className=" pt-10 sm:pt-0 sm:pl-16 text-base sm:text-lg sm:mx-auto md:text-xl lg:mx-0">
                                <img className=" w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                                     src="./images/mateohome1.png"
                                     alt=""/>
                            </div>
                        </div>
                    </section>

                    <section className="flex-col items-center md:justify-between mt-16 mb-64">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
                            Entdecken Sie, wie Sie Ihre Mitarbeiter & Mieter begeistern!
                        </h1>
                        <form>
                            <div className="mt-8 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="mt-3 sm:mt-0 rounded-md flex-grow md:max-w-md">
                                    <input href="#" x-model="email" type="email" required=""
                                           placeholder="Enter your email"
                                           className="w-full flex items-center justify-center px-8 py-3 text-base leading-6 font-medium rounded-md appearance-none border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:border-green-400 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:py-4 md:text-lg md:px-5"/>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3 rounded-md">
                                    <button type="submit"
                                            className="w-full uppercase font-bold flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white transition duration-150 ease-in-out md:py-4 md:text-lg md:py-4 md:text-lg md:px-10"
                                            style={{
                                                backgroundImage: 'url(' + './images/mateobackground.jpg' + ')',
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                            }}>
                                        Kostenlos Testen
                                    </button>
                                </div>
                            </div>
                        </form>


                    </section>
                </Container>
            </Layout>
        </>
    )
}
