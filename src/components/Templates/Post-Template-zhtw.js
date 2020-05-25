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

  return (
    <Layout>
      <SEO title={data.post.title} language="zh-tw"/>

      <Grid>
        <div></div>
        <div>
          {data.post.post.video ? (
            <Video url={data.post.post.video} />
          ) : (
            <FeaturedImage>
              <Image
                fluid={
                  data.post.featuredImage.formats.large.childImageSharp.fluid
                }
              />
            </FeaturedImage>
          )}

          <Meta>
            <Category>
              <Link to={`/zh-hant/categories/${data.post.category.zhtwSlug}`}>
                {data.post.category.zhtwCategory}
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
                <Link to={data.post.author.slug}>
                  {data.post.author.author}
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
                  <Link to={`/zh-hant/tags/${item.zhtwSlug}`}>
                    <Tag key={index}>{item.zhtwTag}</Tag>
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
query ($slug: String!, $enSlug: String!) {
  post: strapiZhtwPosts(post: {slug: {eq: $slug}}) {
    category {
      zhtwCategory
      zhtwSlug
    }
    featuredImage {
      formats {
        large {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
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
      zhtwTag
      zhtwSlug
    }
    author {
      author
      slug
    }
    enPost {
      post {
        slug
      }
    }
  }
  postLang: strapiPosts(post: {slug: {eq: $enSlug}}) {
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
  }
}
`

export default Post_Template
