import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'

import Head from 'next/head'
import Header from "../components/header";

export default function Homepage() {

  return (
    <>
      <Layout >
        <Head>
          <title>MATEO - Demo Vereinbaren</title>
        </Head>
        <Container>
          <Header />
          <div className="flex flex-row">
            <div>
            <div className="text-6xl font-bold">
              Jetzt persönliche Produktdemo vereinbaren
            </div>
            <div className="text-3xl">
              Egal ob Immobilienbesitzer, Hausverwaltung oder Verwalten. Jedes Immobilien-unternehmen erhält verschiedenste Arten von Anfragen. Wir gehen gerne auf Ihre Bedürfnisse und Fragen ein!
            </div>
            </div>
            <div className="text-6xl">Kontakt</div>

          </div>
        </Container>
      </Layout>
    </>
  )
}
