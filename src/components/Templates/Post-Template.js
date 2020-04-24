import React from "react"
import { graphql } from "gatsby"
import Layout from "../Layout"
import Image from "gatsby-image"

const Post_Template = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <div>
        <Image fluid={data.post.Featured_Image.childImageSharp.fluid} />
      </div>
      <div>
        <div>
          <h1>{data.post.Title}</h1>
        </div>
        <div>
          <div>{data.post.Author.Name}</div>
          <div>{data.post.Category}</div>
          <div>{data.post.Date}</div>
        </div>
        <h4>{data.post.Meta_Description}</h4>
        <div>{data.post.Content}</div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    post: strapiPosts(slug: { eq: $slug }) {
      Title
      Content
      Meta_Description
      Date(formatString: "MMMM DD, YYYY")
      Category
      Author {
        Name
      }
      Featured_Image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
export default Post_Template
