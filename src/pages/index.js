import React, { useRef, useState } from 'react'
//import { StaticImage } from 'gatsby-plugin-image'
import * as style from "./index.module.scss"
import Layout from '../components/layout'
import WorkSection from '../components/WorkSection'
import WildseasarBg from '../../works/wild-seasar/wild-seasar-top.jpg'
import TenkaichiBg from  "../../works/tenkaichi/tenkaichi-site.jpg"
import ChatBot from '../components/ChatBot/ChatBot'

const IndexPage = ({data}) => {
  const [currentSection, setCurrentSection] = useState(0);
  const mainRef = useRef();

  let lastScroll = 0;
  window.addEventListener('scroll', (event) => {
    const scrollY = window.scrollY;
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
      class: style.bigDivSolid,
      children: 
        <div>
          <ChatBot/>
          <p>Chat strings are pulled from json file as object. Its nodes have a pair of messages and choices, and the object gets updated every selection made by the user.</p>
        </div>
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
      
    </Layout>
  )
}

export default IndexPage

