import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { FaTwitterSquare, FaTelegram, FaLinkedin } from "react-icons/fa"
import ReactMarkdown from "react-markdown"
import Layout from "../Layout"
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
import SEO from "../Globals/SEO"

const Post_Template = ({ data, pageContext: { lang = "en", slug } }) => {
  return (
    <Layout>
      <SEO
        title={data[lang].title}
        pageUrl={`https://blog.mxc.org/${data[lang].post.slug}`}
        image={
          data[lang].featuredImage === null
            ? data.file.childImageSharp.fluid.src
            : data[lang].featuredImage === undefined
            ? data.file.childImageSharp.fluid.src
            : data[lang].featuredImage.childImageSharp.fluid.src
        }
        language="en"
        description={data[lang].post.metaDescription}
        post={data[lang].post.slug ? data[lang].post.slug : " "}
      />
      <Grid>
        <div />
        <div>
          {data[lang].post.video ? (
            <Video url={data[lang].post.video} />
          ) : (
            <FeaturedImage>
              <Image
                fluid={
                  data[lang].featuredImage !== null
                    ? data[lang].featuredImage.childImageSharp.fluid
                    : data.file.childImageSharp.fluid
                }
              />
            </FeaturedImage>
          )}

          <Meta>
            <Category>
              <Link to={`/categories/${data[lang].category.slug}`}>
                {data[lang].category.category}
              </Link>
            </Category>
            <Date>{data[lang].post.date}</Date>
          </Meta>
          <h1>{data[lang].title}</h1>
          <Content>
            <h4>{data[lang].post.metaDescription}</h4>
            <ReactMarkdown source={data[lang].post.content} />
          </Content>
          <Line color={setColor.lightGrey} />
          <Bottom>
            <Left>
              <Author>
                <Link
                  to={
                    data[lang].author !== null
                      ? `/${data[lang].author.slug}`
                      : "mxc-foundation"
                  }
                >
                  {data[lang].author !== null
                    ? data[lang].author.author
                    : "MXC Foundation"}
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
                  href={`https://telegram.me/share/url?url=https://blog.mxc.org/${
                    lang === "en"
                      ? data[lang].post.slug
                      : data[lang].enPost.post.slug
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram size={30} className="icon" />
                </a>
                <a
                  href={`http://www.linkedin.com/shareArticle?mini=true&url=https://blog.mxc.org/${
                    lang === "en"
                      ? data[lang].post.slug
                      : data[lang].enPost.post.slug
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} className="icon" />
                </a>
              </Social>
            </Left>
            <Tags>
              {data[lang].tags.map((item, index) => {
                return (
                  <Link to={`/tags/${item.slug}`} key={index}>
                    <Tag>{item.tag}</Tag>
                  </Link>
                )
              })}
            </Tags>
          </Bottom>
        </div>
        <div />
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    en: strapiPosts(post: { slug: { eq: $slug } }) {
      category {
        category
        slug
      }
      featuredImage {
        relativePath
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
    hans: strapiZhchPosts(enPost: { post: { slug: { eq: $slug } } }) {
      category {
        zhchCategory
        zhchSlug
      }
      featuredImage {
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
        zhchTag
        zhchSlug
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
    hant: strapiZhchPosts(enPost: { post: { slug: { eq: $slug } } }) {
      category {
        zhchCategory
        zhchSlug
      }
      featuredImage {
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
        zhchTag
        zhchSlug
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
    ko: strapiKoPosts(enPost: { post: { slug: { eq: $slug } } }) {
      category {
        koCategory
        koSlug
      }
      featuredImage {
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
        koTag
        koSlug
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
    file(relativePath: { eq: "defaultImg.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default Post_Template
