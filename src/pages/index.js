import React from "react"
import Layout from "../components/Layout"
import { Button } from "../examples/button"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import SEO from '../components/SEO'

export default function Home() {
  return (
    <Layout>
      <SEO title={'HomePage'} description={'recipe homepage'} keywords={'homekey1, homekey2'}/>
      <Wrapper>
        <main className="page">
          <header className={"hero"}>
            <StaticImage
              src="../assets/images/main.jpeg"
              alt={"egg"}
              placeholder={"tracedSVG"}
              layout={"fullWidth"}
              className={"hero-img"}
            />
            <div className={"hero-container"}>
              <div className={"hero-text"}>
                <h1>Simply recipes</h1>
                <h4>no fluff, just recipes</h4>
              </div>
            </div>
          </header>
          <article className="homeBody">
            <h1>Hello world!</h1>
            <Button>Click ME</Button>
            <p className="text">
              You have to die, and acquire result by your wrestling.Emeritis rumor
              callide contactuss mens est.
            </p>
            <AllRecipes />
          </article>
        </main>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  h1 {
    color: aqua;
  }
  .text {
    text-transform: uppercase;
  }
`
