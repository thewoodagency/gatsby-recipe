import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => {
  return (
    <Wrapper>
      <article>
        <h4>Constrained</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt={"images"}
          placeholder={"tracedSVG"}
          layout={"constrained"}
          className={"example-img"}
          as={"section"}
        />
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt={"images"}
          placeholder={"blurred"}
          layout={"fixed"}
          className={"example-img"}
          as={"div"}
          width={200}
        />
      </article>
      <article>
        <h4>full</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt={"images"}
          placeholder={"dominantColor"}
          layout={"fullWidth"}
          className={"example-img"}
          as={"article"}
        />
      </article>
    </Wrapper>
  )
}

export default Image

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;

  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
