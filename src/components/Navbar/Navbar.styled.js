import styled from "styled-components"
import { media } from "../../styles"

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0.5rem 0.5rem;
  flex-wrap: wrap;
  background-color: ${props => props.theme.navbarColor};
  color: ${props => props.theme.textColor};
  .show {
    height: 100vh !important;
    transition: all 0.3s linear;
  }

  .hide {
    display: none;
    transition: all 0.3 linear;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: none;
    color: ${props => props.theme.secondaryColor};
  }
  ${media.tablet`flex-direction:row;`};
`

export const Logo = styled.div`
  ${media.tablet`padding: .25rem 0 0 1rem;
	margin-right: 1rem;`};
`

export const StyledMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 3rem 0 0 0;
  align-items: center;
  padding: 0;
  justify-content: flex-start;
  flex: 4;
  font-weight: 500;
  flex-direction: column;
  height: 0;
  overflow: hidden;
  transition: all 0.3s linear;
  ${media.tablet`
	flex-direction:row;
	height: auto;
	margin: 0 0 0 0;
	`};
`

export const MenuItem = styled.li`
  padding: 1rem 2rem;
`

export const NavRight = styled.div`
  flex: 2;
  justify-content: right;
  text-align: right;
  padding-right: 1rem;
  order: 99;
`

export const MobileMenu = styled.button`
  color: ${props => props.theme.primaryColor};
  background-color: transparent;
  margin-top: 1rem;
  border: none;
  outline: none;
  font-size: 1.5rem;
  order: 99;
  cursor: pointer;
  align-self: first baseline;
  ${media.tablet`display:none;`};
`
