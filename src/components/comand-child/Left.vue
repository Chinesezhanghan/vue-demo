<template>
    <div class="left">
      <el-col :span="4">
        <el-menu default-active="1" class="el-menu-vertical-demo" >
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/comand/a">选项1</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/comand/b">选项2</router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                <router-link to="/comand/c">选项3</router-link>
              </el-menu-item>
              <el-menu-item index="1-4">
                <router-link to="/comand/d">选项4</router-link>
              </el-menu-item>
              <el-menu-item index="1-5">
                <router-link to="/comand/e">选项5</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-col>
    </div>
</template>

<script>
    export default {
        name: 'Left',
        data () {
            return {
                msg: ''
            }
        },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration: none;
  color: #000;
}
</style>
