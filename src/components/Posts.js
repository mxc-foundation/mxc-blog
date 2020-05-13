import React from "react"
import { setColor, setRem, setFont, media } from "../styles"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Line from "./Globals/Line"
import Categories from "./Categories"
import PostRow from "./Globals/PostRow"
import Category from "./Globals/Category"

const Posts = () => {
  const {
    posts: { nodes: posts },
  } = useStaticQuery(getPosts)
  const {
    featured: { nodes: featured },
  } = useStaticQuery(getPosts)

  return (
    <Grid>
      <div />
      <FeaturedRow>
        <Title>
          <h1>Blog</h1>
        </Title>
        <Categories />
        {featured.map(item => {
          return (
            <div>
              <PostRow
                key={item.id}
                heading={item.Title}
                text={item.Meta_Description}
                slug={item.slug}
                image={item.Featured_Image.childImageSharp.fluid}
                category={item.category.Category}
                date={item.Date}
                featured
              />
              <Line color={setColor.lightGrey} />
            </div>
          )
        })}

        {posts.map(item => {
          console.log(item.posts.Date)
          return (
            <div>
              <Category
                key={item.id}
                category={item.Category}
                url={`/${item.slug}`}
              >
                {item.posts.map(data => {
                  console.log(data)
                  return (
                    <div>
                      <PostRow
                        key={data.id}
                        heading={data.Title}
                        text={data.Meta_Description}
                        slug={data.slug}
                        date={data.Date}
                        image={data.Featured_Image.childImageSharp.fluid}
                      />
                      <Line color={setColor.lightGrey} />
                    </div>
                  )
                })}
              </Category>
            </div>
          )
        })}
      </FeaturedRow>
      <div />
    </Grid>
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
`

const Title = styled.div`
  border-top: 3px solid ${setColor.mainBlack};
  margin-top: ${setRem(40)};
  ${media.tablet`
    border-top: 3px solid ${setColor.mainBlack}; 
    width: 5vw;
    margin-top: ${setRem(80)};`};
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2vw;
`

const getPosts = graphql`
  {
    featured: allStrapiPosts(
      sort: { fields: Date, order: DESC }
      filter: { Publish: { eq: true }, Featured: { eq: true } }
    ) {
      nodes {
        Title
        id
        slug
        Date(formatString: "MMMM Do, YYYY")
        Meta_Description
        category {
          Category
          slug
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
    posts: allStrapiCategories(
      filter: { posts: { elemMatch: { Publish: { eq: true } } } }
    ) {
      nodes {
        Category
        posts {
          id
          Date(formatString: "MMMM Do, YYYY")
          slug
          Title
          Featured_Image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          Meta_Description
        }
        slug
        id
      }
    }
  }
`

export default Posts
