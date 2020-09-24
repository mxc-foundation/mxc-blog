import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteUrl
        siteImage: image
        siteDesc: description
        author
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description, language, image, pageUrl, post }) => {
  const { site } = useStaticQuery(getData)
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    siteImage,
    twitterUsername,
  } = site.siteMetadata

  return (
    <Helmet
      htmlAttributes={{ lang: language }}
      title={`${title} | ${siteTitle}`}
    >
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={siteImage || image} />

      {/* Google Site Verification */}

      <meta
        name="google-site-verification"
        content="yvRbfAnakydt-oCgbCjj3zY-DjdhEYc6zHgRiLUTBJM"
      />

      {/* Twitter Card */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${siteImage || image}`} />

      {/* Facebook Card */}

      <meta property="og:url" content={pageUrl || siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || siteDesc} />
      <meta property="og:image" content={`${siteUrl}${siteImage || image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta property="og:url" content={pageUrl || siteUrl} />

      {/* Language References */}
      <link
        rel="alternate"
        href={`https://blog.mxc.org/${post}`}
        hrefLang="en"
      />

      <script>
        {`
        (function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
      var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
      f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
      var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
      _.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');

      var ml_account = ml('accounts', '1479110', 'v9j1r7r5k1', 'load');
          `}
      </script>
    </Helmet>
  )
}

export default SEO
