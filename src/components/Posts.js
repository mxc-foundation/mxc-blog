import React from "react"
import Row from "./Globals/Row"
import { setColor, setRem } from "../styles"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

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
      <Rows>
        {posts.map(item => {
          return (
            <Row
              key={item.id}
              heading={item.Title}
              text={item.Meta_Description}
              slug={item.slug}
              image={item.Featured_Image.childImageSharp.fluid}
            />
          )
        })}
      </Rows>
      <Column>
        <div>
          <p> this is the side column</p>
        </div>
      </Column>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 80vw 20vw;
  column-gap: ${setRem(5)};
`

const Rows = styled.div`
  padding: 0 2vw;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2vw;
`

export default Posts
