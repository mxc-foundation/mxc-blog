import styled from "styled-components"
import { setRem, setFlex, setColor } from "../../styles"

export const Content = styled.div``
export const Meta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 0 4vh 0;
`
export const Author = styled.div`
  display: flex;
  flex-direction: row;
`

export const AuthorText = styled.div`
  display: flex;
  flex-direction: column;
`

export const FeaturedImage = styled.div`
  padding: 4vh 0;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 5fr 2.5fr;
  h1 {
    padding: 0 0 4vh 0;
  }
`
export const Name = styled.div`
  color: ${setColor.author};
`
export const Date = styled.div`
  color: ${setColor.date};
`
export const AuthorPicture = styled.div`
  margin: 0 ${setRem(5)} 0 0;
`
