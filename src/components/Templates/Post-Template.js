import React from "react"
import { graphql } from "gatsby"
import Layout from "../Layout"
import Image from "gatsby-image"
import {
  Content,
  Meta,
  Author,
  AuthorText,
  FeaturedImage,
  Grid,
  Name,
  Date,
  AuthorPicture,
} from "./Post-Template.styled"

const Post_Template = ({ data }) => {
  return (
    <Layout>
      <Grid>
        <div></div>
        <div>
          <FeaturedImage>
            <Image fluid={data.post.Featured_Image.childImageSharp.fluid} />
          </FeaturedImage>
          <h1>{data.post.Title}</h1>
          <Meta>
            <Author>
              <AuthorPicture>Picture</AuthorPicture>
              <AuthorText>
                <Name>{data.post.Author.Name}</Name>
                <Date>{data.post.Date}</Date>
              </AuthorText>
            </Author>
            <div>Social Icons</div>
          </Meta>
          <h4>{data.post.Meta_Description}</h4>
          <div>{data.post.Content}</div>
        </div>
        <div></div>
      </Grid>
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
