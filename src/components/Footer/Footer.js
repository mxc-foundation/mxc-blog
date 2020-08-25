import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Company from "../Constants/FooterCompany"
import Community from "../Constants/FooterCommunity"
import Resources from "../Constants/FooterResources"
import { setColor, setRem, media } from "../../styles"

const Footer = () => {
  return (
    <StyledFooter>
      <Column>
        Company
        <Menu>
          {Company.map((item, index) => {
            return (
              <MenuItem key={index}>
                <Link to={item.path}>{item.text}</Link>
              </MenuItem>
            )
          })}
        </Menu>
      </Column>
      <Column>
        Community
        <Menu>
          {Community.map((item, index) => {
            return (
              <MenuItem key={index}>
                <Link to={item.path}>{item.text}</Link>
              </MenuItem>
            )
          })}
        </Menu>
      </Column>
      <Column>
        Resources
        <Menu>
          {Resources.map((item, index) => {
            return (
              <MenuItem key={index}>
                <Link to={item.path}>{item.text}</Link>
              </MenuItem>
            )
          })}
        </Menu>
      </Column>
      <Column>This is a new column</Column>
    </StyledFooter>
  )
}

export const Menu = styled.ul`
  list-style: none;
  flex: 4;
  font-weight: 500;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s linear;
  padding: 1vh 0 0 0;
`

export const MenuItem = styled.li`
  font-weight: 300;
  padding-top: 1rem;
  font-size: 1rem;
`

export const Column = styled.div`
  list-style: none;
  font-weight: 500;
  overflow: hidden;
  transition: all 0.3s linear;
  color: white;
  margin-right: 10vw;
  font-size: 1rem;
  margin-top: ${setRem(30)};
  text-align: center;
  ${media.portraitTablet`
  
 margin-top: ${setRem(0)}; text-align: left; `}
`

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${setColor.navbar};
  color: ${setColor.mainWhite};
  padding: 10vh 8vw 20vh 8vw;
  a {
    text-decoration: none;
    color: white;
  }
  ${media.portraitTablet`
  flex-direction: row;
  `}
`

export default Footer
