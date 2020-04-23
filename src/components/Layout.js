import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { GlobalStyles } from './Global.styled'

const Layout = ({children}) => {
    return (
        <div>
            <GlobalStyles>
            <Navbar />
            {children}
            <Footer />
            </GlobalStyles>
        </div>
    )
}

export default Layout
