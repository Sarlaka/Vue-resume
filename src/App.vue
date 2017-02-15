<template>
  <div id="app">
   <!--标题-->
   <mt-header fixed title="我的简历"></mt-header>

   <!--中间内容-->
   <router-view></router-view>
   <!--底部-->
   <mt-tabbar v-model="selected">
     <mt-tab-item id="tab1"  href="#/tabInfo">
      <svg class="icon iconImg" aria-hidden="true"  slot="icon">
        <use xlink:href="#icon-boy"></use>
      </svg>
       Infomation
     </mt-tab-item>
     <mt-tab-item id="tab2" href="#/tabSkill">
      <svg class="icon iconImg" aria-hidden="true"  slot="icon">
        <use xlink:href="#icon-pencil"></use>
      </svg>
       Skills
     </mt-tab-item>
     <mt-tab-item id="tab3" href="#/tabExperience">
      <svg class="icon iconImg" aria-hidden="true"  slot="icon">
        <use xlink:href="#icon-computer"></use>
      </svg>
       Experience
     </mt-tab-item>
     <mt-tab-item id="tab4" href="#/tabContact">
      <svg class="icon iconImg" aria-hidden="true"  slot="icon">
        <use xlink:href="#icon-mail"></use>
      </svg>
       Contact
     </mt-tab-item>
   </mt-tabbar>

   

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      selected: 'tab1',
      active: 'tab-container1'
    }
  }
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 40px 0 55px 0;
  height: 100%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
