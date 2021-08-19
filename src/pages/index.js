import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import * as style from "./index.module.scss"


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <section className={style.bigDivTop}>
        <div className={style.container}>
          <div className={style.layerTop}></div>
        </div>
      </section>

      <section className={style.bigDivSolid}>
      </section>

      <section className={style.bigDivWhite}>
      </section>

      <section className={style.bigDivSolid}>
      </section>

      <div className={style.background}></div>
    </Layout>
  )
}

export default IndexPage