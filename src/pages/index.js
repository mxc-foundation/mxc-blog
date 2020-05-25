import React from "react"
import Layout from "../components/Layout"
import Posts from "../components/Posts"
import SEO from '../components/Globals/SEO'

export default () => (
  <Layout>
    <SEO title="Home" language="en" description="Our blog provides the latest information about the MXC Foundation, the MXC token, and relevant industry news regarding blockchain and the internet of things (IoT)." koPost="https://www.mxc.org/ko" hansPost="https://www.mxc.org/zh-hans" hantPost="https://www.mxc.org/zh-hant"/>
    <Posts />
  </Layout>
)
