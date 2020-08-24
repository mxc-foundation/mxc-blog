import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import { FaCaretDown } from 'react-icons/fa'
import styles from './LangDropdown.module.css'
import { setColor, setRem } from '../../styles'
import { Link } from 'gatsby'

const LangDropdown = () => {
  const posts = useStaticQuery(getPosts);

  /* get slug of current page x */
  const url = typeof window !== `undefined` ? window.location.href.split("/") : "/"
  const path = url.slice(3, url.length);
  const offset = path[0] === 'zh-hans' ? 1 : path[0] === 'zh-hant' ? 1 : path[0] === 'ko' ? 1 : 0;
  let slug = path.slice(offset);
  
  let tempSlug = slug;
  slug = "";
  if(tempSlug.length>0){
    tempSlug.forEach((slug) => {
      slug += slug + "/";
    })
  }
  slug = slug.substring(0, slug.length-1);

  let ko = true;
  let hans = true;
  let hant = true;
  posts.allStrapiPosts.nodes.forEach((post) => {
    if(slug !== "" && path[0] !== "category" && slug === post.en.slug){
      hans = post.hans ? true: false; 
      hant = post.hant ? true: false; 
      ko = post.ko ? true: false; 
    } 
  }); 

  /* set up state */
  const [isOpen, setDropdown] = useState(false)
  const toggleDropdown = () => {
    setDropdown(isOpen => !isOpen)
  }
  
  return (
    <div>
      <Button type="button" onClick={toggleDropdown}>
        Language <FaCaretDown />
      </Button>
      <StyledMenu className={isOpen ? `${styles.show}` : `${styles.hide}`}>
        <Link to={`/${slug}`} className="list">
          <MenuItem >
            English
              </MenuItem>
        </Link>
        {hans &&
        <Link to={`/zh-hans/${slug}`} className="list">
          <MenuItem >
            简体中文
              </MenuItem>
        </Link>}
        {hant &&
        <Link to={`/zh-hant/${slug}`} className="list">
          <MenuItem >
            繁體中文
              </MenuItem>
        </Link>}
        {ko &&
        <Link to={`/ko/${slug}`} className="list">
          <MenuItem >
            한국어
              </MenuItem>
        </Link>}

      </StyledMenu>
    </div>
  )
}

const StyledMenu = styled.ul`
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
background-color: ${setColor.mainWhite};
position: absolute;
padding: 0;
z-index: 1;
height: auto;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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
  text-decoration:none;

`
const Button = styled.div`

cursor: pointer;

`

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
        hant:zhtw_post {
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

export default LangDropdown
