import React, { useState } from "react"
import styled from "styled-components"
import { media, setColor, setRem, setFlex } from "../styles"
import { graphql, useStaticQuery } from "gatsby"
import { FaAngleDown } from "react-icons/fa"
import styles from "./Categories.module.css"
import { Link } from "gatsby"

const Categories = () => {
  const links = useStaticQuery(getCategories)
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <div>
      <FlexBox>
        <MobileMenu type="button" onClick={toggleNav}>
          Categories <FaAngleDown />
        </MobileMenu>
      </FlexBox>
      <StyledMenu className={isOpen ? `${styles.show}` : `${styles.hide}`}>
        {links.categories.nodes.map((item, index) => {
          return (
            <MenuItem key={index}>
              <Link to={`/categories/${item.slug}`}>{item.category}</Link>
            </MenuItem>
          )
        })}
      </StyledMenu>
    </div>
  )
}

export const FlexBox = styled.div`
  ${setFlex}
`

export const MobileMenu = styled.button`
  color: ${setColor.mainBlack};
  background-color: transparent;
  margin-top: 1rem;
  border: none;
  outline: none;
  font-size: ${setRem(14)};
  order: 99;
  cursor: pointer;
  ${media.tablet`display:none;`};
`

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
const getCategories = graphql`
  query {
    categories: allStrapiCategories(
      filter: { posts: { elemMatch: { post: { publish: { eq: true } } } } }
    ) {
      nodes {
        slug
        category
      }
    }
    zhch: allStrapiCategories(
      filter: { posts: { elemMatch: { post: { publish: { eq: true } } } } }
    ) {
      nodes {
        zhchCategory
        zhchSlug
      }
    }
    zhtw: allStrapiCategories(
      filter: { posts: { elemMatch: { post: { publish: { eq: true } } } } }
    ) {
      nodes {
        zhtwCategory
        zhtwSlug
      }
    }
    ko: allStrapiCategories(
      filter: { posts: { elemMatch: { post: { publish: { eq: true } } } } }
    ) {
      nodes {
        koCategory
        koSlug
      }
    }
  }
`

export default Categories
