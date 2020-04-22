import styled from "styled-components"
import image from "../../images/imageBtn.png"
import {
  setColor,
  setRem,
  setLetterSpacing,
  setFont,
  setBorder,
  setTransition,
} from "../../styles"

export const PrimaryBtn = styled.button`
  display: inline-block;
  border-radius: 26.5px;
  background: transparent url(${image}) no-repeat center;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${setRem(18)};
  ${setFont.main};
  color: ${setColor.mainWhite};
  padding: ${setRem(17)} ${setRem(36)};
  ${setBorder({ color: setColor.mainWhite })};
  ${setLetterSpacing};
  ${setTransition};
  &:hover {
    background: white;
    color: ${setColor.mainBlack};
  }
  ${props =>
    `margin: ${props.t || 0} ${props.r || "0"} ${props.b || "0"}  ${
      props.l || "0"
    }`}
  text-decoration: none;
`

/* Add to ReadMe -- how to set margin, how to set "as" prop*/
