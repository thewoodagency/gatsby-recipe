import React from 'react';
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const TagsList = ({recipes = []}) => {
  console.log('tags', recipes);
  return (
    <div>
      <h4>Tags</h4>
      {recipes.map((recipe, index) => {
        return (
          <li key={index}>{recipe.content.tags[0]}</li>
        )
      })}
    </div>
  )
}

export default TagsList;