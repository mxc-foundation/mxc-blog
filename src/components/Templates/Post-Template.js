import React from "react"
import { graphql } from "gatsby"

const Post_Template = ({ data }) => {
  return <div>{data.posts.nodes.Title}</div>
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
