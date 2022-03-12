import React from 'react'
import {Helmet} from "react-helmet"
import {useStaticQuery, graphql} from "gatsby"

const SEO = ({title, description, keywords}) => {
  const {site} = useStaticQuery(query)
  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = keywords || site.siteMetadata.keywords
  return (
    <Helmet
      htmlAttributes={{lang: 'en'}}
      title={metaTitle}
      meta={[
        {name:`description`, content: metaDescription},
        {name:`keywords`, content: metaKeywords}
      ]}
    >
    </Helmet>
  )
}

export default SEO

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`