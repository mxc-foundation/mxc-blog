import React from 'react'
import styled from 'styled-components'

const Video = ({url, title}) => {
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
height: 488px;
`

export const BigFrame = styled.div`
display:flex;
flex-direction: auto;
`

export default Video
