import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as style from './WorkSection.module.scss'

const WorkSection = (props) => {

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

  const work = data.allMdx.nodes.find(node => node.slug === props.slug+"/");
  const title = props.title ? props.title : work.frontmatter.title
  return(
    <div className={style.workBody}>
      <h2 className={style.secHead}>{title}</h2>
      <p className={style.tool}>{work.frontmatter.tool}</p>
      <div className={style.content}>
        {props.children}
        <MDXRenderer>
          {work.body}
        </MDXRenderer>
      </div>
    </div>
  );

}

export default WorkSection
