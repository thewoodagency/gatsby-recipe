import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Gallery from "../examples/Hero"
import setupTags from "../utils/setupTags"
import SEO from "../components/SEO"

const tags = props => {
  console.log("props", props)
  const sortedTags = setupTags(props.data.allContentfulRecipe.nodes);

  const tagslist = sortedTags.map((tag, index) => {
    const [text, value] = tag;
    return (
      <Link to={`/${text}`} key={index} className={'tag'}>
        <h5>{text}</h5>
        <p>{value} recipe</p>
      </Link>
    )
  });

  return (
    <Layout>
      <SEO />
      <main className="page">
        <h1>Tags</h1>
        <section className={'tags-page'}>
          {tagslist}
        </section>
        <Gallery />
      </main>
    </Layout>
  )
}

export default tags
export const query2 = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
