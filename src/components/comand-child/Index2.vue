<template>
    <div class="index2">

          <div class="left">
             <p class="p1">
               <img src="../../assets/ba3c0a1d956429e2.jpg" alt="">
               <span>用户名：user</span>
             </p>
            <p class="p2">年龄：18岁</p>
            <p class="p3">职位:经理</p>
          </div>
      <div class="right">
        <el-calendar v-model="value">
        </el-calendar>
      </div>
    </div>
</template>

<script>

    export default {
        name: 'Index2',

        data () {
            return {
              value: new Date()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left{text-align: center;margin-left: 200px;margin-top:100px;display: inline-block}
  p{margin: 0}
  .p1{width: 100px;height: 100px;border: 1px solid #000}
  .p2{width: 100px;height: 40px;line-height: 40px;border: 1px solid #000}
  .p3{width: 100px;height: 40px;line-height: 40px;border: 1px solid #000}
  .right{width: 50%;float: right}
</style>
