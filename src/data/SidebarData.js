export const SidebarData = [
  {
    id: 0,
    title: 'Neuigkeiten',
    items: [
      {
        title: 'Melting Hot',
        unreadAmount: 10,
        component: 'HOME',
        icon: require('../img/icons/melting-hot.png')
      } // TODO: enable sections
      // ,
      // {
      //   title: 'Favoriten',
      //   unreadAmount: 2,
      //   icon: require('../img/icons/like.png')
      // },
      // {
      //   title: 'Später lesen',
      //   unreadAmount: 14,
      //   icon: require('../img/icons/bookmark.png')
      // }
    ]
  },
  {
    id: 1,
    title: 'Kategorien',
    items: [
      {
        title: 'Business',
        unreadAmount: 17,
        component: 'BUSINESS',
        icon: require('../img/icons/business.png')
      },
      {
        title: 'Entertainment',
        unreadAmount: 23,
        component: 'ENTERTAINMENT',
        icon: require('../img/icons/entertainment.png')
      },
      {
        title: 'Health',
        unreadAmount: 43,
        component: 'HEALTH',
        icon: require('../img/icons/health.png')
      },
      {
        title: 'Science',
        unreadAmount: 10,
        component: 'SCIENCE',
        icon: require('../img/icons/science.png')
      },
      {
        title: 'Sportz',
        unreadAmount: 2,
        component: 'SPORTS',
        icon: require('../img/icons/sport.png')
      },
      {
        title: 'Technology',
        unreadAmount: 0,
        component: 'TECHNOLOGY',
        icon: require('../img/icons/technology.png')
      }
    ]
  },
  {
    id: 2,
    title: 'Your Profile',
    items: [
      {
        title: 'Settings',
        unreadAmount: 0,
        component: 'SETTINGS',
        icon: require('../img/icons/settings.png')
      }
    ]
  }
];