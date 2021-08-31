import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { getSrc } from "gatsby-plugin-image"
import Layout from './layout'
import Seo from './seo'
import * as style from "./work-layout.module.scss"

const WorkPost = ({data}) => {
  const thumnbail = getImage(data.mdx.frontmatter.featured_image);
  const links = (type) => {
    let link = "";
    if(type==="git") {
      if(data.mdx.frontmatter.git) {
        link = <a href={data.mdx.frontmatter.git} title="GitHub" aria-label="GitHub" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
      }
    } else {
      link = <a href={data.mdx.frontmatter.url} title="Go to website" aria-label="Go to website" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg></a>
    }
    return link;
  }
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
    <Seo title={data.mdx.frontmatter.title} description={`Developed by Maya on ${data.mdx.frontmatter.tool}`} image={getSrc(thumnbail)}/>
      <div className={style.container}>
        <div className={style.topInfo}>
          <p className={style.tool}>{data.mdx.frontmatter.tool}</p>
          <div className={style.pageLinks}>
            {links("git")}
            {links("url")}
          </div>
        </div>
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
export default WorkPost

export const query = graphql`
  query ($slug: String, $locale: String) {
    mdx(
      frontmatter: { slug: { eq: $slug } }
      fields: {locale: {eq: $locale}}
    ) {
      frontmatter {
        title
        category
        tool
        url
        git
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