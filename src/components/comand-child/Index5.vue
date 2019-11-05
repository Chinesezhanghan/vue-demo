<template>
    <div class="index5">
      <div id="allmap" class="allmap"></div>
    </div>
</template>

<script>
  import BMap from 'BMap'
    export default {
        name: 'Index5',
        data () {
            return {
                msg: ''
            }
        },
      mounted() {

        var map = new BMap.Map("allmap");          // 创建地图实例
        // 创建地图实例
        var point = new BMap.Point(116.380, 39.918);
        // 创建点坐标
        map.centerAndZoom(point, 15);
       // 初始化地图，设置中心点坐标和地图级别

        var marker = new BMap.Marker(point);        // 创建标注
        map.addOverlay(marker);                            // 将标注添加到地图中
        map.enableScrollWheelZoom(true);

      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#allmap{width:80%;height: 800px}
</style>
