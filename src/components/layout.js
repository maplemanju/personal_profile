import * as React from 'react'
//import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as style from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {

  //sample query
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div>
      <header> 
        <div className={style.headerBlock}>
          <div className={style.clouds}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={style.container}>
          <StaticImage
            alt="amayadori logo"
            src="../images/logo.png"
            width={335}
            className={style.logo}
          />
          </div>
        </div>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <div className={style.container}></div>
      </footer>
    </div>
  )
}

export default Layout