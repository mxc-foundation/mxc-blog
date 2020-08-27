import React from "react"
import styled from "styled-components"
import { setColor, setRem, setFont, media } from "../../styles"
import SEO from '../../components/Globals/SEO'
import Layout from "../Layout"
import { graphql } from "gatsby"
import Line from "../Globals/Line"
import Categories from "../Categories"
import PostRow from "../Globals/PostRow"
import Category from "../Globals/Category"

const Index_Template = ({ data, pageContext: { lang='en' , today } }) => {
  const {
    newsUpdate: { nodes: newsUpdate },
    featured: { nodes: featured },
    events: { nodes: events },
    furtherReading: { nodes: furtherReading },
    technology: { nodes: technology },
    pressRelease: { nodes: pressRelease },
    useCase: { nodes: useCase },
    koNewsUpdate: { nodes: koNewsUpdate },
    koFeatured: { nodes: koFeatured },
    koEvents: { nodes: koEvents },
    koFurtherReading: { nodes: koFurtherReading },
    koTechnology: { nodes: koTechnology },
    koPressRelease: { nodes: koPressRelease },
    koUseCase: { nodes: koUseCase },
    hansNewsUpdate: { nodes: hansNewsUpdate },
    hansFeatured: { nodes: hansFeatured },
    hansEvents: { nodes: hansEvents },
    hansFurtherReading: { nodes: hansFurtherReading },
    hansTechnology: { nodes: hansTechnology },
    hansPressRelease: { nodes: hansPressRelease },
    hansUseCase: { nodes: hansUseCase },
    hantNewsUpdate: { nodes: hantNewsUpdate },
    hantFeatured: { nodes: hantFeatured },
    hantEvents: { nodes: hantEvents },
    hantFurtherReading: { nodes: hantFurtherReading },
    hantTechnology: { nodes: hantTechnology },
    hantPressRelease: { nodes: hantPressRelease },
    hantUseCase: { nodes: hantUseCase },
    file: { childImageSharp: file },
  } = data;
  const _featured = lang === 'en' ? featured : lang === 'hans' ? hansFeatured: lang === 'hant' ? hantFeatured: koFeatured;
  const _newsUpdate = lang === 'en' ? newsUpdate : lang === 'hans' ? hansNewsUpdate: lang === 'hant' ? hantNewsUpdate: koNewsUpdate;
  const _events = lang === 'en' ? events : lang === 'hans' ? hansEvents: lang === 'hant' ? hantEvents: koEvents;
  const _furtherReading = lang === 'en' ? furtherReading : lang === 'hans' ? hansFurtherReading: lang === 'hant' ? hantFurtherReading: koFurtherReading;
  const _technology = lang === 'en' ? technology : lang === 'hans' ? hansTechnology: lang === 'hant' ? hantTechnology: koTechnology;
  const _pressRelease = lang === 'en' ? pressRelease : lang === 'hans' ? hansPressRelease: lang === 'hant' ? hantPressRelease: koPressRelease;
  const _useCase = lang === 'en' ? useCase : lang === 'hans' ? hansUseCase: lang === 'hant' ? hantUseCase: koUseCase;

  return (
      <Layout>
        <SEO 
        title="Home" 
        language="en" 
        description="Our blog provides the latest information about the MXC Foundation, the MXC token, and relevant industry news regarding blockchain and the internet of things (IoT)." 
        enPost="https://blog.mxc.org"
        />
    <Grid>
      <div />
      <FeaturedRow>
        <Title>
          <h1>Blog</h1>
        </Title>
        <Categories />
        {_featured.map(item => {
          return (
            <div key={item.id}>
              <PostRow
                heading={item.title}
                text={item.post.metaDescription}
                slug={item.post.slug}
                image={
                  item.featuredImage === null
                  ? file.fluid :
                  item.featuredImage === undefined ?
                  file.fluid :
                  item.featuredImage.childImageSharp.fluid
                }
                category={item.category.category}
                date={item.date}
                featured
              />
              <Line color={setColor.lightGrey} />
            </div>
          )
        })}
        <Category category="News Update" url={`/categories/news-update`}>
          {_newsUpdate.map(data => {
            return (
              <div key={data.id}>
                <PostRow
                  heading={data.title}
                  text={data.post.metaDescription}
                  slug={data.post.slug}
                  date={data.date}
                  image={
                    data.featuredImage !== null
                      ? data.featuredImage.childImageSharp.fluid
                      : file.fluid
                  }
                />
                <Line color={setColor.lightGrey} />
              </div>
            )
          })}
        </Category>
        <Category category="Events" url={`/categories/events`}>
          {_events.map(data => {
            return (
              <div key={data.id}>
                <PostRow
                  heading={data.title}
                  text={data.post.metaDescription}
                  slug={data.post.slug}
                  date={data.date}
                  image={
                    data.featuredImage !== null
                      ? data.featuredImage.childImageSharp.fluid
                      : file.fluid
                  }
                />
                <Line color={setColor.lightGrey} />
              </div>
            )
          })}
        </Category>
        <Category
          category="Further Reading"
          url={`/categories/further-reading`}
        >
          {_furtherReading.map(data => {
            return (
              <div key={data.id}>
                <PostRow
                  heading={data.title}
                  text={data.post.metaDescription}
                  slug={data.post.slug}
                  date={data.date}
                  image={
                    data.featuredImage !== null
                      ? data.featuredImage.childImageSharp.fluid
                      : file.fluid
                  }
                />
                <Line color={setColor.lightGrey} />
              </div>
            )
          })}
        </Category>
        <Category category="Press Releases" url={`/categories/press-release`}>
          {_pressRelease.map(data => {
            return (
              <div key={data.id}>
                <PostRow
                  heading={data.title}
                  text={data.post.metaDescription}
                  slug={data.post.slug}
                  date={data.date}
                  image={
                    data.featuredImage !== null
                      ? data.featuredImage.childImageSharp.fluid
                      : file.fluid
                  }
                />
                <Line color={setColor.lightGrey} />
              </div>
            )
          })}
        </Category>
        <Category category="Technology" url={`/categories/technology`}>
          {_technology.map(data => {
            return (
              <div key={data.id}>
                <PostRow
                  heading={data.title}
                  text={data.post.metaDescription}
                  slug={data.post.slug}
                  date={data.date}
                  image={
                    data.featuredImage !== null
                      ? data.featuredImage.childImageSharp.fluid
                      : file.fluid
                  }
                />
                <Line color={setColor.lightGrey} />
              </div>
            )
          })}
        </Category>
        <Category category="Use Cases" url={`/categories/use-case`}>
          {_useCase.map(data => {
            return (
              <div key={data.id}>
                <PostRow
                  heading={data.title}
                  text={data.post.metaDescription}
                  slug={data.post.slug}
                  date={data.date}
                  image={
                    data.featuredImage !== null
                      ? data.featuredImage.childImageSharp.fluid
                      : file.fluid
                  }
                />
                <Line color={setColor.lightGrey} />
              </div>
            )
          })}
        </Category>
      </FeaturedRow>
      <div />
    </Grid>
    </Layout>
  )
}

const Grid = styled.div`
  ${media.tablet`  display: grid;
  grid-template-columns: 10vw 80vw 10vw;
  column-gap: ${setRem(5)};`};
`

const FeaturedRow = styled.div`
  padding: 0 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  h1 {
    text-align: center;
    margin: 20px 0;
    ${setFont}
    font-size: ${setRem(38)};
    color: ${setColor.mainBlack};
  }
`

const Title = styled.div`
  border-top: 3px solid ${setColor.mainBlack};
  margin-top: ${setRem(40)};
  ${media.tablet`
    border-top: 3px solid ${setColor.mainBlack}; 
    width: 5vw;
    margin-top: ${setRem(80)};`};
`
export const query = graphql`
  query($today: Date!) {
    featured: allStrapiPosts(
      sort: { order: DESC, fields: post___date }
      filter: { post: { featured: { eq: true }, publish: { eq: true }, date: { lte: $today} } }
    ) {
      nodes {
        id
        date(formatString: "MMMM DD, YYYY")
        author {
          author
          slug
        }
        category {
          category
          slug
        }
        post {
          date(formatString: "MMMM DD, YYYY")
          metaDescription
          featured
          publish
          slug
          video
        }
        tags {
          tag
          slug
        }
        title
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    newsUpdate: allStrapiPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "news-update" } }, date: { lte: $today} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        id
      }
    }
    events: allStrapiPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "events" } } , date: { lte: $today}}
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        id
      }
    }
    furtherReading: allStrapiPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "further-reading" } } , date: { lte: $today}}
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        id
      }
    }
    technology: allStrapiPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "technology" } } , date: { lte: $today}}
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        id
      }
    }
    pressRelease: allStrapiPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "press-release" } } , date: { lte: $today}}
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        id
      }
    }
    useCase: allStrapiPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "use-case" } } , date: { lte: $today}}
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        id
      }
    }
    hansFeatured: allStrapiZhchPosts(
      sort: { order: DESC, fields: post___date }
      filter: { post: { featured: { eq: true }, publish: { eq: true } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        id
        date(formatString: "MMMM DD, YYYY")
        author {
          author
          slug
        }
        category {
          category
          slug
          zhchSlug
          zhchCategory
        }
        post {
          date(formatString: "MMMM DD, YYYY")
          metaDescription
          featured
          publish
          slug
          video
        }
        tags {
          tag
          slug
        }
        title
        enPost {
          post {
            slug
          }
        }
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    hansNewsUpdate: allStrapiZhchPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "news-update" } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    hansEvents: allStrapiZhchPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "events" } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    hansFurtherReading: allStrapiZhchPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "further-reading" } }, date: { lte: $today} , enPost: {post: {slug: {ne: null}}}}
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    hansTechnology: allStrapiZhchPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "technology" } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    hansPressRelease: allStrapiZhchPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "press-release" } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    hansUseCase: allStrapiZhchPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "use-case" } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    hantFeatured: allStrapiZhtwPosts(
      sort: { order: DESC, fields: post___date }
      filter: { post: { featured: { eq: true }, publish: { eq: true } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        id
        date(formatString: "MMMM DD, YYYY")
        author {
          author
          slug
        }
        category {
          category
          slug
          zhtwCategory
          zhtwSlug
        }
        post {
          date(formatString: "MMMM DD, YYYY")
          metaDescription
          featured
          publish
          slug
          video
        }
        tags {
          tag
          slug
        }
        title
        enPost {
          post {
            slug
          }
        }
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    hantNewsUpdate: allStrapiZhtwPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "news-update" } }, date: { lte: $today} , enPost: {post: {slug: {ne: null}}}}
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    hantEvents: allStrapiZhtwPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "events" } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    hantFurtherReading: allStrapiZhtwPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "further-reading" } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    hantTechnology: allStrapiZhtwPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "technology" } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    hantPressRelease: allStrapiZhtwPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "press-release" } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    hantUseCase: allStrapiZhtwPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "use-case" } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    koFeatured: allStrapiKoPosts(
      sort: { order: DESC, fields: post___date }
      filter: { post: { featured: { eq: true }, publish: { eq: true } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        id
        date(formatString: "MMMM DD, YYYY")
        author {
          author
          slug
        }
        category {
          category
          slug
        }
        post {
          date(formatString: "MMMM DD, YYYY")
          metaDescription
          featured
          publish
          slug
          video
        }
        tags {
          tag
          slug
        }
        title
        enPost {
          post {
            slug
          }
        }
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    koNewsUpdate: allStrapiKoPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "news-update" } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    koEvents: allStrapiKoPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "events" } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    koFurtherReading: allStrapiKoPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "further-reading" } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    koTechnology: allStrapiKoPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "technology" } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    koPressRelease: allStrapiKoPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "press-release" } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    koUseCase: allStrapiKoPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "use-case" } }, date: { lte: $today}, enPost: {post: {slug: {ne: null}}} }
    ) {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        category {
          category
        }
        post {
          metaDescription
          slug
        }
        enPost {
          post {
            slug
          }
        }
        id
      }
    }
    categoriesPost: allStrapiCategories {
      nodes {
        category
        slug
      }
    }
    file(relativePath: { eq: "defaultImg.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default Index_Template
