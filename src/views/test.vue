<template>
  <div>
    测试：<input type="text" v-model="title">
  </div>
</template>
<script>
export default {
  name: "test",
  data(){
    return{
      title:""
    }
  },
  // 监听属性title，当title发生变化时执行
  watch:{
    title:function (newValue,oldValue){
      console.log("属性title发生改变")
      console.log("改变后："+newValue+"，改变前："+oldValue)
    }
  },
  methods:{
    beforeEnter:{},
    enter:{}
  }
}
</script>
