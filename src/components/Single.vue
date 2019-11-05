<template>
    <div class="single">
      <Head/>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item of imgs " :key="item">
          <img :src=item alt="">
        </el-carousel-item>
      </el-carousel>
     <div class="boxnews">
       <h3>{{data.title}}</h3>
       <p>{{data.body}}</p>
     </div>
    </div>
</template>

<script>
  import Head from "./Head.vue"
    export default {
        name: 'Single',
      components:{Head},
        data () {
            return {
               id:this.$route.params.id,
              data:{},
              imgs:[require("./../assets/tu1.png"),require("./../assets/bg4.jpg"),require("./../assets/tu3.png"),require("./../assets/tu4.png")]
            }
        },
      created(){
            this.$axios.get("http://jsonplaceholder.typicode.com/posts/"+this.id).then((res)=>{
                 this.data=res.data;
            })
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.boxnews{
  text-align: center;
  background-color: #6d9cbe;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.single{background: url("../assets/bg1.jpg") no-repeat;
  background-size: cover;}
img{width: 100%;height: 100%}

</style>
