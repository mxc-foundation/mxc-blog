const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allStrapiPosts {
        nodes {
          slug
        }
      }
    }
  `)

  data.allStrapiPosts.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve("./src/components/Templates/Post-Template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
