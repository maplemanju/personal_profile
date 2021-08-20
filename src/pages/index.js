import * as React from 'react'
import Layout from '../components/layout'
//import { StaticImage } from 'gatsby-plugin-image'
import * as style from "./index.module.scss"


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">

      <section className={style.bigDivTop}>
        <div className={style.container}>
          <div className={style.layerTop}>
            <p>create magic</p>
          </div>
        </div>
      </section>

      <section className={style.bigDivWhite}>
      </section>
      <section className={style.bigDivSolid}></section>
      <section className={style.bigDivWhite}></section>
      <section className={style.bigDivSolid}></section>
      <section className={style.bigDivTrans}></section>
      <section className={style.bigDivDark}></section>

      <div className={style.background}>
        <Droplets count={5}/>
      </div>
    </Layout>
  )
}

export default IndexPage

function Droplets({count}){
  const items = []
  for (let i = 0; i < count; i++) {
    items.push(<div key={`drop-${i}`} className={style.droplet}></div>)
  }
  return items;
  
}