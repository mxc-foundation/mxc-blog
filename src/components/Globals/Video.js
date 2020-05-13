import React from "react"
import styled from "styled-components"
import { media } from "../../styles"

const Video = ({ url, title }) => {
  return (
    <BigFrame>
      <Frame>
        <iframe
          src={url}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          height="100%"
        />
      </Frame>
    </BigFrame>
  )
}

export const Frame = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin-top: 78px;
  height: 244px;
  ${media.portraitTablet`height:366px;`}
  ${media.tablet`height:488px;`}
  ${media.laptop`height: 488px;`}
`

export const BigFrame = styled.div`
  display: flex;
  flex-direction: auto;
`

export default Video
