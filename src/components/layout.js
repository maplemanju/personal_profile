import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  container,
  body,
} from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {

  //sample query
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={body}>
      <header>
        <div className={container}>
        <StaticImage
          alt="amayadori logo"
          src="../images/logo.png"
          width="335"
        />
        </div>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <div className={container}></div>
      </footer>
    </div>
  )
}

export default Layout