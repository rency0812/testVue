<template>
  <div class="dash">
    <div class="header-wrap"></div>
    <ul class="sidebar-menu">
      <li class="user-info">
        <span><img :src="tData.avatar"/></span>
        <span>{{tData.displayName}}</span>
      </li>
      <li class="header">工具</li>
      <li class="active pageLink" v-on:click="toggleMenu">
        <router-link to="/"><i class="fa fa-desktop"></i>
          <span class="page">首页</span>
        </router-link>
      </li>
      <li class="pageLink" v-on:click="toggleMenu">
        <router-link to="/tables"><i class="fa fa-table"></i>
          <span class="page">表格</span>
        </router-link>
      </li>

      <li class="header">我的</li>
      <li class="pageLink" v-on:click="toggleMenu">
        <router-link to="/tasks">
          <i class="fa fa-tasks"></i>
          <span class="page">任务</span>
        </router-link>
      </li>
      <li class="pageLink" v-on:click="toggleMenu">
        <router-link to="/info">
          <i class="fa fa-cog"></i>
          <span class="page">信息</span>
        </router-link>
      </li>
      <li class="header">日志</li>
      <li class="pageLink" v-on:click="toggleMenu">
        <router-link to="/leaflet"><i class="fa fa-book"></i>
          <span class="page">Leaflet地图</span>
        </router-link>
      </li>
      <li class="pageLink" v-on:click="toggleMenu">
        <router-link to="/service"><i class="fa fa-hdd-o"></i>
          <span class="page">服务</span>
        </router-link>
      </li>
      <li class="pageLink" v-on:click="toggleMenu">
        <router-link to="/axios"><i class="fa fa-heart"></i>
          <span class="page">什么鬼</span>
          <small class="label pull-right bg-green">axios</small>
        </router-link>
      </li>

      <li class="header">其他</li>
      <li class="pageLink" v-on:click="toggleMenu">
        <router-link to="/login">
          <i class="fa fa-circle-o text-yellow"></i>
          <span class="page"> 登陆</span>
        </router-link>
      </li>
      <li class="pageLink" v-on:click="toggleMenu">
        <router-link to="/404"><i class="fa fa-circle-o text-red"></i>
          <span class="page"> 404</span>
        </router-link>
      </li>
    </ul>
    <div class="content-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'dash',
  data () {
    return {
      tData: {
        displayName: 'rency',
        avatar: '../../static/img/5.png'
      }
    }
  },
  methods: {
    toggleMenu (e) {
      console.log(e)
      // let $elem = e.srcElement || e.target
      // $elem.style.background = 'rgba(45, 140, 240, 0.2)'
    }
  }
}
</script>

<style lang="scss" scoped>
.pageLink:hover{
  background: rgba(45,140,240,.2);
}
.dash {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  text-align: center;
  color: #2c3e50;
  .header-wrap{
    position: relative;
    z-index: 10;
    height: 50px;
    background:gray
  }
  .sidebar-menu{
    position: absolute;
    top: 0;
    left: 0;
    width: 230px;
    height: 100vh;
    background: #1a2226;
    padding-top: 50px;
    img{
      width: 30px;
      height: 30px;
      border-radius: 100%;
      position: relative;
      top: 8px;
    }
    .user-info span{
      color: white;
      display:inline-block;
      line-height:36px
    }
    li.header{
      color: #1a935b;
      text-align: left;
      padding-left: 15px
    }
    li a{
      color: white;
      padding: 12px 0;
      display: block
    }
  }
  .content-wrap{
    margin-left: 230px;
    height: calc( 100vh - 50px );
    background: #fff;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
