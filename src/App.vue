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

   <!--加载动画-->
   <div class="loading">
    <img class="resume" src="./assets/imgs/resume.png">
    <img class="qiuzhi" src="./assets/imgs/qiuzhi.png">
    <img class="jianli" src="./assets/imgs/jianli.png">
    <img class="logo" src="./assets/imgs/logo.png">
    <img class="line" src="./assets/imgs/line.png">
   </div>

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

/*加载动画*/
.loading{
  position: fixed;
  height: 100%;
  width: 100%;
  left:0;
  top:0;
  z-index: 99999;
}
.resume{
    width: 33%;
    position: absolute;
    left: 23%;
    top: 25%;
  }
  .qiuzhi{
    width: 40%;
    position: absolute;
    left: 14%;
    top: 31%;
  }
  .jianli{
    width: 36%;
    position: absolute;
    left: 55%;
    top: 27%;
  }
  .logo{
    width: 55%;
    position: absolute;
    left: 9%;
    top: 42%;
  }
  .line{
    width: 50%;
    position: absolute;
    left: 5%;
    top: 30%;
  }
</style>
