import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div>
      <h4>Recipes list</h4>
      {recipes.map((recipe,index)=>{
        const pathToImage = getImage(recipe.image.gatsbyImageData);
        return (
          <article key={index} className={'item'}>
            <GatsbyImage image={pathToImage}  alt={'fuck'} className={"gallery-img"}/>
            {recipe.title}
          </article>
        )
      })}
    </div>
  )
}

export default RecipesList;