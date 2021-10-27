<template>
  <div class="xxx">
    <div style="width: 400px;margin: 150px auto">
      <div style="text-align: center;font-weight: bold;font-size: 30px;color: #cccccc;padding: 30px 0">欢迎登录</div>
      <el-form ref="form" :model="form" size="normal" :rules="rules">
        <el-form-item prop="username" >
          <el-input prefix-icon="el-icon-user" v-model="form.username" ></el-input>
        </el-form-item>
        <el-form-item prop="password" >
          <el-input prefix-icon="el-icon-lock" v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item >
          <el-button style="width: 100%;" type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>

</template>

<script>
import request from "../utils/request";

export default {
  name: "Login",
  data(){
    return{
      form:{},
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
    login(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          request.post("/api/user/login",this.form).then(res=>{
            if (res.code == 0) {
              this.$message({
                type: "success",
                message: "登录成功"
              })
              this.$router.push("/")//登录成功后跳转到主页
            } else {
              this.$message({
                type: "error",
                message: res.msg
              })
            }
          })
        }})

    }
  }
}
</script>

<style scoped>
.xxx{
  width: 100%;
  background-color: darkcyan;
  height: 100vh;
  overflow: hidden;
}

</style>