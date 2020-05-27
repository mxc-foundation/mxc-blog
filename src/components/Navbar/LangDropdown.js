import React, { useState } from 'react'
import styled from 'styled-components'
import languages from '../Constants/Languages'
import { FaCaretDown } from 'react-icons/fa'
import styles from './LangDropdown.module.css'
import { media, setColor, setRem } from '../../styles'
import { Link } from 'gatsby'


const LangDropdown = () => {
    const [isOpen, setDropdown] = useState(false)
    const toggleDropdown = () => {
      setDropdown(isOpen => !isOpen)
    }

    return (
        <div>
            <Button type="button" onClick={toggleDropdown}>
            Language <FaCaretDown/>
            </Button>
            <StyledMenu className={isOpen ? `${styles.show}` : `${styles.hide}`}>
          {languages.map((item, index) => {
            return (
              <Link key={index} to={item.path} className="list">
              <MenuItem >
                {item.text}
              </MenuItem>
              </Link>  
            )
          })}
          </StyledMenu>
        </div>
    )
}

const StyledMenu = styled.ul`
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
background-color: ${setColor.mainWhite};
position: absolute;
padding: 0;
z-index: 1;
height: auto;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
overflow: scroll;
max-height: 24vh;
margin: ${setRem(23)} 0;
.list {
    list-style: none;
}
a {
    text-decoration: none;
    color: ${setColor.mainBlack};
}
a:hover {
    color: ${setColor.secondaryColor};
}
`
export const MenuItem = styled.li`
  padding: ${setRem(10)} ${setRem(20)};
  text-decoration:none;

`
const Button = styled.div`

cursor: pointer;

`

export default LangDropdown
