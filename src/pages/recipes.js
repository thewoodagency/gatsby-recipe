import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"

const recipes = () => {
  return (
    <Layout>
      <main className="page">
      <h1>Recipes</h1>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default recipes
