import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Gallery from "../examples/Hero"

const tags = props => {
  console.log("props", props)
  return (
    <Layout>
      <main className="page">
        <h1>Tags</h1>
        <h3>{props.data.site.info.title}</h3>
        <Gallery />
      </main>
    </Layout>
  )
}

export default tags
export const data = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
        simpleData
        complexData {
          name
        }
      }
    }
  }
`
