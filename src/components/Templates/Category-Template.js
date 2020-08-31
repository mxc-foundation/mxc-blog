import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { useHistory } from 'react-router-dom'
import Pagination from "react-js-pagination"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../Layout"
import Line from "../Globals/Line"
import { setColor, setRem, setFont, media } from "../../styles"
import PostRow from "../Globals/PostRow"
import SEO from "../Globals/SEO"
import { localeSettings } from "../Globals/LocalSettings"
import Categories from "../Categories"


const CategoryTemplate = ({
  data,
  pageContext: { lang = "en", category, today },
}) => {
  const locl = localeSettings[lang]
  const [activePage, setactivePage] = useState(0);
  const [datToDisplay, setdatToDisplay] = useState(data[lang].edges.slice(0, 10));

  const handlePageChange = (pageNumber) => {
    const start = (pageNumber - 1) * 10;
    const end = start + 10;
    setdatToDisplay(data[lang].edges.slice(start, end));
    setactivePage(pageNumber);

  }
  const history = useHistory();

  return (
    <Layout>
      {data.categories.nodes.map(item => {
        return (
          <div key={item.id}>
            <SEO
              title={item[locl.categoryPropName]}
              pageUrl={`https://blog.mxc.org/${item[locl.slugPropName]}`}
            />
            <Grid>
              <div />

              <FeaturedRow>
                
                  
                  <Title>
                    <h1>{item[locl.categoryPropName]}</h1>
                  </Title>
                
                <Categories />
                {datToDisplay.map(post => {
                  let slug = ""
                  if (data[lang].edges.length > 0) {
                    slug =
                      lang === "en"
                        ? post.node.post.slug
                        : post.node.enPost.post.slug
                  }
                  return (
                    <div key={post.node.id}>
                      <PostRow
                        heading={post.node.title}
                        text={
                          post.node.post.metaDescription
                            ? post.node.post.metaDescription
                            : ""
                        }
                        image={
                          post.node.featuredImage !== null
                            ? post.node.featuredImage.childImageSharp.fluid
                            : data.file.childImageSharp.fluid
                        }
                        slug={`${locl.relativePath}${slug}`}
                        date={post.node.post.date}
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
      })}
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
    </Layout >
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
  ${media.laptop`
    border-top: 3px solid ${setColor.mainBlack}; 
    width: 15vw;
    margin-top: ${setRem(80)};`};
`

export const query = graphql`
  query($category: String!, $today: Date!) {
    en: allStrapiPosts(
      sort: { order: DESC, fields: date }
      filter: { category: { slug: { eq: $category } }, date: { lte: $today } }
    ) {
      edges {
        node {
          id
          post {
            metaDescription
            date(formatString: "MMMM DD, YYYY")
            slug
          }
          featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          category {
            category
          }
          title
        }
      }
      totalCount
    }
    hans: allStrapiZhchPosts(
      sort: { order: DESC, fields: date }
      filter: {
        category: { slug: { eq: $category } }
        enPost: { post: { slug: { ne: null } } }
        date: { lte: $today }
      }
    ) {
      edges {
        node {
          id
          post {
            metaDescription
            date(formatString: "MMMM DD, YYYY")
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
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          category {
            category
          }
          title
        }
      }
      totalCount
    }
    hant: allStrapiZhtwPosts(
      sort: { order: DESC, fields: date }
      filter: {
        category: { slug: { eq: $category } }
        enPost: { post: { slug: { ne: null } } }
        date: { lte: $today }
      }
    ) {
      edges {
        node {
          id
          post {
            metaDescription
            date(formatString: "MMMM DD, YYYY")
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
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          category {
            category
          }
          title
        }
      }
      totalCount
    }
    ko: allStrapiKoPosts(
      sort: { order: DESC, fields: date }
      filter: {
        category: { slug: { eq: $category } }
        enPost: { post: { slug: { ne: null } } }
        date: { lte: $today }
      }
    ) {
      edges {
        node {
          id
          post {
            metaDescription
            date(formatString: "MMMM DD, YYYY")
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
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          category {
            category
          }
          title
        }
      }
      totalCount
    }
    categories: allStrapiCategories(filter: { slug: { eq: $category } }) {
      nodes {
        category
        zhchCategory
        zhchSlug
        zhtwCategory
        zhtwSlug
        koSlug
        koCategory
        slug
        id
      }
    }
    file(relativePath: { eq: "defaultImg.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

export default CategoryTemplate
