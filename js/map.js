mapboxgl.accessToken = 'pk.eyJ1IjoiaG9nc3dvb2QiLCJhIjoiY201enQ4cHFrMDd2dzJpc2MwdHBqbnhlZSJ9.ZpqsSEs7GxAx9_EGbv1Q0Q'
console.log("Map loading")
const map = new mapboxgl.Map({
  container: 'mapbox',
  center: [-3.998481259557872, 50.74028212739736],
  zoom: 9
})

map.on('style.load', () => {
  // map.setFog({})
})

map.on('load', () => {
  console.log("Map loaded")

  map.addSource('hogswood', {
    type: 'geojson',
    data: '/assets/data/hogs-wood-parcels.geojson'
  })

  map.addLayer({
    'id': 'hogswood-layer',
    'type': 'fill',
    'source': 'hogswood',
    'paint': {
      'line-color': '#FFFFFF',
      'line-width': 5,
      'fill-color': '#237954',
      'fill-opacity': 0.8,
    }
  })

  map.addLayer({
    'id': 'outline',
    'type': 'line',
    'source': 'hogswood',
    'layout': {},
    'paint': {
      'line-color': '#063d0f',
      'line-width': 3
    }
  });

  map.on('click', 'hogswood-layer', (e) => {
    console.log(e.features[0].properties)
    const html = `<div>
      <p>
        INSPIREID: ${e.features[0].properties.INSPIREID}
      </p>
      <p>
        Land registry description: ${e.features[0].properties.LAND_REG_DESC}
      </p>
    </div>`
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(html)
      .addTo(map)
  })

  map.fitBounds([
    [
      -4.00088560131686,
      50.739973621287,
    ],
    [
      -3.99813591376018,
      50.7423329003988
    ]
  ], { animate: false })
})
