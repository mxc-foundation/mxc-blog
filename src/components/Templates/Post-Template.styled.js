import styled from "styled-components"
import { setRem, setFlex, setColor, setTransition } from "../../styles"

export const Content = styled.div`
font-size: ${setRem(18)};
line-height: ${setRem(27)};
font-weight: 300;
color: ${setColor.mainBlack};
`

export const Author = styled.div`
padding: 0 ${setRem(19)} 0 ${setRem(19)};
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
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  h1 {
    padding: 0 0 4vh 0;
    margin: ${setRem(76)} 0 ${setRem(76)} ${setRem(0)};
    color: ${setColor.mainBlack};

  }
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
display:flex;
justify-content: space-between;
margin: 0 0 ${setRem(76)};
`

export const Tag = styled.div`
background: ${setColor.mainGrey};
padding: ${setRem(7)} ${setRem(15)};
margin: ${setRem()};
border-radius: ${setRem()};
a {
  color: ${setColor.mainBlack};
  text-decoration: none;
}
a:hover {
  color: ${setColor.mainWhite};
  ${setTransition}
}

`

export const Tags = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
min-width: 10vw;
`
export const Left = styled.div`
display: flex;
flex-direction: column;
`

export const Social = styled.div`

`