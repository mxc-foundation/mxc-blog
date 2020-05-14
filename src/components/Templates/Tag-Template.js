import React from "react"
import styled from "styled-components"
import Layout from "../Layout"
import { graphql, useStaticQuery } from "gatsby"
import Line from "../Globals/Line"
import { setColor, setRem, setFont } from "../../styles"
import PostRow from "../Globals/PostRow"

const TagTemplate = ({ data }) => {
  return (
    <Layout>
      {data.tags.nodes.map(item => {
        return (
          <Grid key={item.id}>
            <div />
            <FeaturedRow>
              <Title>
                <h1>{item.tag}</h1>
              </Title>
              {item.posts.map(post => {
                return (
                  <div key={post.id}>
                    <PostRow
                      heading={post.title}
                      text={post.post.metaDescription}
                      image={post.featuredImage.childImageSharp.fluid}
                      slug={post.post.slug}
                      date={post.post.date}
                    />
                    <Line color={setColor.lightGrey} />
                  </div>
                )
              })}
            </FeaturedRow>
            <div />
          </Grid>
        )
      })}
    </Layout>
  )
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: 10vw 80vw 10vw;
  column-gap: ${setRem(5)};
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
  margin-top: ${setRem(80)};
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2vw;
`

export const query = graphql`
  query($slug: String!) {
    tags: allStrapiTags(
      filter: {
        slug: { eq: $slug }
        posts: { elemMatch: { post: { publish: { eq: true } } } }
      }
    ) {
      nodes {
        posts {
          author
          featuredImage {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          post {
            date
            metaDescription
          }
          title
          id
        }
        tag
      }
    }
  }
`

export default TagTemplate
