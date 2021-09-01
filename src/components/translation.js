import { useLocalization } from "gatsby-theme-i18n"

const Translation = ({children}) => {
  const { locale } = useLocalization()

  const translations = {
    "topFade1" : {
      en: "Hello, I'm Clemente",
      ja: "クレメンテです",
    },
    "topFade2" : {
      en: "aspiring React dev",
      ja: "Reactプログラマー",
    },
    "topFade3" : {
      en: "front end dev",
      ja: "フロントエンジニア",
    },
    "Corporate Sites"  : {
      en: "Corporate Sites",
      ja: "企業サイト",
    },
    "Works" : {
      en: "Works",
      ja: "制作実績",
    },
    "Blog" : {
      en: "Blog",
      ja: "ブログ",
    }

  }
  const finalStr = translations[children] ? translations[children][locale] : children;
  return finalStr
}


export default Translation;