import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Header from "../components/Header";
import Layout from "../components/layout";
import { getAllPagesWithSlug, getPage } from "../lib/api";
import SliceZone from "../components/SliceZone";

export default function Post({ preview, page }) {
  const router = useRouter();
  console.log(page);
  console.log(router.isFallback);

  return (
    <Layout preview={preview}>
      <Header />
      {router.isFallback ? (
        <div className="container mx-auto px-5">Loading...</div>
      ) : (
        <>
          <Head>
            <title>{page.title[0].text}</title>
          </Head>
          <SliceZone sliceZone={page.body}></SliceZone>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPage(params.page, previewData);
  console.log("Data" + data);
  return {
    props: {
      preview,
      page: data?.page ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPages = await getAllPagesWithSlug();
  return {
    paths: allPages?.map(({ node }) => `/${node._meta.uid}`) || [],
    fallback: true,
  };
}
