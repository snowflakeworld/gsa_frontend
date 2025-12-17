export interface LinkContent {
  title: string
  path: string
}

export type LinkType = 'home' | 'research' | 'support' | 'more'

export interface FooterLinkProps {
  type: LinkType
}
