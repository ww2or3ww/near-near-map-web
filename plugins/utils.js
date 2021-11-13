export default (context, inject) => {
  const getContentsFunc = () => {
    return [
      {
        link: '/',
        icon: 'mdi-cat',
        hilite: false
      },
      {
        link: '/food',
        icon: 'mdi-food',
        hilite: false
      },
      {
        link: '/drink',
        icon: 'mdi-coffee',
        hilite: false
      },
      {
        link: '/life',
        icon: 'mdi-shopping-outline',
        hilite: false
      },
      {
        link: '/outdoor',
        icon: 'mdi-tent',
        hilite: false
      },
      {
        link: '/hotspring',
        icon: 'mdi-hot-tub',
        hilite: false
      },
      {
        link: '/temple',
        icon: 'mdi-peace',
        hilite: false
      },
      {
        link: '/plant',
        icon: 'mdi-flower',
        hilite: true
      },
      {
        link: '/loco',
        icon: 'mdi-lightbulb-on-outline',
        hilite: true
      },
      {
        link: '/about',
        icon: 'mdi-map-marker-question-outline',
        hilite: false
      },
      {
        link: '/about_policy',
        icon: 'mdi-map-marker-question-outline',
        hilite: false,
        hide: true
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
