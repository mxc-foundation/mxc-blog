const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allStrapiPosts (filter: {Publish: {eq: true}}) {
        nodes {
          slug
          Translations {
            Language
            slug
          }
        }
      }
    categories: allStrapiCategories(filter: {posts: {elemMatch: {Publish: {eq: true}}}}) {
    nodes {
      Category
      slug
    }
  }
  tags: allStrapiTags(filter: {posts: {elemMatch: {Publish: {eq: true}}}}) {
    nodes {
      tag
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
    node.Translations.forEach(translation => {
      createPage({
        path: `${translation.Language}/${translation.slug}`,
        component: path.resolve("./src/components/Templates/Post-Template.js"),
        context: {
          slug: node.slug,
        },
      })
    })
  })
  data.categories.nodes.forEach(node => {
    createPage({
      path: `/categories/${node.slug}`,
      component: path.resolve("./src/components/Templates/Category-Template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.tags.nodes.forEach(node => {
    createPage({
      path: `/tags${node.slug}`,
      component: path.resolve("./src/components/Templates/Tag-Template.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  
}


