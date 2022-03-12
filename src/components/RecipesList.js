import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div>
      <h4>Recipes list</h4>
      {recipes.map((recipe,index)=>{
        const pathToImage = getImage(recipe.image.gatsbyImageData);
        return (
          <Link key={index} to={`/${slugify(recipe.title, {lower:true})}`} className={'recipe'}>
            <GatsbyImage image={pathToImage}  alt={'recipe.title'} className={"gallery-img"}/>
            <h5>{recipe.title}</h5>
            <p>Prep: {recipe.prepTime}min | Cook: {recipe.cookTime}min</p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList;