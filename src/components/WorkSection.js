import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as style from './WorkSection.module.scss'

const WorkSection = ({ slug }) => {

  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          slug
          frontmatter {
            title
            category
            tool
          }
          body
        }
      }
    }
  `)

  const work = data.allMdx.nodes.find(node => node.slug === slug);
  return(
    <div>
      <h2>{work.frontmatter.title}</h2>
      <p>{work.frontmatter.tool}</p>
      <div className={style.content}>
        <MDXRenderer>
          {work.body}
        </MDXRenderer>
      </div>
    </div>
  );

}

export default WorkSection
