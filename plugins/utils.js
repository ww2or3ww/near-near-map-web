const getContentsFunc = () => {
  return [
    {
      link: '/',
      icon: 'mdi-home',
      count: '',
      hilite: false
    },
    {
      link: '/food',
      icon: 'mdi-food',
      count: '(473)',
      hilite: false
    },
    {
      link: '/drink',
      icon: 'mdi-coffee',
      count: '(2)',
      hilite: false
    },
    {
      link: '/mask',
      icon: '',
      image: require('~/assets/img/icon-mask.png'),
      count: '(50)',
      hilite: false
    },
    {
      link: '/plant',
      icon: 'mdi-flower',
      count: '(0)',
      hilite: false
    },
    {
      link: '/fire',
      icon: 'mdi-fire',
      count: '(325)',
      hilite: true
    },
    {
      link: '/study',
      icon: 'mdi-hot-tub',
      count: '(0)',
      hilite: false
    },
    {
      link: '/study',
      icon: 'mdi-tent',
      count: '(0)',
      hilite: false
    },
    {
      link: '/about',
      icon: 'mdi-map-marker-question-outline',
      count: '',
      hilite: false
    }
  ]
}

export default (context, inject) => {
  inject('getContents', getContentsFunc)
}
