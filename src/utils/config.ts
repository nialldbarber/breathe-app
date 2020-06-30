export interface Pages {
  name: string;
  headerShown: boolean;
  headerBackTitleVisible: boolean;
}

const pages: Pages[] = [
  {
    name: 'Home',
    headerShown: false,
    headerBackTitleVisible: false,
  },
  {
    name: 'Awake',
    headerShown: false,
    headerBackTitleVisible: false,
  },
  {
    name: 'Aligned',
    headerShown: false,
    headerBackTitleVisible: false,
  },
  {
    name: 'Aware',
    headerShown: false,
    headerBackTitleVisible: false,
  },
  {
    name: 'Asleep',
    headerShown: false,
    headerBackTitleVisible: false,
  },
];

export { pages };
