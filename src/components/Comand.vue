<template>
    <div class="comand">
      <Head/>
       <Left/>
      <router-view></router-view>
    </div>
</template>

<script>
  import Head from "./Head.vue"
 import Left from "./comand-child/Left.vue"
    export default {
        name: 'Comand',
      components:{Head,Left},
        data () {
            return {
                msg: ''
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
