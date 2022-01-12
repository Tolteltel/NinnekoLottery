import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
    ],
  },
  {
    label: t('Help'),
    items: [
     
    ],
  },
  {
    label: t('Developers'),
    items: [

      
    ],
  },
]
