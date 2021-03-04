import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'

import Head from 'next/head'
import Header from "../components/header";
import {hotjar} from "react-hotjar";

export default function Homepage() {
  hotjar.initialize(2279371, 6);
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
