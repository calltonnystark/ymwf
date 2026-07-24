export interface Program {
  id: string
  name: string
  urduTag: string
  summary: string
  detail: string
  stat: string
  statLabel: string
}

export const programs: Array<Program> = [
  {
    id: 'roshni',
    name: 'Roshni Learning Circles',
    urduTag: 'روشنی',
    summary:
      'Free after-school tutoring and literacy support for children in Androon Shehr, Shahdara, and Baghbanpura who are enrolled in government schools but falling behind.',
    detail:
      'Volunteer teachers run two-hour sessions six days a week in borrowed community rooms and mosque courtyards, focusing on Urdu and English reading, basic arithmetic, and exam preparation. Families are asked to contribute what they can — most contribute nothing, and that is fine.',
    stat: '2,340',
    statLabel: 'children tutored since 2016',
  },
  {
    id: 'sehat',
    name: 'Sehat Mobile Clinics',
    urduTag: 'صحت',
    summary:
      'A converted delivery van and two nurse-led teams that reach katchi abadis around Ravi Road and Kot Lakhpat where the nearest dispensary is an hour away on foot.',
    detail:
      'Each visit covers basic checkups, maternal health screening, and free medicine for common ailments. Serious cases are referred and, where a family cannot afford transport, we cover the rickshaw fare to the hospital ourselves.',
    stat: '96',
    statLabel: 'clinic days run this year',
  },
  {
    id: 'ration',
    name: 'Ration & Relief Drives',
    urduTag: 'راشن',
    summary:
      'Monthly ration packs — flour, pulses, oil, tea — for widow-headed and daily-wage households, with an expanded drive every Ramzan and during the winter cold spell.',
    detail:
      'Households are identified through mosque committees and school staff who know the neighborhood, not through paperwork. Packs are delivered directly to the home so no one has to queue or explain themselves.',
    stat: '6,800+',
    statLabel: 'packs delivered last winter',
  },
  {
    id: 'hunar',
    name: 'Hunar Skills Workshops',
    urduTag: 'ہنر',
    summary:
      'Six-week vocational courses in stitching, basic electrical repair, and mobile phone servicing for young adults who left school early and need a trade, not a certificate.',
    detail:
      'Courses run out of a rented workshop space near Township with tools donated by local traders. Graduates who complete the course receive a starter toolkit and an introduction to two or three shopkeepers willing to give them work.',
    stat: '412',
    statLabel: 'graduates placed in work',
  },
]

export interface Voice {
  name: string
  role: string
  quote: string
}

export const voices: Array<Voice> = [
  {
    name: 'Rukhsana Bibi',
    role: 'Mother of three, Shahdara',
    quote:
      'My eldest failed her exam twice before the Roshni teachers started sitting with her on Tuesdays. She passed this March. Not the top of her class, but she passed on her own reading.',
  },
  {
    name: 'Zeeshan Gill',
    role: 'Hunar graduate, now works near Ichhra',
    quote:
      'I fixed my first phone screen in the workshop with a borrowed screwdriver. Six months later I fix them for a living behind a shop near Ichhra Bazaar.',
  },
  {
    name: 'Dr. Ayesha Farooq',
    role: 'Volunteer physician, Sehat clinics',
    quote:
      'Most of what we treat is what a proper dispensary would catch early. We are not solving healthcare in Lahore. We are showing up on Thursdays so fewer children go untreated in between.',
  },
]

export const stats = [
  { value: '2,340', label: 'children in active tutoring' },
  { value: '47', label: 'neighborhoods reached' },
  { value: '118', label: 'relief drives since founding' },
  { value: '9', label: 'years running, since 2016' },
]
