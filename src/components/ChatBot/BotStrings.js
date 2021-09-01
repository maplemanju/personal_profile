import React from 'react';
import headerAvatar from './images/header-avatar.png'
import chatterAvatar from './images/chatter-avatar.png'
import { useLocalization } from "gatsby-theme-i18n"

export default function BotStrings(props) {
  const { needed } = props;
  const { locale } = useLocalization();
  let botIdendity;

  if (locale==="ja") {
    botIdendity = {
      headerAvatar: <img src={headerAvatar} width={props.width} height={props.height} alt="faq chat bot avatar" />,
      chatterAvatar: <img src={chatterAvatar} width={props.width} height={props.height} alt="faq chat bot avatar" />,
      headerTxt: 'Amayadori',
      repeatBtn: '繰り返す'
    }
  } else {
    botIdendity = {
      headerAvatar: <img src={headerAvatar} width={props.width} height={props.height} alt="faq chat bot avatar" />,
      chatterAvatar: <img src={chatterAvatar} width={props.width} height={props.height} alt="faq chat bot avatar" />,
      headerTxt: 'Amayadori',
      repeatBtn: 'repeat'
    }
  }
  
  return botIdendity[needed];
}
