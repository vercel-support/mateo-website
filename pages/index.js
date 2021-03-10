import Layout from "../components/layout";

import Head from "next/head";
import Header from "../components/Header";

import { getHome } from "../lib/api";
import MoreStories from "../components/more-stories";
import SliceZone from "../components/SliceZone";
import PostPreview from "../components/post-preview";

export default function Homepage({ preview, home }) {
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
  const home = await getHome(previewData);

  return {
    props: { preview, home },
  };
}
