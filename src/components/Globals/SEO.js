import React from 'react'
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'

const getData = graphql`
query {
    site {
      siteMetadata {
        siteTitle:title
        siteUrl
        siteImage: image
        siteDesc: description
        author
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description, language, image, pageTitle, pageUrl, enPost, hansPost, hantPost, koPost }) => {
    const {site} = useStaticQuery(getData)

    const {siteDesc, siteTitle, siteUrl, siteImage, twitterUsername} = site.siteMetadata

    return (
        <Helmet htmlAttributes={language} title={`${title} | ${siteTitle}`}>
            <meta name="description" content={description || siteDesc} />
            <meta name="image" content={siteImage || image} />
            
            {/*Twitter Card*/}

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:title" content={siteTitle || pageTitle} />
            <meta name="twitter:description" content={siteDesc || description} />
            <meta name="twitter:image" content={`${siteUrl}${siteImage}` || `${pageUrl}${image}`} />
            
            {/*Facebook Card */}

            <meta property="og:url" content={siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDesc || description} />
            <meta property="og:image" content={`${siteUrl}${siteImage}`} />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="300" />
            <meta property="og:url" content={siteUrl} />

            {/*Language References*/}

            {enPost ? `<link rel="alternate" href="${enPost}" hreflang="en"/>` : " "}
            {hansPost ? `<link rel="alternate" href="${hansPost}" hreflang="zh-cn"/>` : " "}
            {hantPost ? `<link rel="alternate" href="${hantPost}" hreflang="zh-tw"/>` : " "}
            {koPost ? `<link rel="alternate" href="${koPost}" hreflang="ko-kr"/>` : " "}

        </Helmet>
    )
}

export default SEO
