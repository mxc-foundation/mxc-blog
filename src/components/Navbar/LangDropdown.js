import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import { FaCaretDown } from "react-icons/fa"
import styles from "./LangDropdown.module.css"
import { setColor, setRem } from "../../styles"

const getPosts = graphql`
  query {
    allStrapiPosts {
      nodes {
        hans: zhch_post {
          post {
            slug
            publish
          }
        }
        hant: zhtw_post {
          post {
            slug
            publish
          }
        }
        ko: ko_post {
          post {
            slug
            publish
          }
        }
        en: post {
          slug
          publish
        }
      }
    }
  }
`

const LangDropdown = () => {
  const posts = useStaticQuery(getPosts)

  /* get slug of current page x */
  /* eslint-disable */
  const url =
    typeof window !== `undefined` ? window.location.href.split("/") : "/"
  /* eslint-enable */
  const path = url.slice(3, url.length)
  let offset = 0
  switch (path[0]) {
    case "zh-hans":
      offset = 1
      break
    case "zh-hant":
      offset = 1
      break
    case "ko":
      offset = 2
      break
    default:
      offset = 0
      break
  }

  let slug = path.slice(offset)

  const tempSlug = slug
  slug = ""
  if (tempSlug.length > 0) {
    tempSlug.forEach(ts => {
      slug += `${ts}/`
    })
  }
  slug = slug.substring(0, slug.length - 1)

  let ko = true
  let hans = true
  let hant = true
  posts.allStrapiPosts.nodes.forEach(post => {
    if (slug !== "" && path[0] !== "category" && slug === post.en.slug) {
      hans = !!post.hans
      hant = !!post.hant
      ko = !!post.ko
    }
  })

  /* set up state */
  const [isOpen, setDropdown] = useState(false)
  /* eslint-disable */
  const toggleDropdown = () => {
    setDropdown(isOpen => !isOpen)
  }
  /* eslint-enable */

  return (
    <div>
      <Button type="button" onClick={toggleDropdown}>
        Language <FaCaretDown />
      </Button>
      <StyledMenu className={isOpen ? `${styles.show}` : `${styles.hide}`}>
        <Link to={`/${slug}`} className="list">
          <MenuItem>English</MenuItem>
        </Link>
        {hans && (
          <Link to={`/zh-hans/${slug}`} className="list">
            <MenuItem>简体中文</MenuItem>
          </Link>
        )}
        {hant && (
          <Link to={`/zh-hant/${slug}`} className="list">
            <MenuItem>繁體中文</MenuItem>
          </Link>
        )}
        {ko && (
          <Link to={`/ko/${slug}`} className="list">
            <MenuItem>한국어</MenuItem>
          </Link>
        )}
      </StyledMenu>
    </div>
  )
}

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${setColor.mainWhite};
  position: absolute;
  padding: 0;
  z-index: 1;
  height: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  overflow: scroll;
  max-height: 24vh;
  margin: ${setRem(23)} 0;
  .list {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: ${setColor.mainBlack};
  }
  a:hover {
    color: ${setColor.secondaryColor};
  }
`
export const MenuItem = styled.li`
  padding: ${setRem(10)} ${setRem(20)};
  text-decoration: none;
`
const Button = styled.div`
  cursor: pointer;
`

export default LangDropdown
