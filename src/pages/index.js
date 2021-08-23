import React, { useRef } from 'react'
//import { StaticImage } from 'gatsby-plugin-image'
import * as style from "./index.module.scss"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import WorkSection from '../components/WorkSection'


const IndexPage = ({data}) => {
  const chatSec = useRef();
  return (
    <Layout pageTitle="Home Page">

      <section className={style.bigDivTop}>
        <div className={style.container}>
          <div className={style.layerTop}>
          <iframe src="http://localhost:3000/" width="400" height="500" style={{border: "0px",maxWidth: "90%" }}></iframe>
          </div>
        </div>
      </section>

      <section className={style.bigDivWhite} ref={chatSec}>
        <div className={style.container}>
          <WorkSection slug="chat-bot" />
        </div>
      </section>

      <section className={style.bigDivSolid}>
        <div className={style.container}>
          <WorkSection slug="wild-seasar" />
        </div>
      </section>

      <section className={style.bigDivSolid}>
        <div className={style.container}>
          <WorkSection slug="lol-eslib" />
        </div>
      </section>

      <div className={style.background}>
        <Droplets count={5}/>
      </div>
    </Layout>
  )
}

export default IndexPage

function Droplets({count}){
  const drops = []
  for (let i = 0; i < count; i++) {
    drops.push(<div key={`drop-${i}`} className={style.droplet}></div>)
  }
  return drops;
}
