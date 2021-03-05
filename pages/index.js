import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";

import Head from "next/head";
import Header from "../components/header";

import { getAllPostsForHome } from "../lib/api";
import MoreStories from "../components/more-stories";

export default function Homepage({ preview, allPosts }) {
  const heroPost = allPosts[0].node;
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>MATEO - The Better Way To Rent</title>
        </Head>
        <Container>
          <Header />
          <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForHome(previewData);
  console.log(allPosts);
  return {
    props: { preview, allPosts },
  };
}
