import React from "react"
import { setColor, setRem, setFont, media } from "../styles"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Line from "./Globals/Line"
import Categories from "./Categories"
import PostRow from "./Globals/PostRow"
import Category from "./Globals/Category"

const Posts = () => {
  const {
    newsUpdate: { nodes: newsUpdate },
  } = useStaticQuery(getPosts)
  const {
    useCase: { nodes: useCase },
  } = useStaticQuery(getPosts)
  const {
    featured: { nodes: featured },
  } = useStaticQuery(getPosts)
  const {
    categories: { nodes: categories },
  } = useStaticQuery(getPosts)
  const {
    events: { nodes: events },
  } = useStaticQuery(getPosts)
  const {
    furtherReading: { nodes: furtherReading },
  } = useStaticQuery(getPosts)
  const {
    technology: { nodes: technology },
  } = useStaticQuery(getPosts)
  const {
    pressRelease: { nodes: pressRelease },
  } = useStaticQuery(getPosts)

  const {
    file: { childImageSharp: file },
  } = useStaticQuery(getPosts)

  return (
    <Grid>
      <div />
      <FeaturedRow>
        <Title>
          <h1>Blog</h1>
        </Title>
        <Categories />
        {featured.map(item => {
          return (
            <div key={item.id}>
              <PostRow
                heading={item.title}
                text={item.post.metaDescription}
                slug={`ko/${item.post.slug}`}
                image={
                  item.featuredImage !== null
                    ? item.featuredImage.childImageSharp.fluid
                    : file.fluid
                }
                category={item.category.koCategory}
                date={item.date}
                featured
              />
              <Line color={setColor.lightGrey} />
            </div>
          )
        })}

        <Category category="News Update" url={`/categories/news-update`}>
          {newsUpdate.map(data => {
            return (
              <div key={data.id}>
                <PostRow
                  heading={data.title}
                  text={data.post.metaDescription}
                  slug={`ko/${data.post.slug}`}
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
          {events.map(data => {
            return (
              <div key={data.id}>
                <PostRow
                  heading={data.title}
                  text={data.post.metaDescription}
                  slug={`ko/${data.post.slug}`}
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
          {furtherReading.map(data => {
            return (
              <div key={data.id}>
                <PostRow
                  heading={data.title}
                  text={data.post.metaDescription}
                  slug={`ko/${data.post.slug}`}
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
          {pressRelease.map(data => {
            return (
              <div key={data.id}>
                <PostRow
                  heading={data.title}
                  text={data.post.metaDescription}
                  slug={`ko/${data.post.slug}`}
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
          {technology.map(data => {
            return (
              <div key={data.id}>
                <PostRow
                  heading={data.title}
                  text={data.post.metaDescription}
                  slug={`ko/${data.post.slug}`}
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
          {useCase.map(data => {
            return (
              <div key={data.id}>
                <PostRow
                  heading={data.title}
                  text={data.post.metaDescription}
                  slug={`ko/${data.post.slug}`}
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
const getPosts = graphql`
  {
    featured: allStrapiKoPosts(
      sort: { order: DESC, fields: post___date }
      filter: { post: { featured: { eq: true }, publish: { eq: true } } }
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
    newsUpdate: allStrapiKoPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "news-update" } } }
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
    events: allStrapiKoPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "events" } } }
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
    furtherReading: allStrapiKoPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "further-reading" } } }
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
    technology: allStrapiKoPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "technology" } } }
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
    pressRelease: allStrapiKoPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "press-release" } } }
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
    useCase: allStrapiKoPosts(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "use-case" } } }
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
    categories: allStrapiCategories(
      filter: { posts: { elemMatch: { post: { publish: { eq: true } } } } }
    ) {
      nodes {
        category
        slug
        koSlug
        koCategory
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

export default Posts
