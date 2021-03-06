import Layout from "../components/layout";

import Head from "next/head";
import Header from "../components/header";

import { getAllPostsForHome, getHome } from "../lib/api";
import MoreStories from "../components/more-stories";
import SliceZone from "../components/SliceZone";

export default function Homepage({ preview, allPosts, home }) {
  const heroPost = allPosts[0].node;
  const morePosts = allPosts.slice(1);
  console.log(home[0].node);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>MATEO - The Better Way To Rent</title>
        </Head>
        <Header />

        <section className="container mx-auto px-5 flex flex-col items-center mt-32 mb-32">
          <div className="pr-20">
            <h1 className="text-8xl text-gray-900 font-bold tracking-tight leading-tight ">
              Der Autopilot für Mieterinteraktion
            </h1>
            <h4 className="text-3xl mt-3 text-gray-900 ">
              MATEO ist der Autopilot für erstklassige und persönliche
              Mieterinteraktion. Wir helfen Vermietern dabei, Mieter und
              Mitarbeiter zu begeistern.
            </h4>
            <div className="">
              <div className="flex flex-row mt-10 rounded-md">
                <button className="  uppercase font-bold bg-black flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white transition duration-150 ease-in-out md:py-4 md:text-lg md:py-4 md:text-lg md:px-5">
                  Kostenlos Testen
                </button>
                <button className="ml-5 uppercase font-bold  flex items-center justify-center px-8 py-3 border border-solid border-black text-base leading-6 font-medium rounded-md text-black transition duration-150 ease-in-out md:py-4 md:text-lg md:py-4 md:text-lg md:px-5">
                  Funktionen
                </button>
                <button className="ml-5 uppercase font-bold  flex items-center justify-center px-8 py-3 border border-solid border-black text-base leading-6 font-medium rounded-md text-black transition duration-150 ease-in-out md:py-4 md:text-lg md:py-4 md:text-lg md:px-5">
                  Demo
                </button>
              </div>
            </div>
          </div>
          <div className="mt-32">
            <div className="">
              <img className="" src="./images/mateoflows1.png" alt="" />
            </div>
          </div>
        </section>

        <section className="container mx-auto flex-col items-center mt-32 mb-32">
          <h1 className="text-7xl font-bold tracking-tighter leading-tight text-center">
            Mit MATEO werden Anfragen zu automatisierten Flows
          </h1>
          <h4 className="text-2xl">
            Eine kompromisslos gute Immobiliensoftware. Speziell für
            produktivere Mitarbeiter & glückliche Mieter.
          </h4>
        </section>

        <section className="container mx-auto flex-col items-center mt-32 mb-32">
          <div
            className="rounded-lg p-32"
            style={{
              backgroundImage: "url(" + "./images/risingsun.jpg" + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-row items-center">
              <div className="w-1/3">
                <h1 className="text-5xl font-bold tracking-tighter leading-tight text-white">
                  Jetzt kostenlos starten und automatisieren
                </h1>
              </div>
              <div className="mt-5">
                <div className="flex flex-row">
                  <div>
                    <label className="block text-white text-lg font-bold uppercase">
                      Vorname
                    </label>
                    <input className="p-3 rounded-md w-64 mt-1"></input>
                  </div>
                  <div className="ml-5">
                    <label className="block text-white text-lg font-bold uppercase">
                      Nachname
                    </label>
                    <input className="p-3 rounded-md w-64 mt-1"></input>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mt-5 w-80">
                    <label className="block text-white text-lg font-bold uppercase">
                      Email
                    </label>
                    <input className="p-3 rounded-md w-64 mt-1"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto flex-col items-center mt-32 mb-32">
          <div className="flex flex-col sm:flex-row items-center">
            <div>
              <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight">
                Mieteranfragen werden mit MATEO zum Kinderspiel
              </h1>
              <h4 className="mt-3 text-base sm:mt-8 sm:text-lg sm:mx-auto md:mt-3 md:text-3xl lg:mx-0">
                Mit einem intelligenten Chatbot und Workflows macht MATEO das
                Leben für alle Immobilien-unternehmen einfacher, die mit
                Mieteranfragen konfrontiert sind und Wohnungen verwalten.
              </h4>
            </div>
            <div className="pt-10 sm:pt-0 sm:pl-16 text-base sm:text-lg sm:mx-auto md:text-xl lg:mx-0">
              <img
                className=" w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="./images/mateoflow1.png"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto flex-col items-center mt-32 mb-32">
          <div className="flex flex-col-reverse sm:flex-row items-center">
            <div className="pt-10 sm:pt-0 sm:pr-16 text-base sm:text-lg sm:mx-auto md:text-xl lg:mx-0">
              <img
                className=" w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="./images/mateoflat1.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight">
                Alle Wohnungen und Mieter auf einen Blick
              </h1>
              <h4 className="mt-3 text-base sm:mt-8 sm:text-lg sm:mx-auto md:mt-3 md:text-3xl lg:mx-0">
                MATEO liefert eine 360 Grad Sicht auf alle Wohnungen, Mieter und
                dazugehörige Dokumente. Alle Informationen 100 % Digital und
                mobil von überall aus abrufbar
              </h4>
            </div>
          </div>
        </section>

        <section className="container mx-auto flex-col items-center mt-32 mb-32">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="">
              <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight">
                Glückliche Mieter mit MATEO Home
              </h1>
              <h4 className="mt-3 text-base sm:mt-8 sm:text-lg sm:mx-auto md:mt-3 md:text-3xl lg:mx-0">
                Mit MATEO Home haben Mieter umfassende Self Service
                Möglichkeiten und eine transparente Übersicht zu allen Anfragen.
                Zusätzlich gibt es auf dem MATEO Marketplace weitere attraktive
                und nützliche Services.
              </h4>
            </div>
            <div className=" pt-10 sm:pt-0 sm:pl-16 text-base sm:text-lg sm:mx-auto md:text-xl lg:mx-0">
              <img
                className=" w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="./images/mateohome1.png"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto flex-col items-center mt-32 mb-32">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
            Entdecken Sie, wie Sie Ihre Mitarbeiter & Mieter begeistern!
          </h1>
          <form>
            <div className="mt-8 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 rounded-md flex-grow md:max-w-md">
                <input
                  href="#"
                  x-model="email"
                  type="email"
                  required=""
                  placeholder="Enter your email"
                  className="w-full flex items-center justify-center px-8 py-3 text-base leading-6 font-medium rounded-md appearance-none border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:border-green-400 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:py-4 md:text-lg md:px-5"
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 rounded-md">
                <button
                  type="submit"
                  className="w-full uppercase font-bold flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white transition duration-150 ease-in-out md:py-4 md:text-lg md:py-4 md:text-lg md:px-10"
                  style={{
                    backgroundImage:
                      "url(" + "./images/mateobackground.jpg" + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  Kostenlos Testen
                </button>
              </div>
            </div>
          </form>
        </section>

        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <SliceZone sliceZone={home[0].node.body}></SliceZone>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForHome(previewData);
  const home = await getHome(previewData);
  console.log(allPosts);
  return {
    props: { preview, allPosts, home },
  };
}
