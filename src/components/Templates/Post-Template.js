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
  Social,
} from "./Post-Template.styled"
import Line from '../Globals/Line'
import {setColor} from '../../styles'
import Video from '../Globals/Video'
import {FaTwitterSquare, FaTelegram, FaLinkedin} from 'react-icons/fa'

const Post_Template = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Grid>
        <div></div>
        <div>
          {data.post.Video ? <Video url={data.post.Video}/> : 
          <FeaturedImage>
            <Image fluid={data.post.Featured_Image.childImageSharp.fluid} />
          </FeaturedImage> }
          
        
          
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
          <Social>
          <a href="https://twitter.com/intent/tweet" target="_blank">
          <FaTwitterSquare size={30} className="iconRight"/>
          </a>
          <a href="https://twitter.com/intent/tweet" target="_blank">
            <FaTelegram size={30} className="icon"/>
          </a>
          <a href={`http://www.linkedin.com/shareArticle?mini=true&url=https://blog.mxc.org/${data.post.slug}`} target="_blank">
            <FaLinkedin size={30} className="icon"/>
            </a>
          </Social>
          </Left>
          <Tags>
            {data.post.tags.map((item, index) => {
            return (
              <Link to={`/tags/${item.slug}`}>
              <Tag key={index}>
                {item.tag}
              </Tag>
              </Link>
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
      slug
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
