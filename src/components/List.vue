<template>
    <div class="list">
      <Head/>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="body" label="主体" ></el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="total"  :pageSize="pageSize"  @current-change="handleCurrentChange"></el-pagination>
    </div>
</template>

<script>
  import Head from "./Head.vue"
    export default {
        name: 'List',
      components:{Head},
        data () {
            return {
              msg:[],
              total:0,
              pageSize:5,
              currentPage:1,
            }
        },
      created(){

        this.msg=this.$store.state.homelist;
        this.total=this.$store.state.homelist.length
      },
     methods:{
       handleCurrentChange(val){
              this.currentPage=val;
          }
     },
      computed:{
          tableData(){
              return this.msg.slice((this.currentPage-1)*this.pageSize,(this.currentPage*this.pageSize))
          }
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
