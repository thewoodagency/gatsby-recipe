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
          recipe.content.tags.forEach(tag => {
            console.log('tag', tag);
            <p>{tag}</p>
          })
        )
      })}
    </div>
  )
}

export default TagsList;