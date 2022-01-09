<template>
<div class="container">
  <div class="taiwan-map" ref="map">
    <div id="map">
      <svg id="svg"></svg>
    </div>
  </div>
</div>
</template>

<script>
import * as d3 from 'd3'

export default {
  methods: {
    getTaiwanMap () {
      const width = (this.$refs.map.offsetWidth).toFixed()
      const height = (this.$refs.map.offsetHeight).toFixed()

      // 判斷螢幕寬度，給不同放大值
      let mercatorScale; const w = window.screen.width
      if (w > 1366) {
        mercatorScale = 11000
      } else if (w <= 1366 && w > 480) {
        mercatorScale = 9000
      } else {
        mercatorScale = 6000
      }

      // d3：svg path 產生器
      var path = d3.geoPath().projection(
        // !important 座標變換函式
        d3.geoMercator().center([121, 24]).scale(mercatorScale).translate([width / 2, height / 2.5])
      )

      // 讓d3抓svg，並寫入寬高
      var svg = d3.select('#svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', `0 0 ${width} ${height}`)

      // 讓d3抓GeoJSON檔，並寫入path的路徑
      var url = 'dist/taiwan.geojson'
      d3.json(url, (error, geometry) => {
        if (error) throw error

        svg
          .selectAll('path')
          .data(geometry.features)
          .enter().append('path')
          .attr('d', path)
          .attr({
            // 設定id，為了click時加class用
            id: (d) => 'city' + d.properties.COUNTYCODE
          })
          .on('click', d => {
            this.h1 = d.properties.COUNTYNAME // 換中文名
            this.h2 = d.properties.COUNTYENG // 換英文名
            // 有 .active 存在，就移除 .active
            if (document.querySelector('.active')) {
              document.querySelector('.active').classList.remove('active')
            }
            // 被點擊的縣市加上 .active
            document.getElementById('city' + d.properties.COUNTYCODE).classList.add('active')
          })
      })
      return svg
    }
  },
  mounted () {
    this.getTaiwanMap()
  }
}

</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  letter-spacing: 1px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "微軟正黑體", "Microsoft JhengHei";
}

.container {
  display: flex;
  justify-content: center;
  background: #232526;
  background: linear-gradient(to right, #414345, #232425);
}

.taiwan-map {
  width: 50%;
  height: 100%;
}

#map {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

#map svg {
  max-height: 100vh;
}

#map path {
  fill: transparent;
  stroke: #fff;
  cursor: pointer;
  transition: fill .2s ease, stroke .2s ease, transform .2s ease;
}

#map path:hover, #map path.active {
  fill: rgb(255, 201, 41, 0.5);
  stroke: rgb(255, 201, 41);
  transform: translateY(-5px);
}
</style>
