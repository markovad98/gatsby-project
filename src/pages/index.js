import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.warn("DATA: ", data)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.contentfulProducts.productTitle}</h1>
      <img src={data.contentfulProducts.productImage.resolutions.src} alt=""/>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
export const query = graphql`
  query PageQuery {
    contentfulProducts {
      productTitle
      productImage {
        id
        resolutions(width: 200, height: 200, resizingBehavior: THUMB) {
          src
        }
      }
    }
  }
`

export default IndexPage
