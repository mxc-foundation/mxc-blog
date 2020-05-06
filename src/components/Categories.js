import React from 'react'
import styled from 'styled-components'
import { media, setColor } from "../styles"
import { graphql, useStaticQuery } from "gatsby"

const getCategories = graphql`
query {
    categories: allStrapiCategories {
      nodes {
        slug
        Category
      }
    }
  }
   
`



const Categories = () => {
    const links = useStaticQuery(getCategories)
    console.log(links);
    
    return (
        <StyledMenu>
            {links.categories.nodes.map((item, index) => {
            return (
              <MenuItem key={index}>
                <a href={item.slug}>{item.Category}</a>
              </MenuItem>
            )
          })}
        </StyledMenu>
    )
}


export const StyledMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 3rem 0 0 0;
  align-items: center;
  padding: 0;
  justify-content: flex-start;
  flex: 4;
  font-weight: 500;
  flex-direction: column;
  height: 0;
  overflow: hidden;
  transition: all 0.3s linear;
  a {
    text-decoration: none;
    color: ${setColor.mainBlack};
  }
  a:hover {
    text-decoration: none;
    color: ${setColor.secondaryColor};
  }
  ${media.tablet`
	flex-direction:row;
	height: auto;
	margin: 0 0 0 0;
	`};
`
export const MenuItem = styled.li`
  padding: 1rem 2rem;
`

export default Categories
