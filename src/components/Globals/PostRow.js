import React from "react"
import Section from "./Section"
import Title from "./Title"
import { Link } from "gatsby"
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media,
} from "../../styles"
import styled from "styled-components"
import DisplayImage from "./DisplayImage"

const PostRow = ({ text, heading, image, slug, featured, category, date }) => {
  return (
    <Section>
      <Link to={slug}>
        <Center imageWidth={featured ? `50vw` : `25vw`}>
          <DisplayImage className="img" img={image} />

          <div className="info">
            <Title
              title={heading}
              className={featured ? `featured` : "normal"}
            />
            <p>{text}</p>
            <Category>{featured ? `${category}` : null}</Category>
            <Date>{date}</Date>
          </div>
        </Center>
      </Link>
    </Section>
  )
}

const Center = styled.div`
  h3 {
    color: ${setColor.mainBlack};
  }
  .img,
  .info {
    padding: ${setRem(15)};
    ${media.laptop`
       padding: ${setRem(30)};`}
  }
  .img {
    display: block;
    ${setBorder({ width: setRem(0), color: setColor.primaryColor })}
  }
  .featured {
    margin-bottom: ${setRem(30)};
    ${media.laptop`margin-bottom: ${setRem(76)};`}
  }
  .normal {
    margin-bottom: ${setRem(20)};
    font-size: ${setRem(24)};
  }
  .info {
    p {
      line-height: 20px;
      font-size: ${setRem(16)};
      color: ${setColor.mainBlack};
    }
  }
  width: 90vw;
  margin: 0 auto;

  ${media.laptop`
  width: 100vw;
  max-width: ${setRem(1170)};
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: ${setRem(32)};
  .img {
    align-self: center;
    width: ${props => props.imageWidth};
  }
  .info {

  }
  a {
    text-decoration: none;
  }
  ]
  `}
`
export const Category = styled.div`
  color: ${setColor.mainGrey};
  font-size: ${setRem(16)};
  font-weight: 700;
  margin-top: ${setRem(44)};
  ${media.laptop``}
`

export const Date = styled.div`
  font-size: ${setRem(14)};
  color: ${setColor.mainGrey};
`

export default PostRow
