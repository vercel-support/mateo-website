import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import { RichText } from "prismic-reactjs";
import Date from "../../components/date";
import Avatar from "../../components/avatar";
import CoverImage from "../../components/cover-image";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  console.log(post);
  if (!router.isFallback && !post?._meta?.uid) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Header />
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title[0].text} | TTT</title>
              <meta property="og:image" content={post.coverimage.url} />
            </Head>
            <>
              <div>{post.title[0].text}</div>
              <div className="hidden md:block md:mb-12">
                {post.author && (
                  <Avatar
                    name={post.author.name}
                    picture={post.author.picture}
                  />
                )}
              </div>
              <div className="mb-8 md:mb-16 sm:mx-0">
                <CoverImage
                  title={RichText.asText(post.title)}
                  url={post.coverimage.url}
                />
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="block md:hidden mb-6">
                  {post.author && (
                    <Avatar
                      name={post.author.name}
                      picture={post.author.picture}
                    />
                  )}
                </div>
                <div className="mb-6 text-lg">
                  <Date dateString={post.date} />
                </div>
              </div>
            </>
            <div className="max-w-2xl mx-auto">
              <RichText render={post.content} />
            </div>
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.post, previewData);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? [],
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  console.log(allPosts[0].node._meta.uid);
  return {
    paths: allPosts?.map(({ node }) => `/posts/${node._meta.uid}`) || [],
    fallback: true,
  };
}
