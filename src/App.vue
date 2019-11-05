<template>
  <div id="app">

    <keep-alive>
      <!--保持状态,vue会自行缓存当前状态,如果需要保持状态可以在路由下添加meta字段-->
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>


  </div>
</template>


<script>

export default {

  name: 'App'
}
</script>

<style>

</style>
