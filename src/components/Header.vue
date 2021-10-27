<template>
  <div class="header">
    <div class="left">后台管理</div>
    <div style="flex: 1"></div>
    <div style="width: 100px">
      <el-dropdown>
          <span class="el-dropdown-link">
            Simba<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        <el-dropdown-menu>
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item @click.native="exitSystem">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods:{
    exitSystem(){
      this.$router.push('/login')
          .then(res=>{
            console.log(res.data)
          console.log("111")})
    }
  }
}
</script>

<style scoped>
.header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
  /*
  flex，可以将行内元素当成盒状来使用；
   */
}

.left {
  width: 200px;
  padding-left: 30px;
  font-weight: bold;
  color: dodgerblue;
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}

</style>