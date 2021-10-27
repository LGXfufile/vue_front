<template>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo title"
      mode="horizontal"
      @select="handleSelect"
      background-color="#339999"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-menu-item index="1">图片处理</el-menu-item>
    <el-submenu index="2">
      <template slot="title">视频处理</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
    </el-submenu>

  </el-menu>


</template>

<script>
export default {
  name: "Layout2",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.title{
  text-align: center;
}

</style>