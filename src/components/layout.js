import * as React from 'react'
import * as style from './layout.module.scss'

const Layout = ({ children, mainRef }) => {

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
          <div className={style.logo}>Amayadori</div>
          </div>
        </div>
      </header>

      <main ref={mainRef}>
        {children}
      </main>

      <footer>
        <div className={style.container}>
          <div>copyright 2021</div>
          <div>
            <a></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout