import React from "react"
import styled from "styled-components"
import Layout from "../Layout"
import { graphql } from "gatsby"
import Line from "../Globals/Line"
import { setColor, setRem, setFont, media } from "../../styles"
import PostRow from "../Globals/PostRow"
import SEO from "../Globals/SEO"

const localeSettings = {
  en: {
    name: 'en',
    categoryPropName: 'category',
    slugPropName: 'slug',
    relativePath: ''
  },
  hant: {
    name: 'hant',
    categoryPropName: 'zhtwCategory',
    slugPropName: 'zhtwSlug',
    relativePath: 'zh-hant/'
  },
  hans: {
    name: 'hans',
    categoryPropName: 'zhchCategory',
    slugPropName: 'zhchSlug',
    relativePath: 'zh-hans/'
  },
  ko: {
    name: 'ko',
    categoryPropName: 'koCategory',
    slugPropName: 'koSlug',
    relativePath: 'ko/'
  }
};

const CategoryTemplate = ({ data, pageContext: { lang = 'en', slug } }) => {
  const locl = localeSettings[lang];

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
                {data[lang].edges.map(post => {
                  return (
                    <div key={post.node.id}>
                      <PostRow
                        heading={post.node.title}
                        text={post.node.post.metaDescription}
                        image={
                          post.node.featuredImage !== null
                            ? post.node.featuredImage.childImageSharp.fluid
                            : data.file.childImageSharp.fluid
                        }
                        slug={`${locl.relativePath}${post.node.post.slug}`}
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
  ${media.laptop`
    border-top: 3px solid ${setColor.mainBlack}; 
    width: 15vw;
    margin-top: ${setRem(80)};`};
`

export const query = graphql`
  query($slug: String!) {
    en: allStrapiPosts(
      sort: {order: DESC, fields: date}, 
      filter: {category: {slug: {eq: $slug}}}) 
      {
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
    }
    hans: allStrapiZhchPosts(
      sort: {order: DESC, fields: date}, 
      filter: {category: {slug: {eq: $slug}}}) 
      {
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
    }
    hant: allStrapiZhtwPosts(
      sort: {order: DESC, fields: date}, 
      filter: {category: {slug: {eq: $slug}}}) 
      {
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
    }
    ko: allStrapiKoPosts(
      sort: {order: DESC, fields: date}, 
      filter: {category: {slug: {eq: $slug}}}) 
      {
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
    }
    categories: allStrapiCategories(filter: { slug: { eq: $slug } }) {
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
