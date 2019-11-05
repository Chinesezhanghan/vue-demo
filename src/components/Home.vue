<template>
  <div class="hello">
    <Head/>
     <h1>新闻概要</h1>
    <ul>

      <li  v-for="(item,index) of list">
        <router-link :to="'single/'+item.id" :key="item.id">
        <p class="p1" v-changeColor:color="{'font-size':'30px'}">{{index+1}}.{{item.title}}</p>
        </router-link>
      </li>
    </ul>
    <el-button :plain="true" @click="add" type="info">加载数据</el-button>

  </div>
</template>

<script>
  import Head from "./Head.vue"
export default {
  name: 'Home',
  components:{Head},
  data () {
    return {
         list:[],
          num:0,

    }
  },
  created(){
      this.$axios.get("../../static/txt.json").then((res)=>{

             this.list=res.data.slice(0,10)
             this.$store.commit("initlist",res.data)

      })
  },
  methods:{
      add(){
          if(this.num<10){
            this.$axios.get("../../static/txt.json").then((res)=>{

              let data=res.data.slice(5+this.num,10+this.num);
              this.list=this.list.concat(data)
            })
              this.num+=5
          }else {
            this.$message({
              message: '没有更多数据了',
              type: 'warning'
            });
          }

      },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .hello{
    background: url("../assets/bg1.jpg") no-repeat;
    background-size: cover;
  }
h1{
  text-align: center;
  height:70px;

  color: #ffffff;
  line-height: 70px;

}
  ul li{
    list-style: none;
    text-align: center;

    color: #ffffff;
  }
.p1{
   font-size: 30px;
   height: 40px;
}
  .hello{
    text-align: center;
  }
  a{text-decoration: none}
</style>
