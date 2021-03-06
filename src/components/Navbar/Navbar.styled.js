import styled from "styled-components"
import { media, setColor, setRem } from "../../styles"

export const Grid = styled.div`
  color: ${setColor.mainWhite};
  background-color: ${setColor.navbar};
  ${media.tablet`  display: grid;
  grid-template-columns: 4fr 2fr;
  
  `}
`

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0.5rem 0.5rem;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: none;
    color: ${setColor.secondaryColor};
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
  display: none;
  ${media.tablet`
    display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 ${setRem(70)} 0 0;
  `}
`

export const MobileMenu = styled.button`
  color: ${setColor.mainWhite};
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
