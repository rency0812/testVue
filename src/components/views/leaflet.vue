<template>
  <div id="mapid"></div>
</template>

<script>
import L from 'leaflet'

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    console.log(this.$store.state.token)

    var mymap = L.map('mapid').setView([22.66, 114.03], 13)

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoicmVuY3kiLCJhIjoiY2o1a2ZweThvMjVhOTJ3bG1wOTJ1YWlrcyJ9.RRbPjVQ2kBKhGaiNKTVAjQ'
    }).addTo(mymap)

    L.marker([22.66, 114.03]).addTo(mymap)
      .bindPopup('<b>Hello world!</b><br />这里是深圳·龙华.').openPopup()

    L.circle([22.65, 114.02], 500, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }).addTo(mymap).bindPopup('我是红色的圆.')

    L.polygon([
      [22.68, 114.00],
      [22.65, 114.00],
      [22.67, 114.02]
    ]).addTo(mymap).bindPopup('我是一个三角形.')

    var popup = L.popup()

    function onMapClick (e) {
      popup
        .setLatLng(e.latlng)
        .setContent('You clicked the map at ' + e.latlng.toString())
        .openOn(mymap)
    }
    mymap.on('click', onMapClick)
    // L.icon
    var LeafIcon = L.Icon.extend({
      options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize: [38, 95],
        shadoeSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
      }
    })

    var greenIcon = new LeafIcon({iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png'})
    var redIcon = new LeafIcon({iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-red.png'})
    var orangeIcon = new LeafIcon({iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-orange.png'})

    L.marker([22.68, 114.00], {icon: greenIcon}).bindPopup('我是绿色的').addTo(mymap)
    L.marker([22.65, 114.00], {icon: redIcon}).bindPopup('我是红色的').addTo(mymap)
    L.marker([22.67, 114.02], {icon: orangeIcon}).bindPopup('我是橘色的').addTo(mymap)
  }
}
</script>

<style lang="scss" scoped>
  #mapid{
    height: calc(100vh - 50px );
  }
</style>
