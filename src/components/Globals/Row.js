import React from "react"
import Section from "../Globals/Section"
import Title from "../globals/Title"
import aboutImg from "../../images/imageBtn.png"
import { PrimaryBtn } from "../Globals/Button"
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media,
} from "../../styles"
import styled from "styled-components"
import Image from "../Globals/Image"

const Row = () => {
  return (
    <Section>
      <AboutCenter>
        <Image />
        <Title title="about us" />
      </AboutCenter>
    </Section>
  )
}

const AboutCenter = styled.div``

export default Row
