const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allStrapiPosts {
        nodes {
          slug
          Translations {
            Language
            slug
          }
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
    node.Translations.forEach(translation => {
      console.log(translation)

      createPage({
        path: `${translation.Language}/${translation.slug}`,
        component: path.resolve("./src/components/Templates/Post-Template.js"),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
