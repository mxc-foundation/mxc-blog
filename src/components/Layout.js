import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Globals from "./GlobalStyles"

const Layout = ({ children }) => {
  return (
    <div>
      <Globals />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
