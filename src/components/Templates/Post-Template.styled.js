import styled from "styled-components"
import { setRem, setFlex, setColor, setTransition, media } from "../../styles"

export const Content = styled.div`
  font-size: ${setRem(18)};
  line-height: ${setRem(27)};
  font-weight: 300;
  color: ${setColor.mainBlack};
  h2 {
    margin: ${setRem(40)} 0 ${setRem(10)} 0;
  }
  h3 {
    margin: ${setRem(40)} 0 ${setRem(10)} 0;
  }
  h4 {
    margin: ${setRem(20)} 0;
  }
`

export const Author = styled.div`
  padding: ${setRem(19)} ${setRem(0)};
  font-size: ${setRem(18)};
  line-height: ${setRem(27)};
  a {
    text-decoration: none;
    color: ${setColor.mainBlack};
  }
  a:hover {
    color: ${setColor.secondaryColor};
    ${setTransition}
  }
`

export const FeaturedImage = styled.div`
  padding: 4vh 0;
  margin: ${setRem(76)} 0 0 0;
`
export const Grid = styled.div`
  padding: 0 ${setRem(15)};
  h1 {
    padding: 0 0 4vh 0;
    margin: ${setRem(76)} 0 ${setRem(76)} ${setRem(0)};
    color: ${setColor.mainBlack};
  }
  ${media.laptop`  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  `}
`

export const Date = styled.div`
  color: #686868;
`

export const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${setRem(76)};
`

export const Category = styled.div`
  font-size: ${setRem(16)};
  font-weight: 700;
  color: #686868;
  a {
    color: #686868;
    text-decoration: none;
  }
  a:hover {
    color: ${setColor.secondaryColor};
    ${setTransition}
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 ${setRem(76)};
`

export const Tag = styled.div`
  background: ${setColor.mainGrey};
  padding: ${setRem(7)} ${setRem(15)};
  margin: ${setRem()};
  border-radius: ${setRem()};
`

export const Tags = styled.div`
  a {
    text-decoration: none;
    color: ${setColor.mainBlack};
    ${setTransition}
  }
  a:hover {
    color: ${setColor.mainWhite};
  }
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  min-width: 10vw;
  ${setTransition}
`
export const Left = styled.div`
  display: flex;
  flex-direction: column;
`

export const Social = styled.div`
  a {
    color: ${setColor.mainBlack};
  }
  a:hover {
    color: ${setColor.secondaryColor};
  }
  .icon {
    margin: ${setRem(0)} ${setRem(5)};
    ${setTransition}
  }
  .iconRight {
    margin-right: ${setRem(5)};
    ${setTransition}
  }
`
