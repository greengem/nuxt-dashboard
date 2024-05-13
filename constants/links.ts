interface Link {
  name: string;
  icon: string;
  path: string;
}

const links: Link[] = [
  { name: 'Home', icon: 'tabler:home', path: '/' },
  { name: 'Dashboard', icon: 'tabler:dashboard', path: '/dashboard' },
  { name: 'Weather', icon: 'tabler:haze', path: '/weather' },
  { name: 'Calculator', icon: 'tabler:calculator', path: '/calculator' },
  { name: 'Protected', icon: 'tabler:lock', path: '/protected' },
  { name: 'Public', icon: 'tabler:lock-open', path: '/public' },
];

export default links;
