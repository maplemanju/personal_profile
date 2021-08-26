import * as React from 'react'
import * as style from './layout.module.scss'
import { Link } from 'gatsby'

const Layout = ({ children, mainRef, pageTitle }) => {

  let contents;  
  if(pageTitle!== "Home") {
    contents = 
    <div>
      <section className={style.bigDivTop}>  
        <div className={style.container}>
          <h1>{pageTitle}</h1>
        </div>
      </section>
      <section className={style.contents}>
        {children}
      </section>
    </div>
  } else {
    contents = children;
  }
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
          <div className={style.logo}><Link to="/">Amayadori</Link></div>
          </div>
        </div>
      </header>

      <main ref={mainRef}>
        {contents}
        <div className={style.background}>
          <Droplets count={5}/>
        </div>

      </main>
      

      <footer>
        <div className={style.container}>
          <div className={style.snsLinks}>
            <Link to="/works" title="Works">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/></svg>
              <span>Works</span>
            </Link>
            <a href="https://amayadori.cloud/" title="Blog">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.009 13.388c-1.771 2.408-4.399 4.783-7.359 4.396-.801 1.119-1.695 2.682-2.688 4.496l-2.296.72c1.943-3.79 4.537-7.981 7.32-11.166-1.205.785-3.185 2.473-4.908 4.253-1.554-3.246.085-6.253 2.458-8.548-.067 1.081.413 2.068.772 2.575-.062-.904.044-2.52.704-3.92 1.323-1.116 2.492-1.92 3.829-2.622-.217.791-.033 1.739.222 2.331.116-.82.603-2.368 1.167-3.01 1.667-1.075 4.135-1.936 6.77-1.892-.291 1.623-1.143 4.258-2.294 5.893-.929.597-2.157.946-3.137 1.115.811.228 1.719.293 2.509.235-.575 1.207-1.157 2.311-2.039 3.666-1.216.679-2.77.978-3.832 1.035.743.389 2.097.617 2.802.443zm-14.009 8.612h-4v1h4v-1z"/></svg>
              <span>Blog</span>
            </a>
            <a href="https://github.com/maplemanju" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span>GitHub</span>
            </a>
            <a href="https://codepen.io/amayadoring" title="CodePen">
              <svg width="24" height="24" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g id="_x36__stroke"><g id="Codepen"><rect fill="none" height="128" width="128"/><path d="M117,73.204L103.24,64L117,54.796V73.204z     M69.5,112.22V86.568L93.348,70.62l19.248,12.872L69.5,112.22z M64,77.012L44.548,64L64,50.988L83.456,64L64,77.012z M58.5,112.22    L15.404,83.492L34.656,70.62L58.5,86.568V112.22z M11,54.796L24.764,64L11,73.204V54.796z M58.5,15.78v25.652L34.656,57.384    L15.404,44.508L58.5,15.78z M69.5,15.78l43.096,28.728L93.348,57.384L69.5,41.432V15.78z M127.952,43.784    c-0.012-0.084-0.032-0.16-0.044-0.24c-0.028-0.156-0.056-0.312-0.096-0.46c-0.024-0.092-0.06-0.18-0.088-0.268    c-0.044-0.136-0.088-0.268-0.14-0.4c-0.036-0.092-0.08-0.184-0.124-0.268c-0.056-0.128-0.116-0.248-0.188-0.364    c-0.048-0.088-0.104-0.172-0.156-0.256c-0.072-0.116-0.148-0.228-0.232-0.336c-0.06-0.08-0.124-0.16-0.188-0.236    c-0.088-0.104-0.18-0.204-0.276-0.3c-0.072-0.072-0.14-0.148-0.216-0.212c-0.104-0.092-0.208-0.18-0.312-0.264    c-0.084-0.064-0.164-0.128-0.248-0.188c-0.032-0.02-0.06-0.048-0.092-0.068l-58.5-39c-1.848-1.232-4.252-1.232-6.104,0l-58.496,39    c-0.032,0.02-0.06,0.048-0.092,0.068c-0.088,0.06-0.168,0.124-0.248,0.188C2.004,40.264,1.9,40.352,1.8,40.444    c-0.076,0.064-0.148,0.14-0.22,0.212c-0.096,0.096-0.188,0.196-0.272,0.3c-0.068,0.076-0.132,0.156-0.192,0.236    c-0.08,0.108-0.156,0.22-0.228,0.336c-0.056,0.084-0.108,0.168-0.16,0.256C0.66,41.9,0.6,42.02,0.54,42.148    c-0.04,0.084-0.084,0.176-0.12,0.268c-0.056,0.132-0.1,0.264-0.144,0.4c-0.028,0.088-0.06,0.176-0.084,0.268    c-0.04,0.148-0.068,0.304-0.096,0.46c-0.016,0.08-0.036,0.156-0.044,0.24C0.02,44.016,0,44.256,0,44.5v39    c0,0.24,0.02,0.48,0.052,0.72c0.008,0.076,0.028,0.156,0.044,0.236c0.028,0.156,0.056,0.308,0.096,0.46    c0.024,0.092,0.056,0.18,0.084,0.268c0.044,0.132,0.088,0.268,0.144,0.404c0.036,0.088,0.08,0.176,0.12,0.264    c0.06,0.124,0.12,0.244,0.188,0.368c0.052,0.084,0.104,0.168,0.16,0.252c0.072,0.116,0.148,0.224,0.228,0.332    c0.06,0.084,0.124,0.164,0.192,0.24c0.084,0.1,0.176,0.204,0.272,0.296c0.072,0.076,0.144,0.148,0.22,0.216    c0.1,0.092,0.204,0.18,0.312,0.264c0.08,0.064,0.16,0.128,0.248,0.188c0.032,0.02,0.06,0.048,0.092,0.068l58.496,39    C61.872,127.692,62.936,128,64,128s2.128-0.308,3.052-0.924l58.5-39c0.032-0.02,0.06-0.048,0.092-0.068    c0.084-0.06,0.164-0.124,0.248-0.188c0.104-0.084,0.208-0.172,0.312-0.264c0.076-0.068,0.144-0.14,0.216-0.216    c0.096-0.092,0.188-0.196,0.276-0.296c0.064-0.076,0.128-0.156,0.188-0.24c0.084-0.108,0.16-0.216,0.232-0.332    c0.052-0.084,0.108-0.168,0.156-0.252c0.072-0.124,0.132-0.244,0.188-0.368c0.044-0.088,0.088-0.176,0.124-0.264    c0.052-0.136,0.096-0.272,0.14-0.404c0.028-0.088,0.064-0.176,0.088-0.268c0.04-0.152,0.068-0.304,0.096-0.46    c0.012-0.08,0.032-0.16,0.044-0.236c0.032-0.24,0.048-0.48,0.048-0.72v-39C128,44.256,127.984,44.016,127.952,43.784z" fill="#0B0B0A" id="Codepen_1_"/></g></g></svg>
              <span>CodePen</span>
            </a>            
          </div>
          <div>© {new Date().getFullYear()} Clemente - Amayadori.cloud</div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

function Droplets({count}){
  const drops = []
  for (let i = 0; i < count; i++) {
    drops.push(<div key={`drop-${i}`} className={style.droplet}></div>)
  }
  return drops;
}

