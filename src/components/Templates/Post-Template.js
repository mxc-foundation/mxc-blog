import React from "react"
import { graphql } from "gatsby"
import Layout from "../Layout"

const Post_Template = ({ data }) => {
  console.log(data)

  return <Layout>dummy data template</Layout>
}
export const query = graphql`
  {
    posts: allStrapiPosts(
      sort: { fields: Date, order: DESC }
      filter: { Publish: { eq: true } }
    ) {
      nodes {
        Title
        id
        slug
        Date(formatString: "MMMM Do, YYYY")
        Content
        Meta_Description
        Featured_Image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
export default Post_Template
