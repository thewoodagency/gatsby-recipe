import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: {grayscale: true}
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query);
  //console.log('data', data.allFile.nodes[0].gatsbyImageData.images.source);
  return (
    <Wrapper>
      {data.allFile.nodes.map((image, index) => {
        const pathToImage = getImage(image);
        return (
          <article key={index} className={'item'}>
            <GatsbyImage image={pathToImage}  alt={'fuck'} className={"gallery-img"}/>
            {image.name}
          </article>
        )
      })}
    </Wrapper>
  )
}

export default Gallery

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: center;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 2rem;
  }
`
