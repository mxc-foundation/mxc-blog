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
                heading={item.title}
                text={item.post.metaDescription}
                slug={item.post.slug}
                image={item.featuredImage.childImageSharp.fluid}
                category={item.category.category}
                date={item.post.date}
                featured
              />
              <Line color={setColor.lightGrey} />
            </div>
          )
        })}

        {posts.map(item => {
          return (
            <div>
              <Category
                key={item.id}
                category={item.category}
                url={`/${item.slug}`}
              >
                {item.posts.slice(0,5).map(data => {
                  return (
                    <div>
                      <PostRow
                        key={data.id}
                        heading={data.title}
                        text={data.post.metaDescription}
                        slug={data.post.slug}
                        date={data.post.date}
                        image={data.featuredImage.childImageSharp.fluid}
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

const getPosts = graphql`
{
  featured: allStrapiPosts(sort: {order: DESC, fields: post___date}, filter: {post: {featured: {eq: true}, publish: {eq: true}}}) {
    nodes {
      id
      author {
        author
        slug
      }
      category {
        category
        slug
      }
      post {
        date(formatString: "MMMM DD, YYYY")
        metaDescription
        featured
        publish
        slug
        video
      }
      tags {
        tag
        slug
      }
      title
      featuredImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
  posts: allStrapiCategories(filter: {posts: {elemMatch: {post: {publish: {eq: true}}}}}) {
    nodes {
      category
      slug
      posts {
        author
        category
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        title
        post {
          date(formatString: "MMMM DD, YYYY")
          metaDescription
          slug
        }
      }
    }
  }
  kopost: allStrapiCategories(filter: {ko_posts: {elemMatch: {post: {publish: {eq: true}, featured: {eq: true}}}}}) {
    nodes {
      id
      ko_posts {
        author
        post {
          slug
        }
        title
        featuredImage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      koCategory
      koSlug
    }
  }
}

`

export default Posts
