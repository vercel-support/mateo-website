import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Header from "../components/Header";
import Layout from "../components/layout";
import { getAllPagesWithSlug, getPage } from "../lib/api";
import { RichText } from "prismic-reactjs";
import SliceZone from "../components/SliceZone";

export default function Post({ page, preview }) {
  const router = useRouter();
  console.log(page);
  if (!router.isFallback && !page?._meta?.uid) {
    return <ErrorPage statusCode={404} />;
  }
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
  return {
    props: {
      preview,
      page: data?.page ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPages = await getAllPagesWithSlug();
  console.log(allPages);
  return {
    paths: allPages?.map(({ node }) => `/${node._meta.uid}`) || [],
    fallback: true,
  };
}
