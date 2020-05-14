const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

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
          category
          slug
        }
      }
      tags: allStrapiTags(
        filter: { posts: { elemMatch: { post: { publish: { eq: true } } } } }
      ) {
        nodes {
          tag
          slug
        }
      }
    }
  `)

  data.allStrapiPosts.nodes.forEach(node => {
    createPage({
      path: node.post.slug,
      component: path.resolve("./src/components/Templates/Post-Template.js"),
      context: {
        slug: node.post.slug,
      },
    })
  })
  data.categories.nodes.forEach(node => {
    createPage({
      path: `/categories/${node.slug}`,
      component: path.resolve(
        "./src/components/Templates/Category-Template.js"
      ),
      context: {
        slug: node.slug,
      },
    })
  })
  data.tags.nodes.forEach(node => {
    createPage({
      path: `/tags/${node.slug}`,
      component: path.resolve("./src/components/Templates/Tag-Template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
