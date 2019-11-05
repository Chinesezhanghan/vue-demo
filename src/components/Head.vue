<template>
    <div class="head">
        <header>
        <router-link to="/">新闻</router-link>
        <router-link to="/list">列表</router-link>
        <router-link to="/comand">分页</router-link>
        <router-link to="/shop">商品</router-link>

        </header>
      <h3>欢迎您:{{msg}}</h3>
    </div>
</template>

<script>
    export default {
        name: 'Head',
        data () {
            return {
               msg:""
            }
        },
    created(){
           this.loadComments()
    },
      methods:{
        loadComments() {
          var list = localStorage.key(1);
          this.msg = list;

        }

      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{padding: 0;margin: 0}
  .head{
    position: relative;
    height: 80px;background-color: #F5D9CE;text-align: center;
  }
  a{
       font-size: 20px;padding: 10px;background-color: #fff;line-height: 100px;border-radius: 10px;
    margin-left: 20px;text-decoration: none;
  }
  .router-link-exact-active{
    background-color:  #F5D9CE}
h3{position: absolute;right: 0;top: 40px;color: #999
}
</style>
