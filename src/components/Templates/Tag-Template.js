import React from "react"
import styled from "styled-components"
import Layout from "../Layout"
import { graphql } from "gatsby"
import Line from "../Globals/Line"
import { setColor, setRem, setFont, media } from "../../styles"
import PostRow from "../Globals/PostRow"
import SEO from "../Globals/SEO"

const TagTemplate = ({ data, pageContext: { lang = 'en', slug } }) => {
  const lanPath = lang === 'en' ? "": lang+"/";
  const lanTag = lang === 'en' ? "tag": lang === 'ko' ? "koTag":lang === 'hans' ? "zhchTag" : "zhtwTag";

  return (
    <Layout>
      <div>
        <SEO
          title={data.tags[lanTag]}
          pageUrl={`https://blog.mxc.org/${lanPath}tags/${data.tags.slug}`}
        />
        <Grid>
          <div />
          <FeaturedRow>
            <Title>
              <h1>{data.tags[lanTag]}</h1>
            </Title>
            {data[lang].nodes.map(post => {
              return (
                <div key={post.id}>
                  <PostRow
                    heading={post.title}
                    text={post.post.metaDescription}
                    image={
                      post.featuredImage !== null
                        ? post.featuredImage.childImageSharp.fluid
                        : data.file.childImageSharp.fluid
                    }
                    slug={`${lanPath}post.post.slug`}
                    date={post.post.date}
                  />
                  <Line color={setColor.lightGrey} />
                </div>
              )
            })}
          </FeaturedRow>
          <div />
        </Grid>
      </div>
      )
    </Layout>
  )
}
const Grid = styled.div`
  ${media.tablet`  display: grid;
  grid-template-columns: 10vw 80vw 10vw;
  column-gap: ${setRem(5)};`};
`

const FeaturedRow = styled.div`
  padding: 0 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  h1 {
    text-align: center;
    margin: 20px 0;
    ${setFont}
    font-size: ${setRem(38)};
    color: ${setColor.mainBlack};
  }
  .img {
    height: 244px;
  }
  ${media.portraitTablet`
  .img {
    height: 344px;
  }`}
  ${media.tablet`
   .img {
    height: 488px;
  `}
  ${media.laptop`.img{height:100px;}`}
`

const Title = styled.div`
  border-top: 3px solid ${setColor.mainBlack};
  margin-top: ${setRem(40)};
  ${media.tablet`
    border-top: 3px solid ${setColor.mainBlack}; 
    width: 5vw;
    margin-top: ${setRem(80)};`};
`

export const query = graphql`
  query($slug: String!) {
    en: allStrapiPosts(
      filter: {
        post: { publish: { eq: true } }
        tags: { elemMatch: { slug: { eq: $slug } } }
      }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        date
        title
        post {
          date(formatString: "MMMM DD, YYYY")
          metaDescription
          slug
        }
        featuredImage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        id
        category {
          zhchCategory
          zhchSlug
          slug
          category
          koSlug
          koCategory
          zhtwCategory
          zhtwSlug
        }
      }
    }
    ko: allStrapiKoPosts(
      filter: {
        post: { publish: { eq: true } }
        tags: { elemMatch: { slug: { eq: $slug } } }
      }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        date
        title
        post {
          date(formatString: "MMMM DD, YYYY")
          metaDescription
          slug
        }
        featuredImage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        id
        category {
          zhchCategory
          zhchSlug
          slug
          category
          koSlug
          koCategory
          zhtwCategory
          zhtwSlug
        }
      }
    }
    hans: allStrapiZhchPosts(
      filter: {
        post: { publish: { eq: true } }
        tags: { elemMatch: { slug: { eq: $slug } } }
      }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        date
        title
        post {
          date(formatString: "MMMM DD, YYYY")
          metaDescription
          slug
        }
        featuredImage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        id
        category {
          zhchCategory
          zhchSlug
          slug
          category
          koSlug
          koCategory
          zhtwCategory
          zhtwSlug
        }
      }
    }
    hant: allStrapiZhtwPosts(
      filter: {
        post: { publish: { eq: true } }
        tags: { elemMatch: { slug: { eq: $slug } } }
      }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        date
        title
        post {
          date(formatString: "MMMM DD, YYYY")
          metaDescription
          slug
        }
        featuredImage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        id
        category {
          zhchCategory
          zhchSlug
          slug
          category
          koSlug
          koCategory
          zhtwCategory
          zhtwSlug
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
    tags: strapiTags(slug: { eq: $slug }) {
      koSlug
      koTag
      slug
      tag
      zhchSlug
      zhchTag
      zhtwSlug
      zhtwTag
      id
    }
  }
`

export default TagTemplate
