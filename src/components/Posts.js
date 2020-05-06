import React from "react"
import Row from "./Globals/Row"
import { setColor, setRem, setFont } from "../styles"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Line from './Globals/Line'

const getPosts = graphql`
  {
    allStrapiPosts(
      sort: { fields: Date, order: DESC }
      filter: { Publish: { eq: true } }
    ) {
      nodes {
        Title
        id
        slug
        Date(formatString: "MMMM Do, YYYY")
        Content
        Meta_Description
        Featured_Image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const Posts = () => {
  const {
    allStrapiPosts: { nodes: posts },
  } = useStaticQuery(getPosts)

  console.log(posts)

  return (
    <Grid>
      <div />
      <FeaturedRow>
        <Title>
        <h1>Blog</h1>
        </Title>
        {posts.map(item => {
          return (
            <div>
            <Row
              key={item.id}
              heading={item.Title}
              text={item.Meta_Description}
              slug={item.slug}
              image={item.Featured_Image.childImageSharp.fluid}
            />
            <Line color={setColor.lightGrey}/>
            </div>
            
          )
        })}
      </FeaturedRow>
      <div />
    </Grid>
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
  }
`

const Title = styled.div`
border-top: 3px solid black; 
width: 5vw;
margin-top: ${setRem(80)};

`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2vw;
`



export default Posts
