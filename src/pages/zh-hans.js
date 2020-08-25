import React from "react"
import Layout from "../components/Layout"
import Posts from "../components/HansPosts"
import SEO from "../components/Globals/SEO"

export default () => (
  <Layout>
    <SEO
      title="Home"
      language="en"
      description="Our blog provides the latest information about the MXC Foundation, the MXC token, and relevant industry news regarding blockchain and the internet of things (IoT)."
      enPost="https://blog.mxc.org"
      koPost="https://blog.mxc.org/ko"
      hansPost="https://blog.mxc.org/zh-hans"
      hantPost="https://blog.mxc.org/zh-hant"
    />
    <Posts />
  </Layout>
)
