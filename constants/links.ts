interface Link {
  name: string;
  icon: string;
  path: string;
}

const links: Link[] = [
  { name: 'Dashboard', icon: 'tabler:dashboard', path: '/dashboard' },
  { name: 'Tasks', icon: 'tabler:checkup-list', path: '/tasks' },
  { name: 'Calendar', icon: 'tabler:calendar', path: '/calendar' },
  { name: 'Weather', icon: 'tabler:haze', path: '/weather' },
  { name: 'News', icon: 'tabler:news', path: '/news' },
  { name: 'Email', icon: 'tabler:mail', path: '/email' },
  { name: 'Notes', icon: 'tabler:notebook', path: '/notes' },
  { name: 'Finance', icon: 'tabler:currency-dollar', path: '/finance' },
  { name: 'Fitness', icon: 'tabler:run', path: '/fitness' },
  { name: 'Social', icon: 'tabler:social', path: '/social' },
];

export default links;
