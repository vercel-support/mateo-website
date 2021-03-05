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
          <title>MATEO - The Better Way To Rent</title>
        </Head>
        <Container>
          <Header />
          <Intro />
        </Container>
      </Layout>
    </>
  )
}
