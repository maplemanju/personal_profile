import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import * as style from "./index.module.scss"

const Works = ({ data }) => {
  return (
    <Layout>
    <div className={style.container}>
    {data.allMdx.nodes.map((item)=> {
      return (
        <div>
          <h2><span>{item.frontmatter.title}</span></h2>
        </div>
      );
    })}
    </div>
    </Layout>
  )
}

export default Works

export const query = graphql`
  query {
    allMdx {
      nodes {
        slug
        frontmatter {
          title
          category
          tool
        }
      }
    }
  }
`