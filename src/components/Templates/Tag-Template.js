import React from "react"
import styled from "styled-components"
import Layout from "../Layout"
import { graphql, useStaticQuery } from "gatsby"
import Line from "../Globals/Line"
import { setColor, setRem, setFont, media } from "../../styles"
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
                console.log(post)
                return (
                  <div key={post.id}>
                    <PostRow
                      heading={post.Title}
                      text={post.Meta_Description}
                      image={post.Featured_Image.childImageSharp.fluid}
                      slug={post.slug}
                      date={post.Date}
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
    tags: allStrapiTags(
      filter: {
        slug: { eq: $slug }
        posts: { elemMatch: { Publish: { eq: true } } }
      }
    ) {
      nodes {
        posts {
          Author
          Featured_Image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          Date
          Title
          id
          Meta_Description
        }
        tag
      }
    }
  }
`

export default TagTemplate
