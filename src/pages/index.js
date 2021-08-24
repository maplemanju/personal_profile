import React, { useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as style from "./index.module.scss"

import Layout from '../components/layout'
import WorkSection from '../components/WorkSection'
import WildseasarBg from '../../works/wild-seasar/wild-seasar-top.jpg';
import TenkaichiBg from  "../../works/tenkaichi/tenkaichi-site.jpg";

const IndexPage = ({data}) => {
  const chatSec = useRef();
  return (
    <Layout pageTitle="Home Page">

      <section className={style.bigDivTop}>
        <div className={style.container}>
          <div className={style.layerTop}>
            <p>aspiring React developer</p>
            <p>front end developer</p>
            <p>create magic</p>
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
          <WorkSection slug="wild-seasar" title="Corporate Sites">
            <div className={style.splashStyle1}>
              <div style={{backgroundImage: `url(${WildseasarBg})`}}></div>
              <div style={{backgroundImage: `url(${TenkaichiBg})`}}></div>
            </div>
          </WorkSection>
        </div>
      </section>

      <section className={style.bigDivWhite}>
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
