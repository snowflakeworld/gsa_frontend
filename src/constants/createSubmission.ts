export const STEPS = ['Grading Type', 'Add Items', 'Service Level', 'Shipping', 'Billing', 'Confirmation']

export const GRADING_TYPES = [
  {
    title: 'Standard Card Grading',
    content: 'Standard size, memorabilia & Tallboy cards',
    icon: 'submissionGradingStandard',
    viewBoxWidth: 19.25,
    viewBoxHeight: 19.11,
    colorMode: 'fill'
  },
  {
    title: 'Topps Chrome Special',
    content: 'Pricing for standard size raw card grading, crossover & reviews',
    icon: 'submissionGradingTopps',
    viewBoxWidth: 19.25,
    viewBoxHeight: 19.11,
    colorMode: 'fill'
  },
  {
    title: 'TCG Grading',
    content: 'A grading business specializing in Pokemon and sports cards.',
    icon: 'submissionGradingTcg',
    viewBoxWidth: 19.25,
    viewBoxHeight: 19.11,
    colorMode: 'stroke'
  },
  {
    title: 'Comic book  & magazine',
    content: 'Tailored grading for comics and magazines',
    icon: 'submissionGradingComic',
    viewBoxWidth: 19.25,
    viewBoxHeight: 19.11,
    colorMode: 'fill'
  }
]

export const SERVICE_LEVELS = [
  {
    title: 'Economy',
    comment: 'Ideal for  Casual collectors or large sets who prefer low-cost grading options.',
    minCards: '25 cards',
    turnaround: '30 Business',
    price: '$5'
  },
  {
    title: 'Standard',
    comment: 'Ideal for Bulk submitters and collectors who want reliable grading at an affordable price.',
    minCards: '10 cards',
    turnaround: '5-10 Business',
    price: '$10'
  },
  {
    title: 'Express',
    comment: 'Ideal for High-value cards, time-sensitive grading, or those who want quick results.',
    minCards: '25 cards',
    turnaround: '1 Business',
    price: '$39.99'
  }
]

export const MEMBERSHIPS = [
  {
    type: 'Bronze',
    policy: 'Free',
    items: [
      'Get <b>1</b> point for every $10 spent on grading*',
      'Get <b>5%</b> Discounts on bulk submissions (over 50 cards)',
      'Free submission tracking.'
    ],
    isFree: true
  },
  {
    type: 'Silver',
    policy: '99',
    items: [
      'Get <b>1.5</b> point for every $10 spent on grading*',
      'Get <b>10%</b> Discounts on bulk submissions (over 50 cards)',
      'Free submission tracking.',
      'Free Express grading upgrade (once a year)',
      'Priority customer service',
      'Early access to new grading technology or features'
    ],
    isFree: false
  },
  {
    type: 'Gold',
    policy: '199',
    items: [
      'Get 2 point for every $10 spent on grading*',
      'Get <b>15%</b> Discounts on bulk submissions (over 50 cards)',
      'Free submission tracking.',
      'Free 2 Express grading upgrade (once a year)',
      'Priority customer service',
      'Priority access to new grading technologies and beta testing',
      'Free digital population report for any submitted set'
    ],
    isFree: false
  }
]
