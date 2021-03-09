import Layout from "../components/layout";

import Head from "next/head";
import Header from "../components/header";

import { getAllPostsForHome, getHome } from "../lib/api";
import MoreStories from "../components/more-stories";
import SliceZone from "../components/SliceZone";
import PostPreview from "../components/post-preview";

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
