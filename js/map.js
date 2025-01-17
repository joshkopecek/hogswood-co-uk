mapboxgl.accessToken = 'pk.eyJ1IjoiaG9nc3dvb2QiLCJhIjoiY201enQ4cHFrMDd2dzJpc2MwdHBqbnhlZSJ9.ZpqsSEs7GxAx9_EGbv1Q0Q'
const map = new mapboxgl.Map({
  container: 'mapbox', // container ID
  center: [-74.5, 40], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
})
