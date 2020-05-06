import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../Layout"
import Image from "gatsby-image"
import {
  Content,
  Author,
  FeaturedImage,
  Grid,
  Date,
  Meta,
  Category,
  Bottom,
  Tag,
  Tags,
  Left,
} from "./Post-Template.styled"
import Line from '../Globals/Line'
import {setColor} from '../../styles'
import Video from '../Globals/Video'

const Post_Template = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Grid>
        <div></div>
        <div>
          <FeaturedImage>
            <Image fluid={data.post.Featured_Image.childImageSharp.fluid} />
          </FeaturedImage>
        
            <Video url={data.post.Video}/>
          
          <Meta>
          <Category><Link to={`/categories/${data.post.category.slug}`}>{data.post.category.Category}</Link></Category>
          <Date>{data.post.Date}</Date>
          </Meta>
          <h1>{data.post.Title}</h1>
          <h4>{data.post.Meta_Description}</h4>
          <Content>{data.post.Content}</Content>
          <Line color={setColor.lightGrey}/>
          <Bottom>
            <Left>
          <Author>
            <Link to={data.post.Author.slug}>
            {data.post.Author.Name}
            </Link>
          </Author>
          </Left>
          <Tags>
            {data.post.tags.map((item, index) => {
            return (
              <Tag key={index}>
                <Link to={`/tags/${item.slug}`}>{item.tag}</Link>
              </Tag>
            )
          })}</Tags>
          </Bottom>
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
      Video
      category {
        Category
        slug
      }
      Author {
        Name
        slug
      }
      tags {
        slug
        tag
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
