/* eslint react/prop-types: 0 */
import React, { useState } from "react"
import styled from "styled-components"
import Pagination from "react-js-pagination"
import "bootstrap/dist/css/bootstrap.min.css"
import { graphql } from "gatsby"
import Layout from "../Layout"
import Line from "../Globals/Line"
import { setColor, setRem, setFont, media } from "../../styles"
import PostRow from "../Globals/PostRow"
import SEO from "../Globals/SEO"

const TagTemplate = ({
  data,
  pageContext: { lang = "en", tSlug, slug, today },
}) => {
  const lanPath = lang === "en" ? "" : `${lang}/`
  let lanTag = "tag"
  switch (lang) {
    case "hans":
      lanTag = "zhchTag"
      break
    case "hant":
      lanTag = "zhtwTag"
      break
    case "ko":
      lanTag = "koTag"
      break
    default:
      lanTag = "tag"
      break
  }
  const [activePage, setactivePage] = useState(0)
  const [datToDisplay, setdatToDisplay] = useState(
    data[lang].nodes.slice(0, 10)
  )

  const handlePageChange = pageNumber => {
    const start = (pageNumber - 1) * 10
    const end = start + 10
    setdatToDisplay(data[lang].nodes.slice(start, end))
    setactivePage(pageNumber)
  }

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
            {datToDisplay.map(post => {
              let path = ""
              if (datToDisplay.length > 0) {
                path = lang === "en" ? post.post.slug : post.enPost.post.slug
              }
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
                    slug={`${tSlug}${path}`}
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={data[lang].totalCount}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
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
  align-items: center;
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
  query($slug: String!, $today: Date!) {
    en: allStrapiPosts(
      filter: {
        post: { publish: { eq: true } }
        tags: { elemMatch: { slug: { eq: $slug } } }
        date: { lte: $today }
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
      totalCount
    }
    ko: allStrapiKoPosts(
      filter: {
        post: { publish: { eq: true } }
        enPost: { post: { slug: { ne: null } } }
        tags: { elemMatch: { slug: { eq: $slug } } }
        date: { lte: $today }
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
        enPost {
          post {
            slug
          }
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
      totalCount
    }
    hans: allStrapiZhchPosts(
      filter: {
        post: { publish: { eq: true } }
        enPost: { post: { slug: { ne: null } } }
        tags: { elemMatch: { slug: { eq: $slug } } }
        date: { lte: $today }
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
        enPost {
          post {
            slug
          }
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
      totalCount
    }
    hant: allStrapiZhtwPosts(
      filter: {
        post: { publish: { eq: true } }
        enPost: { post: { slug: { ne: null } } }
        tags: { elemMatch: { slug: { eq: $slug } } }
        date: { lte: $today }
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
        enPost {
          post {
            slug
          }
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
      totalCount
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
