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
      count: '(624)',
      hilite: false
    },
    {
      link: '/drink',
      icon: 'mdi-coffee',
      count: '(74)',
      hilite: false
    },
    {
      link: '/life',
      icon: 'mdi-shopping-outline',
      count: '(117)',
      hilite: false
    },
    {
      link: '/mask',
      icon: 'mdi-alpha-m-circle-outline',
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
      count: '(61)',
      hilite: false
    },
    {
      link: '/hotspring',
      icon: 'mdi-hot-tub',
      count: '(142)',
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
