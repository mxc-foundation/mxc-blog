import React, { useState } from 'react'
import styled from 'styled-components'
import languages from '../Constants/Languages'
import { FaCaretDown } from 'react-icons/fa'
import styles from './LangDropdown.module.css'
import { media, setColor, setRem } from '../../styles'
import { Link } from 'gatsby'
import {graphql, useStaticQuery} from 'gatsby'

/*TODO: add categories, tags and index pages to the page switcher logic with a failsafe to "default"*/

const LangDropdown = () => {

  /* get slug of current page */
  const url = window.location.href.split("/")
  const slug = url.slice(-1)[0]
  
  /* destructure Graphql Query */
  const {
    posts: { nodes: posts },
  } = useStaticQuery(query)


/* make a nicer array of graphql data */

const slugArray = posts.map((item, index) => {
  const en = item.post.slug || "/";
  const ko = item.ko_post ? item.ko_post.post.slug : "/"
  const hans = item.zhch_post ? item.zhch_post.post.slug : "/"
  const hant = item.zhtw_post ? item.zhtw_post.post.slug : "/"

  const array = {
    "en" : en,
    "ko" : ko,
    "hans" : hans,
    "hant" : hant
  }

  return array
})

/* Identify location of successful slug */

const pageIndex = (slugArray.findIndex(i => i.en === slug) !== "-1") ? slugArray.findIndex(i => i.en === slug) : 
    (slugArray.findIndex(i => i.ko === slug) !== "-1") ? slugArray.findIndex(i => i.ko === slug) : 
    (slugArray.findIndex(i => i.hans === slug) !== "-1") ? slugArray.findIndex(i => i.hans === slug) : 
    (slugArray.findIndex(i => i.hant === slug) !== "-1") ? slugArray.findIndex(i => i.hant === slug) : 
    "this sucks"

const thisPage = slugArray[pageIndex]
console.log(thisPage)

    const [isOpen, setDropdown] = useState(false)
    const toggleDropdown = () => {
      setDropdown(isOpen => !isOpen)
    }

    

    return (
        <div>
            <Button type="button" onClick={toggleDropdown}>
            Language <FaCaretDown/>
            </Button>
            <StyledMenu className={isOpen ? `${styles.show}` : `${styles.hide}`}>
              <Link to={`/${thisPage.en}`} className="list">
              <MenuItem >
                English
              </MenuItem>
              </Link> 
              <Link to={`/zh-hans/${thisPage.hans}`} className="list">
              <MenuItem >
                简体中文
              </MenuItem>
              </Link>  
              <Link to={`/zh-hant/${thisPage.hant}`} className="list">
              <MenuItem >
                繁體中文
              </MenuItem>
              </Link>  
              <Link to={`/ko-kr/${thisPage.ko}`} className="list">
              <MenuItem >
                한국어
              </MenuItem>
              </Link>  
          
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

const query = graphql`
{
  posts: allStrapiPosts {
    nodes {
      post {
        slug
      }
      zhch_post {
        post {
          slug
        }
      }
      zhtw_post {
        post {
          slug
        }
      }
      ko_post {
        post {
          slug
        }
      }
    }
  }
}

`

export default LangDropdown
