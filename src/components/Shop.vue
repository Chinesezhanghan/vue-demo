<template>
    <div class="shop">
      <Head/>
      <el-table :data="list" border style="width: 100%;" v-show="list.length" highlight-current-row>
        <el-table-column prop="id" label="#" width="180"></el-table-column>
        <el-table-column prop="src" label="图片" width="180">
          <img src="../assets/ba3c0a1d956429e2.jpg" alt="">
        </el-table-column>
        <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
        <el-table-column prop="price" label="商品价钱" width="180"></el-table-column>
        <el-table-column label="商品数量" width="380">
          <template scope="scope">
            <el-input-number v-model="scope.row.num"  :min="1" :max="10"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column label="商品总价">
          <template scope="scope">
            <div>{{scope.row.price*scope.row.num}}</div>

          </template>
        </el-table-column>
      </el-table>
      <div>总价钱:<span>{{countList}}</span></div>
  </div>
</template>

<script>
  import Head from "./Head.vue"
    export default {
      name: 'Shop',
      components: {Head},
      data () {
        return {
          list: [{
            id: 1,
            name: "华为",
            price: 5000,
            number: 4,
            num: 1,

          },
            {
              id: 2,
              name: "小米",
              price: 2000,
              number: 3,
              num: 1,
            },
            {
              id: 3,
              name: "vivo",
              price: 2500,
              number: 5,
              num: 1,
            }
          ],
          count: 0,

        }
      },
      computed: {
        countList () {
          var a = 0;
          for (let i = 0; i < this.list.length; i++) {
              a += this.list[i].price * this.list[i].num
          }
          this.count = a;
          return this.count
        }
      },
      watch: {

      },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .warning-row {
    background-color: aqua !important;
  }

</style>
