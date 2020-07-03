import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Globals from "./GlobalStyles"
import { ConsentManager, openConsentManager } from '@segment/consent-manager'
import inEU from '@segment/in-eu' // For conditional consenting for EU visitors

const Layout = ({ children }) => {
  return (
    <div>
    <ConsentManager
  writeKey={process.env.SEGMENT_PRODUCTION_WRITE_KEY}
  bannerContent="bannerContent"
  dialogTitle="dialogTitle"
  dialogContent="dialogContent"
  shouldRequireConsent={inEU}
  implyConsentOnInteraction={false}
/>
      <Globals />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
