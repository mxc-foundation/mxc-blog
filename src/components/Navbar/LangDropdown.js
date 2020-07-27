import React, { useState } from 'react'
import styled from 'styled-components'
import { FaCaretDown } from 'react-icons/fa'
import styles from './LangDropdown.module.css'
import { setColor, setRem } from '../../styles'
import { Link } from 'gatsby'
import {graphql, useStaticQuery} from 'gatsby'

const LangDropdown = () => {


  /* get slug of current page x */
 
  const url = typeof window !== `undefined` ? window.location.href.split("/") : "/"

  const decodeSlug = (url.slice(-1)[0].includes("%")) ? decodeURIComponent(url.slice(-1)[0]) : url.slice(-1)[0] 
  
  const slug = decodeSlug ? decodeSlug : "/"


  /* destructure Graphql Query */

  const getData = useStaticQuery(query)
  const posts = getData.posts.nodes
  const categories = getData.categories.nodes
  const tags = getData.tags.nodes

/* make a nicer array of graphql data */

const postArray = posts.map((item, index) => {
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

/* Modify Categories Array*/
const categoriesArray = categories.map((item, index) => {
  const en = item.slug || "/";
  const ko = item.koSlug ? item.koSlug : "/"
  const hans = item.zhchSlug ? item.zhchSlug : "/"
  const hant = item.zhtwSlug ? item.zhtwSlug : "/"

  const array = {
    "en" : en,
    "ko" : ko,
    "hans" : hans,
    "hant" : hant
  }

  return array
})

/* Modify Tags Array*/

const tagsArray = tags.map((item, index) => {
  const en = item.slug || "/";
  const ko = item.koSlug ? item.koSlug : "/"
  const hans = item.zhchSlug ? item.zhchSlug : "/"
  const hant = item.zhtwSlug ? item.zhtwSlug : "/"

  const array = {
    "en" : en,
    "ko" : ko,
    "hans" : hans,
    "hant" : hant
  }

  return array
})


/* Create Home pages array*/

const homeArray = {
  "en" : "/",
  "ko" : "/",
  "hans" : "/",
  "hant" : "/"
}

/* Consolidate the Arrays */

const combinedArray = postArray.concat(categoriesArray, tagsArray, homeArray)

/* Identify location of successful slug */

const enSlug = combinedArray.findIndex(i => i.en === slug)
const koSlug = combinedArray.findIndex(i => i.ko === slug)
const hansSlug = combinedArray.findIndex(i => i.hans === slug)
const hantSlug = combinedArray.findIndex(i => i.hant === slug)
const checkIndex = (enSlug !== -1) ? enSlug : (koSlug !== -1) ? koSlug : (hansSlug !== -1) ? hansSlug : (hantSlug !== -1) ? hantSlug : "failed"
const thisPage = combinedArray[checkIndex]

/* set up state */

    const [isOpen, setDropdown] = useState(false)
    const toggleDropdown = () => {
      setDropdown(isOpen => !isOpen)
    }

    console.log(thisPage)
    return (
        <div>
            <Button type="button" onClick={toggleDropdown}>
            Language <FaCaretDown/>
            </Button>
            <StyledMenu className={isOpen ? `${styles.show}` : `${styles.hide}`}>
              <Link to={`/${thisPage.en !== "/" ? thisPage.en : ""}`} className="list">
              <MenuItem >
                English
              </MenuItem>
              </Link> 
              <Link to={`/zh-hans/${thisPage.hans !== "/" ? thisPage.hans : ""}`} className="list">
              <MenuItem >
                简体中文
              </MenuItem>
              </Link>  
              <Link to={`/zh-hant/${thisPage.hant !== "/" ? thisPage.hant : ""}`} className="list">
              <MenuItem >
                繁體中文
              </MenuItem>
              </Link>  
              <Link to={`/ko/${thisPage.ko !== "/" ? thisPage.ko : ""}`} className="list">
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
  categories:allStrapiCategories {
    nodes {
      slug
      koSlug
      zhchSlug
      zhtwSlug
    }
  }
  tags: allStrapiTags {
    nodes {
      slug
      zhchSlug
      zhtwSlug
      koSlug
      zhchTag
      zhtwTag
    }
  }
}

`

export default LangDropdown
