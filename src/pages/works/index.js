import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import Translate from '../../components/translation'
import Seo from '../../components/seo'
import Layout from '../../components/layout'
import * as style from "./index.module.scss"

const Works = ({ data }) => {
  return (
    <Layout pageTitle={<Translate>Works</Translate>}>
    <Seo title="Works" description="List of apps and sites developed by Amayadori." />
    <div className={style.container}>
    <ul className={style.worksList}>
      {data.allFile.nodes.map((item, i)=> {
        const info = item.childMdx.frontmatter;
        const thumnbail = getImage(info.featured_image);
        const thumnbail2 = getImage(info.featured_image2);
        const thumbClass = thumnbail ? style.thumb : `${style.noimg} ${style.thumb}`;
        return (
          <li key={`worklist-${i}`}>
          <Link to={`/works/${info.slug}`}>
            <div className={thumbClass}>
              <GatsbyImage className={style.thumb1} image={thumnbail} alt={info.title} height={200} />
              <GatsbyImage className={style.thumb2} image={thumnbail2} alt={info.title} height={200} />
            </div>
            <p>{info.title}</p>
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
  query($locale: String) {
    allFile(
      sort: {order: DESC, fields: childMdx___frontmatter___publish_date}
      filter: {
        sourceInstanceName: { eq: "works" }
        childMdx: { fields: { locale: { eq: $locale } } }
      }
      ) {
      nodes {
        childMdx {
          frontmatter {
            slug
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
  }
`