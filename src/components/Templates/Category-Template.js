import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import { graphql, useStaticQuery } from 'gatsby'
import Line from '../Globals/Line'
import {setColor, setRem, setFont} from '../../styles'
import PostRow from '../Globals/PostRow'

const CategoryTemplate = ({data}) => {
    
    return (
        <Layout>
        
      
        {data.categories.nodes.map(item => {
          return (
            <Grid key={item.id}>
              <div />
              <FeaturedRow>
                <Title><h1>{item.Category}</h1></Title>
                {item.posts.map(post => {
                  console.log(post);
                  return (
                    <div key={post.id}>
                        <PostRow 
                        heading={post.Title}
                        text={post.Meta_Description}
                        image={post.Featured_Image.childImageSharp.fluid}
                        slug={post.slug}
                        date={post.Date}
                        
                        />
                      <Line color={setColor.lightGrey}/>

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

query ($slug:String!) {
    categories: allStrapiCategories(filter: {slug: {eq: $slug}}) {
      nodes {
        Category
        posts {
          Date(formatString: "MMMM Do, YYYY")
          slug
          Title
          Featured_Image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          Meta_Description
          id
        }
        slug
        id
      }
    }
  }
`

export default CategoryTemplate
