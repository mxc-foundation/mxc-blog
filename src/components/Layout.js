import React, { useEffect, useState } from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer"
import Globals from "./GlobalStyles"

const Layout = ({ children }) => {
  const [enableBackButton, setEnableBackButton] = useState(false);
  const url =
    typeof window !== `undefined` ? window.location.href.split("/") : "/"
  const path = url.slice(3, url.length)
  
  let home = path[0] !== "";
  if(path[0] === 'ko' || path[0] === 'zh-hans' || path[0] === 'zh-hant'){
    if(path[1] !== ""){
      home = true;
    }else{
      home = false;
    }
  }
  return (
    <div>
      <Globals />
      <Navbar />
      {home &&
      <div style={{ fontSize: '1rem', paddingTop: '10px', paddingLeft: '10%' }}>
        <button type="button" onClick={() => window.history.back() }>&lt;</button>
      </div>}
      {children}
      <Footer />
    </div>
  )
}

export default Layout
