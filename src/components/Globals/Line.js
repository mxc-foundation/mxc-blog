import React from 'react'
import styled from 'styled-components'
import {setRem, setColor} from '../../styles'

const Line = ({color, width}) => {
    return (
        <Section bckColor={color} setWidth={width}/>
    )
}

const Section = styled.div`
height: 1px;
margin: ${setRem(20)} 0 ${setRem(20)} 0;
background-color: ${props => props.bckColor};
width: ${props => props.setWidth};
`

export default Line

