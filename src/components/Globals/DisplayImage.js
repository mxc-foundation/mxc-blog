import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const getImage = graphql`
  {
    defaultImg: file(relativePath: { eq: "defaultImg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const DisplayImage = ({ className, img, width }) => {
  const data = useStaticQuery(getImage)

  return (
    <Img
      fluid={img || data.defaultImg.childImageSharp.fluid}
      className={className}
    />
  )
}

export default styled(DisplayImage)`
  width: ${props => props.width};
  min-height: 100%;
`
