<template>
  <div>
    <el-col :span="12">
      <el-menu
          style="width: 200px; min-height: 80vh"
          default-active="user"
          class="el-menu-vertical-demo"
          :default-openeds="[1]"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="user">用户管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="data">数据管理</el-menu-item>
      </el-menu>
    </el-col>
  </div>

</template>

<script>
export default {
  name: "Aside"
}
</script>

<style scoped>

</style>