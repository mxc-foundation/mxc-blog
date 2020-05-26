import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import {
  StyledNav,
  MobileMenu,
  StyledMenu,
  MenuItem,
  Logo,
  Grid,
  NavRight,
} from "./Navbar.styled"
import { FaBars } from "react-icons/fa"
import links from "../Constants/Links"
import linksKo from "../Constants/KoLinks"
import linksHans from "../Constants/HansLinks"
import linksHant from "../Constants/HantLinks"
import styles from "./Navbar.module.css"
import { PrimaryBtn } from "../Globals/Button"

const getLogo = graphql`
  {
    logo: file(relativePath: { eq: "mxcLogoStars.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

const Navbar = () => {
  const data = useStaticQuery(getLogo)
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

const url = window.location.href
const menu = url.includes("/ko") ? linksKo : url.includes("/zh-hans") ? linksHans : url.includes("/zh-hant") ? linksHant : links

  return (
    <Grid>
      <StyledNav>
        <Logo>
          <a href="https://www.mxc.org">
            <Image fixed={data.logo.childImageSharp.fixed} />
          </a>
        </Logo>
        <MobileMenu type="button" onClick={toggleNav}>
          <FaBars />
        </MobileMenu>
        <StyledMenu className={isOpen ? `${styles.show}` : `${styles.hide}`}>
          {menu.map((item, index) => {
            return (
              <MenuItem key={index}>
                <a href={item.path}>{item.text}</a>
              </MenuItem>
            )
          })}
          {/* <NavRight>
					{socialIcons.map((item, index) => {
						return (
							<a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
								{item.icon}
							</a>
						);
					})}
				</NavRight> */}
        </StyledMenu>
      </StyledNav>
      <NavRight>
        <PrimaryBtn />
        <PrimaryBtn />
        <PrimaryBtn />
      </NavRight>
    </Grid>
  )
}

export default Navbar
