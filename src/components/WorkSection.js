import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useLocalization } from "gatsby-theme-i18n"
import * as style from './WorkSection.module.scss'

const WorkSection = (props) => {
  const { locale } = useLocalization();
  const data = useStaticQuery(graphql`
      query {
        ja: allMdx(filter: {fields: {locale: {eq: "ja"}}}) {
          nodes {
            frontmatter {
              slug
              title
              category
              tool
            }
            body
          }
        }
        en: allMdx(filter: {fields: {locale: {eq: "en"}}}) {
          nodes {
            frontmatter {
              slug
              title
              category
              tool
            }
            body
          }
        }
      }
    `);


  const work = data[locale].nodes.find(node => node.frontmatter.slug === props.slug);
  const title = props.title ? props.title : work.frontmatter.title
  return(
    <div className={style.workBody}>
      <h2 className={style.secHead}><span>{title}</span></h2>
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
