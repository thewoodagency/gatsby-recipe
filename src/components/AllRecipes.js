import React from 'react';
import { graphql, useStaticQuery } from "gatsby"

import RecipesList from "./RecipesList"
import TagsList from "./TagsList"

const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: TRACED_SVG
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

const AllRecipes = () => {
  //console.log('recipes', recipes.allContentfulRecipe.nodes);

  //const { allContentfulRecipe: {node: recipes} } = useStaticQuery(query);
  //const { nodes } = allContentfulRecipe
  const recipes = useStaticQuery(query).allContentfulRecipe.nodes;
  return (
    <>
      <TagsList recipes={recipes}/>
      <RecipesList recipes={recipes}/>
    </>
  )
}

export default AllRecipes;