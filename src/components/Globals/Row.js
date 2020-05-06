import React from "react"
import Section from "../Globals/Section"
import Title from "../Globals/Title"
import { PrimaryBtn } from "../Globals/Button"
import { Link } from "gatsby"
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media,
} from "../../styles"
import styled from "styled-components"
import DisplayImage from "../Globals/DisplayImage"

const Row = ({ text, heading, image, slug }) => {
  return (
    <Section>
      <AboutCenter>
        <Link to={slug}>
          <DisplayImage className="img" img={image} />
        </Link>
        <div className="info">
          <Title title={heading} />
          <p>{text}</p>
          <PrimaryBtn as={Link} to={slug}>
            Read More
          </PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  )
}

const AboutCenter = styled.div`
  .img,
  .info {
    padding: ${setRem(30)};
  }
  .img {
    display: block;
    ${setBorder({ width: setRem(0), color: setColor.primaryColor })}
  }
  .info {
    p {
      ${setLetterSpacing()}
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
    width: 55vw;
  }
  .info {

  }
  a {
    text-decoration: none;
  }
  ]
  `}
`

export default Row
