import React from "react"
import styled from "styled-components"
import Layout from "../Layout"
import { graphql } from "gatsby"
import Line from "../Globals/Line"
import { setColor, setRem, setFont, media } from "../../styles"
import PostRow from "../Globals/PostRow"
import SEO from "../Globals/SEO"

const CategoryTemplate = ({ data }) => {
  return (
    <Layout>
      {data.categories.nodes.map(item => {
        return (
          <div key={item.id}>
            <SEO
              title={item.zhtwCategory}
              pageUrl={`https://blog.mxc.org/zh-hant/${item.zhtwSlug}`}
            />
            <Grid>
              <div />
              <FeaturedRow>
                <Title>
                  <h1>{item.zhtwCategory}</h1>
                </Title>
                {data.posts.nodes.map(post => {
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
                        slug={`zh-hant/${post.post.slug}`}
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
    posts: allStrapiZhtwPosts(
      filter: {
        category: { slug: { eq: $slug } }
        post: { publish: { eq: true } }
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
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        id
        category {
          zhchCategory
          zhchSlug
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
