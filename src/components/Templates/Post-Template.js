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
import Line from "../Globals/Line"
import { setColor } from "../../styles"
import Video from "../Globals/Video"
import { FaTwitterSquare, FaTelegram, FaLinkedin } from "react-icons/fa"
import ReactMarkdown from "react-markdown"
import SEO from "../Globals/SEO"

const Post_Template = ({ data }) => {
console.log(data)
  return (
    <Layout>
      <SEO 
      title={data.post.title} 
      pageUrl={`https://blog.mxc.org/${data.post.post.slug}`} 
      image={data.post.featuredImage.absolutePath} 
      language="en" 
      description={data.post.post.metaDescription} 
      enPost={data.post.post.slug ? data.post.post.slug : " "}
      koPost={data.post.ko_post ? data.post.ko_post.post.slug : " "} 
      hansPost={data.post.zhch_post ? data.post.zhch_post.post.slug : " "} 
      hantPost={data.post.zhtw_post ? data.post.zhtw_post.post.slug : " "}
      />
      <Grid>
        <div></div>
        <div>
          {data.post.post.video ? (
            <Video url={data.post.post.video} />
          ) : (
            <FeaturedImage>
              <Image fluid={data.post.featuredImage.childImageSharp.fluid} />
            </FeaturedImage>
          )}

          <Meta>
            <Category>
              <Link to={`/categories/${data.post.category.slug}`}>
                {data.post.category.category}
              </Link>
            </Category>
            <Date>{data.post.post.date}</Date>
          </Meta>
          <h1>{data.post.title}</h1>
          <Content>
            <h4>{data.post.post.metaDescription}</h4>
            <ReactMarkdown source={data.post.post.content} />
          </Content>
          <Line color={setColor.lightGrey} />
          <Bottom>
            <Left>
              <Author>
                <Link to={(data.post.author !== null) ? `/${data.post.author.slug}` : "mxc-foundation"}>
                  {(data.post.author !== null) ? data.post.author.author : "MXC Foundation"}
                </Link>
              </Author>
              <Social>
                <a
                  href="https://twitter.com/intent/tweet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitterSquare size={30} className="iconRight" />
                </a>
                <a
                  href={`https://telegram.me/share/url?url=https://blog.mxc.org/${data.post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram size={30} className="icon" />
                </a>
                <a
                  href={`http://www.linkedin.com/shareArticle?mini=true&url=https://blog.mxc.org/${data.post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} className="icon" />
                </a>
              </Social>
            </Left>
            <Tags>
              {data.post.tags.map((item, index) => {
                return (
                  <Link to={`/tags/${item.slug}`} key={index}>
                    <Tag>{item.tag}</Tag>
                  </Link>
                )
              })}
            </Tags>
          </Bottom>
        </div>
        <div></div>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post: strapiPosts(post: { slug: { eq: $slug } }) {
      category {
        category
        slug
      }
      featuredImage {
        absolutePath
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
       }
      }
      title
      post {
        content
        date(formatString: "MMMM DD, YYYY")
        metaDescription
        video
        slug
      }
      tags {
        tag
        slug
      }
      author {
        author
        slug
      }
      zhch_post {
        post {
          slug
        }
      }
      zhtw_post {
        post {
          slug
        }
      }
      ko_post {
        post {
          slug
        }
      }
    }
  }
`

export default Post_Template
