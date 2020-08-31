import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer"
import Globals from "./GlobalStyles"

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => (props.primary ? "violet" : "black")};
  border: ${props => (props.primary ? "2px solid violet" : "2px solid black")};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    color: white;
    background-color: ${props => (props.primary ? "violet" : "black")};
  }
`

const Layout = ({ children }) => {
  const [enableBackButton, setEnableBackButton] = useState(false)
  const url =
    typeof window !== `undefined` ? window.location.href.split("/") : "/"
  const path = url.slice(3, url.length)

  let home = path[0] !== ""
  if (path[0] === "ko" || path[0] === "zh-hans" || path[0] === "zh-hant") {
    if (path[1] !== "") {
      home = true
    } else {
      home = false
    }
  }
  return (
    <div>
      <Globals />
      <Navbar />
      {home && (
        <div
          style={{ fontSize: "1rem", paddingTop: "10px", paddingLeft: "10%" }}
        >
          <Button type="button" onClick={() => window.history.back()}>
            &lt;
          </Button>
        </div>
      )}
      {children}
      <Footer />
    </div>
  )
}

export default Layout
