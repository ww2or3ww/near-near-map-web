const getPinCountListFunc = () => {
  return [10, 25, 50, 100]
}

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
      count: '(591)',
      hilite: false
    },
    {
      link: '/drink',
      icon: 'mdi-coffee',
      count: '(72)',
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
      link: '/fire',
      icon: 'mdi-fire',
      count: '(325)',
      hilite: true
    },
    {
      link: '/outdoor',
      icon: 'mdi-tent',
      count: '(24)',
      hilite: false
    },
    {
      link: '/hotspring',
      icon: 'mdi-hot-tub',
      count: '(14)',
      hilite: false
    },
    {
      link: '/plant',
      icon: 'mdi-flower',
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
  inject('getPinCountList', getPinCountListFunc)
  inject('getContents', getContentsFunc)
}
