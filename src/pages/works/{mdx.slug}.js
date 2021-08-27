import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { getSrc } from "gatsby-plugin-image"
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import * as style from "./index.module.scss"

const BlogPost = ({data}) => {
  const thumnbail = getImage(data.mdx.frontmatter.featured_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
    <Seo title={data.mdx.frontmatter.title} description={`Developed by Maya on ${data.mdx.frontmatter.tool}`} image={getSrc(thumnbail)}/>
      <div className={style.container}>
        <p className={style.tool}>{data.mdx.frontmatter.tool}</p>
        <div className={style.featuredImage}>
          <a href={data.mdx.frontmatter.url}>
            <GatsbyImage image={thumnbail} alt={data.mdx.frontmatter.title} />
          </a>
        </div>
        <div className={style.content}>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}
export default BlogPost

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        category
        tool
        url
        featured_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        featured_image2 {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`