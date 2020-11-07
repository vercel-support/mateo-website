import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { NAME } from '../lib/constants'
import Header from "../components/header";

export default function Index({ preview, allPosts }) {

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{NAME} - The Better Way To Rent</title>
        </Head>
        <Container>
          <Header />
          <Intro />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForHome(previewData)
  return {
    props: { preview, allPosts },
  }
}
