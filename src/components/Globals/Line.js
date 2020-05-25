import React from 'react'
import styled from 'styled-components'
import {setRem} from '../../styles'

const Line = ({color, width}) => {
    return (
        <Section bckColor={color} setWidth={width}/>
    )
}

const Section = styled.div`
border-bottom: ${setRem(1)} solid ${props => props.bckColor};
margin: ${setRem(20)} 0 ${setRem(20)} 0;
/*background-color: ${props => props.bckColor};*/
width: ${props => props.setWidth};
`

export default Line

