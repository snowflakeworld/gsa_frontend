import { LinkType } from '@/types'

export const FOOTER_LINK_TYPES: LinkType[] = ['home', 'research', 'support', 'more']

export const FOOTER_LINK_MAIN = {
  home: [
    { title: 'Services & Prices', path: '/' },
    { title: 'Values', path: '/' },
    { title: 'Set Registry', path: '/' },
    { title: 'FAQ', path: '/' }
  ],
  research: [
    { title: 'Find My Package', path: '/' },
    { title: 'Grading Specials', path: '/' },
    { title: 'Cert Verification', path: '/' },
    { title: 'Order Status', path: '/' },
    { title: 'Submission Center', path: '/' },
    { title: 'Grading Standards', path: '/' }
  ],
  support: [
    { title: 'Price Guide', path: '/' },
    { title: 'Population Report', path: '/' },
    { title: 'Articles', path: '/' },
    { title: 'Apps', path: '/' },
    { title: 'Forums', path: '/' },
    { title: 'Store', path: '/' },
    { title: 'Dealer Directory', path: '/' }
  ],
  more: [
    { title: 'About Us', path: '/' },
    { title: 'Advertise With Us', path: '/' },
    { title: 'Privacy', path: '/' }
  ]
}

export const FOOTER_LINK_SUB = [
  { title: 'Terms of Use', path: '/' },
  { title: 'Privacy', path: '/' },
  { title: 'Contact', path: '/' },
  { title: 'Cookie', path: '/' },
  { title: 'Preferences', path: '/' }
]
