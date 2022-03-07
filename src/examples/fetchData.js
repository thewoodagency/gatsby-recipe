import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
    {
      site {
        info:siteMetadata {
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

// const FetchData = () => {
//   const data = useStaticQuery(getData)
//   return <pre>{JSON.stringify(data, null, 4)}</pre>
// }
const FetchData = () => {
  const {
    site: {
      info: {title},
    }
  } = useStaticQuery(getData)
  return (
    <div><h2>Title is: {title}</h2></div>
  )
}

export default FetchData
