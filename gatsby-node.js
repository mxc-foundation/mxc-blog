const path = require("path")

/* TODO: make it so that non EN posts can be present without an EN connection */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const today = new Date();
  const yyyymmdd = today.toISOString().slice(0,10);
  const LANGUAGE_SET = ['en', 'ko', 'hans', 'hant' ];
  const ROOT_PATH = ['', 'ko', 'zh-hans', 'zh-hant' ];

  const { data } = await graphql(`
    query {
      allStrapiPosts(filter: { post: { publish: { eq: true } } }) {
        nodes {
          post {
            slug
          }
        }
      }
      categories: allStrapiCategories(
        filter: { posts: { elemMatch: { post: { publish: { eq: true } } } } }
      ) {
        nodes {
          koSlug
          zhtwSlug
          zhchSlug
          slug
        }
      }
      tags: allStrapiTags(
        filter: { posts: { elemMatch: { post: { publish: { eq: true } } } } }
      ) {
        nodes {
          koSlug
          zhtwSlug
          zhchSlug
          slug
        }
      }
      allStrapiZhchPosts(
        filter: {
          post: { publish: { eq: true } }
          enPost: { post: { slug: { glob: "*" } } }
        }
      ) {
        nodes {
          post {
            slug
          }
          enPost {
            post {
              slug
            }
          }
        }
      }
      allStrapiZhtwPosts(
        filter: {
          post: { publish: { eq: true } }
          enPost: { post: { slug: { glob: "*" } } }
        }
      ) {
        nodes {
          post {
            slug
          }
          enPost {
            post {
              slug
            }
          }
        }
      }
      allStrapiKoPosts(
        filter: {
          post: { publish: { eq: true } }
          enPost: { post: { slug: { glob: "*" } } }
        }
      ) {
        nodes {
          post {
            slug
          }
          enPost {
            post {
              slug
            }
          }
        }
      }
    }
  `)

  LANGUAGE_SET.forEach((lang, index) => {
    createPage({
      path: "/"+ROOT_PATH[index],
      component: path.resolve("./src/components/Templates/Index-Template.js"),
      context: {
        lang: lang,
        today: yyyymmdd
      },
    })
  })
  
  /* Create Post Pages*/

  data.allStrapiPosts.nodes.forEach(node => {
    createPage({
      path: node.post.slug,
      component: path.resolve("./src/components/Templates/Post-Template.js"),
      context: {
        lang: "en",
        slug: node.post.slug,
        today: yyyymmdd
      },
    })
  })
  data.allStrapiZhchPosts.nodes.forEach(node => {
    createPage({
      path: `/zh-hans/${node.enPost.post.slug}`,
      component: path.resolve("./src/components/Templates/Post-Template.js"),
      context: {
        lang: "hans",
        slug: node.enPost.post.slug,
        today: yyyymmdd
      },
    })
  })
  data.allStrapiZhtwPosts.nodes.forEach(node => {
    createPage({
      path: `/zh-hant/${node.enPost.post.slug}`,
      component: path.resolve("./src/components/Templates/Post-Template.js"),
      context: {
        lang: "hant",
        slug: node.enPost.post.slug,
        today: yyyymmdd
      },
    })
  })
  data.allStrapiKoPosts.nodes.forEach(node => {
    createPage({
      path: `/ko/${node.enPost.post.slug}`,
      component: path.resolve("./src/components/Templates/Post-Template.js"),
      context: {
        lang: "ko",
        slug: node.enPost.post.slug,
        today: yyyymmdd
      },
    })
  })

  /* Create Categories Pages */

  data.categories.nodes.forEach(node => {
    createPage({
      path: `/categories/${node.slug}`,
      component: path.resolve(
        "./src/components/Templates/Category-Template.js"
      ),
      context: {
        lang: "en",
        category: node.slug,
        today: yyyymmdd
      },
    })
  })
  data.categories.nodes.forEach(node => {
    createPage({
      path: `/ko/categories/${node.slug}`,
      component: path.resolve(
        "./src/components/Templates/Category-Template.js"
      ),
      context: {
        lang: "ko",
        category: node.koSlug,
        today: yyyymmdd
      },
    })
  })
  data.categories.nodes.forEach(node => {
    createPage({
      path: `/zh-hans/categories/${node.slug}`,
      component: path.resolve(
        "./src/components/Templates/Category-Template.js"
      ),
      context: {
        lang: "hans",
        category: node.slug,
        today: yyyymmdd
      },
    })
  })
  data.categories.nodes.forEach(node => {
    createPage({
      path: `/zh-hant/categories/${node.slug}`,
      component: path.resolve(
        "./src/components/Templates/Category-Template.js"
      ),
      context: {
        lang: "hant",
        category: node.slug,
        today: yyyymmdd
      },
    })
  })

  /* Create Tags Pages */
  data.tags.nodes.forEach(node => {
    createPage({
      path: `/tags/${node.slug}`,
      component: path.resolve("./src/components/Templates/Tag-Template.js"),
      context: {
        lang: "en",
        slug: node.slug,
        today: yyyymmdd
      },
    })
  })
  data.tags.nodes.forEach(node => {
    createPage({
      path: `/ko/tags/${node.slug}`,
      component: path.resolve("./src/components/Templates/Tag-Template.js"),
      context: {
        lang: "ko",
        slug: node.slug,
        today: yyyymmdd
      },
    })
  })
  data.tags.nodes.forEach(node => {
    createPage({
      path: `/zh-hans/tags/${node.slug}`,
      component: path.resolve("./src/components/Templates/Tag-Template.js"),
      context: {
        lang: "hans",
        slug: node.slug,
        today: yyyymmdd
      },
    })
  })
  data.tags.nodes.forEach(node => {
    createPage({
      path: `/zh-hant/tags/${node.slug}`,
      component: path.resolve("./src/components/Templates/Tag-Template.js"),
      context: {
        lang: "hant",
        slug: node.slug,
        today: yyyymmdd
      },
    })
  })
}

/* RSS Feed */
