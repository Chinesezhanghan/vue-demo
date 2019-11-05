<template>
    <div class="login">
        <div class="login_inner">
          <h1>请您登录</h1>
          <el-input
            placeholder="请输入用户名"
            prefix-icon="el-icon-user-solid" v-model="user">
          </el-input>
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-info"v-model="pass">
          </el-input>
          <br>
          <el-button type="primary" @click="userBtn">登录</el-button>
          <el-button type="success" @click="userRes">重置</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',

        data () {
            return {
                user:"",
              pass:"",
            }
        },
      methods:{
            userBtn(){
                this.$axios.post("/aip",{
                    user:this.user,
                    pass:this.pass
                }).then((res)=>{
                   if(res.data=== 1){
                     localStorage.setItem(this.user,this.pass);
                       this.$router.push("/")

                   }else {
                       this.$message({
                         showClose: true,
                         message: '请检查用户名和密码',
                         type: 'error'
                       });

                   }
                })
            },
            userRes(){
                this.user="";
                this.pass="";
            }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{margin: 0;padding: 0}
.login_inner{
  height: 300px;
  width: 450px;
 position: absolute;
  left:50%;
  top:50%;
  margin-left: -250px;
  margin-top: -150px;
  border:1px solid #999;
  border-radius: 10px;

}
  h1{text-align: center;color: goldenrod}
  .el-input{width: 70%;margin:20px 50px;}
  .el-button{margin-left: 80px ;width: 80px;height: 40px}
.login{position:relative;
  background: url("../assets/bg1.jpg") no-repeat;
  background-size: cover;
  width: 100%;height: 785px;  }
</style>
