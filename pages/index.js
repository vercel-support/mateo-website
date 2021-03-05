import Container from "../components/container";
import Intro from "../components/intro";
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
        <Container>
          <Header />
          <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          <SliceZone sliceZone={home[0].node.body}></SliceZone>
        </Container>
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
