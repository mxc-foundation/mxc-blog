/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  pathPrefix: "/mxc-blog",
  siteMetadata: {
    title: "MXC Blog",
    description:
      "Our blog provides the latest information about the MXC Foundation, the MXC token, and relevant industry news regarding blockchain and the internet of things (IoT).",
    author: "MXC Foundation gGmbH",
    twitterUsername: "@mxcfoundation",
    image: "/defaultImg.png",
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allStrapiKoPosts } }) => {
              return allStrapiKoPosts.nodes.map(nodes => {
                return {
                  ...nodes.post,
                  title: nodes.title,
                  description: nodes.post.metaDescription,
                  date: nodes.date,
                  url: `${site.siteMetadata.siteUrl}/ko/${nodes.post.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/ko/${nodes.post.slug}`,
                  custom_elements: [{ "content:encoded": nodes.post.content }],
                }
              })
            },
            query: `
            {
              allStrapiKoPosts(filter: {post: {publish: {eq: true}}}, sort: {fields: date, order: DESC}) {
                nodes {
                  date(formatString: "MMMM DD, YYYY")
                  post {
                    metaDescription
                    slug
                    content
                  }
                  title
                }
              }
            }
            
            `,
            output: "/ko/rss.xml",
            title: "MXC Foundation RSS Feed",
          },
          {
            serialize: ({ query: { site, allStrapiPosts } }) => {
              return allStrapiPosts.nodes.map(nodes => {
                return {
                  ...nodes.post,
                  title: nodes.title,
                  description: nodes.post.metaDescription,
                  date: nodes.date,
                  url: `${site.siteMetadata.siteUrl}/${nodes.post.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/${nodes.post.slug}`,
                  custom_elements: [{ "content:encoded": nodes.post.content }],
                }
              })
            },
            query: `
            {
              allStrapiPosts(filter: {post: {publish: {eq: true}}}, sort: {fields: date, order: DESC}) {
                nodes {
                  date(formatString: "MMMM DD, YYYY")
                  post {
                    metaDescription
                    slug
                    content
                  }
                  title
                }
              }
            }
            
            `,
            output: "/rss.xml",
            title: "MXC Foundation RSS Feed",
          },
          {
            serialize: ({ query: { site, allStrapiZhtwPosts } }) => {
              return allStrapiZhtwPosts.nodes.map(nodes => {
                return {
                  ...nodes.post,
                  title: nodes.title,
                  description: nodes.post.metaDescription,
                  date: nodes.date,
                  url: `${site.siteMetadata.siteUrl}/zh-hant/${nodes.post.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/zh-hant${nodes.post.slug}`,
                  custom_elements: [{ "content:encoded": nodes.post.content }],
                }
              })
            },
            query: `
            {
              allStrapiZhtwPosts(filter: {post: {publish: {eq: true}}}, sort: {fields: date, order: DESC}) {
                nodes {
                  date(formatString: "MMMM DD, YYYY")
                  post {
                    metaDescription
                    slug
                    content
                  }
                  title
                }
              }
            }
            
            `,
            output: "/zh-hant/rss.xml",
            title: "MXC Foundation RSS Feed",
          },
          {
            serialize: ({ query: { site, allStrapiZhchPosts } }) => {
              return allStrapiZhchPosts.nodes.map(nodes => {
                return {
                  ...nodes.post,
                  title: nodes.title,
                  description: nodes.post.metaDescription,
                  date: nodes.date,
                  url: `${site.siteMetadata.siteUrl}/zh-hans/${nodes.post.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/zh-hans/${nodes.post.slug}`,
                  custom_elements: [{ "content:encoded": nodes.post.content }],
                }
              })
            },
            query: `
            {
              allStrapiZhchPosts(filter: {post: {publish: {eq: true}}}, sort: {fields: date, order: DESC}) {
                nodes {
                  date(formatString: "MMMM DD, YYYY")
                  post {
                    metaDescription
                    slug
                    content
                  }
                  title
                }
              }
            }
            
            `,
            output: "/zh-hans/rss.xml",
            title: "MXC Foundation RSS Feed",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.SITE_URL,
        sitemap: `${process.env.SITE_URL}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },

    {
      resolve: "gatsby-plugin-gdpr-tracking",
      options: {
        // logging to the console, if debug is true
        debug: false,
        googleAnalytics: {
          // The property ID; the tracking code won't be generated without it.
          trackingId: process.env.GOOGLE_ANALYTICS,
          // Defines it google analytics should be started with out the cookie consent
          autoStart: false, // <--- default
          // Setting this parameter is optional
          anonymize: true, // <--- default
          // Name of the cookie, that enables the tracking if it is true
          controlCookieName:
            "gatsby-plugin-google-analytics-gdpr_cookies-enabled",
          cookieFlags: "secure;samesite=none", // <--- default
        },
        hotjar: {
          // The Hotjar ID; the tracking code won't be generated without it.
          trackingId: process.env.HOTJAR,
          // Your Hotjar snippet version
          snippetVersion: "6", // <--- default
          // Name of the cookie, that enables the tracking if it is true
          controlCookieName: "marketing-enabled", // <--- default
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    {
      resolve: `gatsby-plugin-cookiehub-banner`,
      options: {
        // The ID is part of the CookieHub URL: https://cookiehub.net/cc/YOUR_COOKIEHUB_ID.js
        cookieHubId: process.env.COOKIE_HUB,
        // Optional parameter (default false) - Use new v2 API.
        cookieHubV2Api: true,
        // Categories configured with CookieHub
        categories: [
          {
            categoryName: "analytics", // Unique id of the category which is set by Cookiehub.
            cookieName: "gatsby-plugin-google-analytics-gdpr_cookies-enabled", // Your custom cookie name
          },
          {
            categoryName: "marketing",
            cookieName: "marketing-enabled",
          },
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, `400`, `500`, `600`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://cms.mxc.org:443`,
        queryLimit: 1000, // Default to 100
        contentTypes: [
          `posts`,
          `categories`,
          `author`,
          `tags`,
          `ko-posts`,
          `zhch-posts`,
          `zhtw-posts`,
        ],
        // If using single types place them in this array.
        // singleTypes: [`home-page`, `contact`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: process.env.STRAPI_USER,
          password: process.env.STRAPI_PASSWORD,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
  ],
}
