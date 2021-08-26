import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import * as style from "./index.module.scss"

const Works = ({ data }) => {
  return (
    <Layout pageTitle="Works">
    <div className={style.container}>
    <ul className={style.worksList}>
      {data.allMdx.nodes.map((item, i)=> {
        const thumnbail = getImage(item.frontmatter.featured_image);
        const thumnbail2 = getImage(item.frontmatter.featured_image2);
        const thumbClass = thumnbail ? style.thumb : `${style.noimg} ${style.thumb}`;
        return (
          <li key={`worklist-${i}`}>
          <Link to={`/works/${item.slug}`}>
            <div className={thumbClass}>
              <GatsbyImage className={style.thumb1} image={thumnbail} alt={item.frontmatter.title} height={200} />
              <GatsbyImage className={style.thumb2} image={thumnbail2} alt={item.frontmatter.title} height={200} />
            </div>
            <p>{item.frontmatter.title}</p>
          </Link>
          </li>
        );
      })}
    </ul>
    </div>
    </Layout>
  )
}

export default Works

export const query = graphql`
  query {
    allMdx(sort: {order: DESC, fields: frontmatter___publish_date}) {
      nodes {
        slug
        frontmatter {
          title
          category
          tool
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
      }
    }
  }
`