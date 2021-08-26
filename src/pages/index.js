import React, { useRef, useState } from 'react'
//import { StaticImage } from 'gatsby-plugin-image'
import * as style from "./index.module.scss"
import Layout from '../components/layout'
import WorkSection from '../components/WorkSection'
import WildseasarBg from '../../works/wild-seasar/wild-seasar-thumb1.jpg'
import TenkaichiBg from  "../../works/tenkaichi/tenkaichi-thumb1.jpg"
import ChatBot from '../components/ChatBot/ChatBot'
import { Link } from 'gatsby'

const IndexPage = ({data}) => {
  const [currentSection, setCurrentSection] = useState(0);
  const mainRef = useRef();

  React.useEffect(() => {
    
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

    let lastScroll = 0;
    const scrollIndex = (event) => {
      event.preventDefault();
      const scrollY = window.scrollY;
      const sections = mainRef.current.querySelectorAll("section");
      if (scrollY > lastScroll) { //going down
        onScrollEffect(sections, scrollY, true);
      } else { //going up
        onScrollEffect(sections, scrollY, false);
      }
      lastScroll = scrollY;
    }

    window.addEventListener('scroll', scrollIndex);
    return () => {
      window.removeEventListener('scroll', scrollIndex);
    };
    
  }, [currentSection]);

  const sectionsObj = [
   { 
      title: "asdas",
      class: style.bigDivTop,
      children:
      <div className={style.layerTop}>
        <p className={style.animShowletters}>Hello, I'm Clemente</p>
        <p className={style.animShowletters}>aspiring React dev</p>
        <p className={style.animShowletters}>front end dev</p>
      </div>
    },
    {
      slug: "chat-bot",
      class: style.bigDivSolid,
      children: 
        <div className={style.chatBotFrame}><ChatBot/></div>
    },
    {
      slug: "wild-seasar",
      title: "Corporate Sites",
      class: style.bigDivSolid,
      children: 
      <div className={style.splashStyle1}>
        <div style={{backgroundImage: `url(${WildseasarBg})`}}><Link to="/works/wild-seasar" alt="Wild Seasar Homepage"></Link></div>
        <div style={{backgroundImage: `url(${TenkaichiBg})`}}><Link to="/works/tenkaichi" alt="Tenkaichi Homepage"></Link></div>
      </div>
    }
  ]
  return (
    <Layout pageTitle="Home" mainRef={mainRef}>

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

