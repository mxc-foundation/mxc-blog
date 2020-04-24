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
  console.log(data)

  data.allStrapiPosts.nodes.forEach(({ node }) => {
    createPage({
      path: `blog${node.slug}`,
      component: path.resolve("./src/Templates/Post-Template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
