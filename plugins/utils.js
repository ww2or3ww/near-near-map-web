export default (context, inject) => {
  const getContentsFunc = () => {
    return [
      {
        link: '/',
        icon: 'mdi-home',
        count: '',
        hilite: false
      },
      {
        link: '/loco',
        icon: 'mdi-lightbulb-on-outline',
        count: '(---)',
        hilite: true
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
        link: '/hamapay',
        icon: 'mdi-shopping-outline',
        count: '(---)',
        hilite: true
      },
      {
        link: '/about',
        icon: 'mdi-map-marker-question-outline',
        count: '',
        hilite: false
      }
    ]
  }
  const resetLatLonFunc = () => {
    const latlon = {
      lat: null,
      lng: null
    }
    context.app.$cookies.set('near-near-map.w2or3w.com/latlon', latlon, {
      path: '/',
      maxAge: 60 * 60 * 24 * 1
    })
  }
  const setZoomFunc = (zoom) => {
    context.app.$cookies.set('near-near-map.w2or3w.com/zoom', zoom, {
      path: '/',
      maxAge: 60 * 60 * 24 * 1
    })
  }
  const getZoomFunc = () => {
    return context.app.$cookies.get('near-near-map.w2or3w.com/zoom')
  }
  const setLatLngFunc = (latlng) => {
    context.app.$cookies.set('near-near-map.w2or3w.com/latlon', latlng, {
      path: '/',
      maxAge: 60 * 60 * 24 * 1
    })
  }
  const getLatLngFunc = () => {
    return context.app.$cookies.get('near-near-map.w2or3w.com/latlon')
  }

  inject('getContents', getContentsFunc)
  inject('resetLatLon', resetLatLonFunc)
  inject('setZoom', setZoomFunc)
  inject('getZoom', getZoomFunc)
  inject('setLatLng', setLatLngFunc)
  inject('getLatLng', getLatLngFunc)
}
