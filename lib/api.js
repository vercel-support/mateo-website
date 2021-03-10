import Prismic from "prismic-javascript";

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_API_TOKEN;
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
});

async function fetchAPI(query, { previewData, variables } = {}) {
  const prismicAPI = await PrismicClient.getApi();
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        "Prismic-Ref": previewData?.ref || prismicAPI.masterRef.ref,
        "Content-Type": "application/json",
        "Accept-Language": API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  );

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error("Failed to fetch API");
  }

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      allPosts {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `);
  return data?.allPosts?.edges;
}

export async function getAllPagesWithSlug() {
  const data = await fetchAPI(`
    {
  allPages{
  edges{
    node{
      _meta{
        uid
      }
    }
  }
}
}
  `);
  return data?.allPosts?.edges;
}

export async function getHome(previewData) {
  console.log("Get Home2");
  const data = await fetchAPI(
    `
    query {
  allHomepages {
    edges {
      node {
        title
        body {
          __typename
          ...on HomepageBodyMain_hero {
            type
            label
            primary{
              sectionTitle
              sectionDescription
              sectionImage
            }
          }
          ...on HomepageBodyText___image {
            type
            label
            primary{
              section_title
              section_description
              section_image
            }
          }
          ...on HomepageBodySignup {
            type
            label
            primary{
              sectionTitle
            }
          }
          
          ...on HomepageBodyImage___text {
            type
            label
            primary{
              section_title
              section_description
              section_image
            }
          }
          
           ...on HomepageBodyText___image_center {
            type
            label
            primary{
              section_title
              section_description
              section_image
            }
          }
      
        }
        _meta {
          uid
        }
      }
    }
  }
}
  `,
    { previewData }
  );

  return data.allHomepages.edges;
}

export async function getAllPostsForHome(previewData) {
  const data = await fetchAPI(
    `
    query {
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            date
            title
            content
            coverimage
            excerpt
            author {
              ...on Author {
                name
                picture
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  `,
    { previewData }
  );

  return data.allPosts.edges;
}

export async function getPage(slug, previewData) {
  console.log("Get Page");
  console.log("API Slug" + slug);
  console.log("API Preview" + previewData);
  const data = await fetchAPI(
    `
  query PageBySlug($slug: String!, $lang: String!) {
    page(uid: $slug, lang: $lang) {
      title
      body {
          __typename
          ...on PageBodyPlain_hero{
            type
            label
            primary{
              section_title
            }
          }
          ...on PageBodyText{
            type
            label
            primary{
              section_description
            }
          }
        }
      _meta {
        uid
      }
    }

  }
  `,
    {
      previewData,
      variables: {
        slug,
        lang: API_LOCALE,
      },
    }
  );
  return data;
}

export async function getPostAndMorePosts(slug, previewData) {
  const data = await fetchAPI(
    `
  query PostBySlug($slug: String!, $lang: String!) {
    post(uid: $slug, lang: $lang) {
      title
      content
      date
      coverimage
      author {
        ...on Author {
          name
          picture
        }
      }
      _meta {
        uid
      }
    }
   morePosts: allPosts(sortBy: date_DESC, first: 3) {
      edges {
        node {
          title
          content
          date
          coverimage
          excerpt
          author {
            ...on Author {
              name
              picture
            }
          }
          _meta {
            uid
          }
        }
      }
    }
  }
  `,
    {
      previewData,
      variables: {
        slug,
        lang: API_LOCALE,
      },
    }
  );

  data.morePosts = data.morePosts.edges
    .filter(({ node }) => node._meta.uid !== slug)
    .slice(0, 2);

  return data;
}
