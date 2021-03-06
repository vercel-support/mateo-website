import HeroPost from "../components/hero-post";

import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import PostPreview from "../components/post-preview";
export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0].node;
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with</title>
        </Head>

        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverimage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost._meta.uid}
            excerpt={heroPost.excerpt}
          />
        )}

        <section>
          <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            More Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
            {morePosts.map(({ node }) => (
              <PostPreview
                key={node._meta.uid}
                title={node.title}
                coverImage={node.coverimage}
                date={node.date}
                author={node.author}
                slug={node._meta.uid}
                excerpt={node.excerpt}
              />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForHome(previewData);
  return {
    props: { preview, allPosts },
  };
}
