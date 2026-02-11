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
    price: '$5',
    popular: false
  },
  {
    title: 'Standard',
    comment: 'Ideal for Bulk submitters and collectors who want reliable grading at an affordable price.',
    minCards: '10 cards',
    turnaround: '5-10 Business',
    price: '$10',
    popular: true
  },
  {
    title: 'Express',
    comment: 'Ideal for High-value cards, time-sensitive grading, or those who want quick results.',
    minCards: '25 cards',
    turnaround: '1 Business',
    price: '$39.99',
    popular: false
  }
]

export const MEMBERSHIPS = [
  {
    type: 'Bronze',
    description: 'Perfect for beginners and casual collectors.',
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
    description: 'Ideal for dedicated collectors looking for extra value.',
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
    description: 'Designed for serious collectors and professionals.',
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

export const SHIPPING_ADDRESSES = [
  {
    address: 'Boiulevard Street 273, CA',
    city: 'California, California, 093823, United States',
    contact: '+1 0921 3812'
  },
  { address: 'Street  geroge 23T', city: 'California, Sacramentto, 093823, United States', contact: '+1 0921 3812' }
]

export const SHIPPING_METHODS = [
  { icon: 'payments/usps.png', name: 'USPS Priority Mail (oversized)', price: '$19.99' },
  { icon: 'payments/fedex.png', name: 'Fedex Ground (oversized)', price: '$30' }
]

export const SHIPPING_PAYMENTS = [
  { name: 'SGC Shipping & Handling', allowInput: false },
  { name: 'Fedex Ground (oversized)', allowInput: true }
]

export const SUMMARY_BASE_INFO = [
  { label: 'Grading type', value: 'Standard Card Grading' },
  { label: 'Card amount', value: '2' },
  { label: 'Total decl. value', value: '$120.00' },
  { label: 'Grading service level', value: 'Standard' },
  { label: 'Grading fee', value: '$65.00' }
]

export const SUMMARY_SHIPPING_BILLING = [
  { label: 'Address', value: 'Boiulevard Street 273, CA' },
  { label: 'Method', value: 'USPS Priority Mail (oversized)' },
  { label: 'Payment account', value: 'SGC Shipping & Handling' }
]

export const SUMMARY_STATISTICS = [
  { label: 'Subtotal', value: '$120.00' },
  { label: 'Grading fee', value: '$65.00' },
  { label: 'Insured Return Shipping', value: '$19.99' },
  { label: 'Handling Charge', value: '$0.00' }
]

export const ADD_ITEM_TYPES = ['Raw Card Grading', 'Special Card Grading']

export const ADD_ITEMS = [
  { img: 'cards/9b9afe92e36181d9cef38bbae49a29123679846e.png', name: '1952 Topps 275 Pat Mullin' },
  { img: 'cards/image-11.png', name: '1952 Topps 275 Pat Mullin' }
]

export const REVIEW_ITEMS = [
  {
    img: 'cards/9b9afe92e36181d9cef38bbae49a29123679846e.png',
    name: '1952 Topps 275 Pat Mullin',
    encapsulate: true,
    oversized: true,
    authentic: true,
    cardService: 'Raw Card Grading',
    declValue: '$34.99'
  },
  {
    img: 'cards/image-11.png',
    name: '1952 Topps 275 Pat Mullin',
    encapsulate: true,
    oversized: true,
    authentic: false,
    cardService: 'Raw Card Grading',
    declValue: '$34.99'
  }
]
