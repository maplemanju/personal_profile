import * as React from 'react'
import * as styles from './pikachu.module.scss'
import Translate from '../../components/translation'
import Seo from '../../components/seo'
import Layout from '../../components/layout'

const ArtBoard = () => {
  return(
    <Layout pageTitle="CSS Art: Pikachu">
      <Seo title="Pikachu - CSS ART" description="Pikachu on CSS" />
      <Pikachu/>
    </Layout>
  )
}

const Pikachu = () => {
  return(
    <div className={styles.contain}>
      <div className={styles.head}>
        <div className={styles.ears}>
          <div className={styles.ear}></div>
          <div className={styles.ear}></div>
        </div>
        <div className={styles.eyes}></div>
        <div className={styles.nose}></div>
        <div className={styles.mouth}></div>
        <div className={styles.cheeks}></div>
      </div>
    </div>
  )
}

export default ArtBoard
