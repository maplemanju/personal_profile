import React, { useRef, useState } from 'react'
//import { StaticImage } from 'gatsby-plugin-image'
import * as style from "./index.module.scss"

import Layout from '../components/layout'
import WorkSection from '../components/WorkSection'
import WildseasarBg from '../../works/wild-seasar/wild-seasar-top.jpg';
import TenkaichiBg from  "../../works/tenkaichi/tenkaichi-site.jpg";

const IndexPage = ({data}) => {
  const [currentSection, setCurrentSection] = useState(0);
 // const [scrollTopState, setScrollTopState] = useState(0);
  const currentRef = useRef();
  const mainRef = useRef();

  let lastScroll = 0;
  window.addEventListener('scroll', (event) => {
    //event.stopImmediatePropagation();
    //event.preventDefault();
    const scrollY = window.scrollY;
    //console.log(`onScroll, window.scrollY: ${scrollY}`)
    const sections = mainRef.current.querySelectorAll("section");
    if (scrollY > lastScroll) { //going down
      onScrollEffect(sections, scrollY, true);
    } else { //going up
      onScrollEffect(sections, scrollY, false);
    }
    lastScroll = scrollY;
  });

  const onScrollEffect = (sections, scrollY, goingDown) => {
    sections.forEach((section, i) => {
      const secTop = section.offsetTop - 300
      const secBot = section.offsetTop + section.offsetHeight - 300
      const viewPos = goingDown ? (scrollY >= secTop && scrollY <= secBot) : (scrollY >= secTop && scrollY <= secBot)
      if(viewPos) {
         if(currentSection !== i) {
          setCurrentSection(i);
        }
      }
    });
   }

  const sectionsObj = [
   { 
      title: "asdas",
      class: style.bigDivTop,
      children:
      <div className={style.layerTop}>
        <p>aspiring React developer</p>
        <p>front end developer</p>
        <p>create magic</p>
      </div>
    },
    {
      slug: "chat-bot",
      class: style.bigDivSolid
    },
    {
      slug: "wild-seasar",
      title: "Corporate Sites",
      class: style.bigDivSolid,
      children: 
      <div className={style.splashStyle1}>
        <div style={{backgroundImage: `url(${WildseasarBg})`}}></div>
        <div style={{backgroundImage: `url(${TenkaichiBg})`}}></div>
      </div>
    }
  ]
  return (
    <Layout pageTitle="Home Page" mainRef={mainRef}>

    {sectionsObj.map((section, i) => {
      let content = "";
      const classes = currentSection === i ? `${style.activeSec} ${section.class} ` : section.class;
      if (section.slug) {
        content = <WorkSection slug={section.slug} title={section.title}>{section.children}</WorkSection>
      } else {
        content = section.children;
      }
      return (
        <section className={classes} key={`section-${i}`}>  
          <div className={style.container}>
            {content}
          </div>
        </section>
      );
    })}
      
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

