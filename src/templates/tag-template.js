import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import slugify from "slugify"

const TagTemplate = props => {
  console.log("props", props.data)
  const recipes = props.data.allContentfulRecipe.nodes
  const tag = props.pageContext.tag
  return (
    <Layout>
      <main className={"page"}>
        <article className="homeBody">
          <h2>{tag}</h2>
          {recipes.map((recipe, index) => {
            const pathToImage = getImage(recipe.image.gatsbyImageData)
            const tags = recipe.content.tags
            return (
              <section className={"recipe"}>
                <h3>{recipe.title}</h3>
                <Link key={index} to={`/${slugify(recipe.title, {lower:true})}`} className={'recipe'}>
                  <GatsbyImage alt={recipe.title} image={pathToImage} className={'recipe-img'} />
                </Link>

                <p className="recipe-tags">
                  Tags:
                  {tags.map((tag, index) => (
                    <Link key={index} to={`/${tag}`}>
                      {tag}
                    </Link>
                  ))}
                </p>
              </section>
            )
          })}
        </article>
      </main>
    </Layout>
  )
}

export default TagTemplate

export const query = graphql`
  query getRecipes($tag: String) {
    allContentfulRecipe(
      filter: { content: { tags: { eq: $tag } } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
      }
    }
  }
`
