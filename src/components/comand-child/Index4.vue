<template>
    <div class="index4">

      <div id="myChart" :style="{width: '300px', height: '300px'}" class="mychart"></div>
      <div id="myChart1" :style="{width: '400px', height: '300px'}" class="mychart1"></div>
    </div>
</template>

<script>

    export default {
        name: 'Index4',

        data () {
            return {
              msg: 'Welcome to Your Vue.js App'
            }
        },
      mounted(){
        this.drawLine();
        this.drawLine1();
      },
      methods: {
        drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
          });
        },
        drawLine1(){
          let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
          myChart1.setOption({
            title : {
              text: '某站点用户访问来源',
              subtext: '纯属虚构',
              x:'center'
            },
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [
              {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          })
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mychart{
  float: left;
  margin-left: 200px;
  margin-top:100px;
}
  .mychart1{
    float: left;
    margin-left: 100px;
    margin-top: 100px;
  }
</style>
