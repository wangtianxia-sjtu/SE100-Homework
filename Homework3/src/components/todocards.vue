<template>
<div width="100%">
<div width="100%" v-for="(thing,index) in todo" :key="thing.title">
<transition name="el-fade-in-linear">
<el-card class="box-card" v-show="thing.done==done">
  <div slot="header" class="clearfix">
    <h3>{{thing.title}}</h3>
  </div>
  <div class="text item">
    {{'Deadline: '+thing.date}}<br><br>
    {{'Detail: '+thing.detail}}
  </div>
  <el-button v-show="thing.done==false" @click="thing.done=true" style="float: right; margin-bottom: 15px;" type="primary">Done</el-button>
  <el-button v-show="thing.done==true" @click="thing.done=false" style="float: right; margin-bottom: 15px;" type="warning">Undone</el-button>
  <el-button style="float: right; margin-right: 15px;" @click="todo.splice(index,1)" type="danger" icon="el-icon-delete" circle></el-button>
</el-card>
</transition>
</div>
</div>
</template>

<script>
export default {
  name: 'todocards',
  props: ['todo', 'done']
}
</script>

<style>
  .text {
    font-size: 14px;
    text-align: left;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 90%;
    margin-bottom: 5%;
    margin-top: 5%;
    margin-left: 5%;
  }
</style>
