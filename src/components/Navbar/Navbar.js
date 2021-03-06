import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { FaBars } from "react-icons/fa"
import {
  StyledNav,
  MobileMenu,
  StyledMenu,
  MenuItem,
  Logo,
  Grid,
  NavRight,
} from "./Navbar.styled"
import getTopMenu from "../Constants/Links"
import styles from "./Navbar.module.css"
import LangDropdown from "./LangDropdown"

const getLogo = graphql`
  {
    logo: file(relativePath: { eq: "mxcLogo.png" }) {
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
  /*eslint-disable */
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  /* eslint-enable */

  const url =
    typeof window !== `undefined` ? window.location.href.split("/") : "/"
  const path = url.slice(3, url.length)
  const lang =
    path[0] !== "zh-hans" && path[0] !== "zh-hant" && path[0] !== "ko"
      ? ""
      : path[0]
  const menu = getTopMenu(lang)

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
              <MenuItem key={item.path}>
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
        <LangDropdown />
      </NavRight>
    </Grid>
  )
}

export default Navbar
