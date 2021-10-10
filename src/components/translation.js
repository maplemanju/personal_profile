import { useLocalization } from "gatsby-theme-i18n"

const Translation = ({children}) => {
  const { locale } = useLocalization()

  const translations = {
    "topFade1" : {
      en: "Hello, I'm Maya",
      ja: "マヤです",
    },
    "topFade2" : {
      en: "aspiring React engineer",
      ja: "Reactエンジニア",
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