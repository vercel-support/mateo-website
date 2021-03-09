import React from "react";
import { RichText } from "prismic-reactjs";
import PostPreview from "../post-preview";

const BlogPostPreviews = ({ slice }) => {
  return (
    <section className="container mx-auto px-5 flex-col items-center mt-32 mb-32">
      {morePosts.length > 0 && (
        <section>
          <h2 className="text-6xl font-bold tracking-tighter leading-tight">
            Aus dem Blog
          </h2>
          <div className="flex flex-row">
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
      )}
    </section>
  );
};

export default BlogPostPreviews;
