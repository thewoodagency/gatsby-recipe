import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {BsClockHistory, BsClock, BsPeople} from "react-icons/all"
import Layout from '../components/Layout'
import SEO from "../components/SEO"

const RecipeTemplate = props => {
  const title = props.pageContext.title
  const recipe = props.data.contentfulRecipe;
  const {tags, instructions, ingredients, tools} = recipe.content;
  const pathToImage = getImage(recipe.image.gatsbyImageData);
  return (
    <Layout>
      <SEO />
      <main className={'page'}>
        <div className={'recipe-page'}>
          <article className="homeBody">
            <section className="recipe-hero">
              <GatsbyImage image={pathToImage}  alt={'recipe.title'} className={"about-img"}/>
              <article className="recipe-info">
                <h2>{recipe.title}</h2>
                <p>{recipe.description.description}</p>
                <div className="recipe-icons">
                  <article>
                    <BsClock />
                    <h5>Prep time: {recipe.prepTime} min.</h5>
                  </article>
                  <article>
                    <BsClockHistory />
                    <h5>Cook time: {recipe.cookTime} min.</h5>
                  </article>
                  <article>
                    <BsPeople />
                    <h5>Serving: {recipe.servings}</h5>
                  </article>
                </div>
                <p className="recipe-tags">
                  Tags:
                  {tags.map((tag, index)=> <Link key={index} to={`/${tag}`}>{tag}</Link>)}
                </p>
              </article>
            </section>
            <section className="recipe-content">
              <article>
                <h4>Instructions</h4>
                {instructions.map((instruction, index) => <div key={index} className={'single-instruction'}>
                  <header>
                    <p>STEP {index+1}</p>
                    <div></div>
                  </header>
                  <p>{instruction}</p>
                </div>)}
              </article>
              <article className={'second-column'}>
                <div>
                  <h4>Ingredients</h4>
                  {ingredients.map((ingredient,index) => <p key={index} className={'single-ingredient'}>{ingredient}</p>)}
                </div>
                <div>
                  <h4>Tools</h4>
                  {tools.map((tool,index) => <p key={index} className={'single-tool'}>{tool}</p>)}
                </div>
              </article>
            </section>

          </article>
        </div>
      </main>
    </Layout>
  )
}

export default RecipeTemplate

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`
