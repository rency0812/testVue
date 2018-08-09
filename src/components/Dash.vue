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
    background:#3c8dbc
  }
  .sidebar-menu{
    position: absolute;
    top: 0;
    left: 0;
    width: 230px;
    height: 100vh;
    background: #1a2226;
    padding-top: 50px;
    transition: all .5s;
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
  .logo-box{
    position: absolute;
    left: 0;
    width: auto;
    height: 100%;
    line-height: 40px;
    overflow: hidden;
    .a-logo{
      width: 230px;
      padding-top: 5px;
      background: #367fa9;
      transition: all .5s;
    }
    .span-title{
      color: #fff;
      font-size: 20px
    }
  }
  .ec-fl{
    float: left;
  }
  .ec-fl:after{
    display: block;
    content: "";
    clear: both;
  }
  .header-other{
    position: absolute;
    top: 10px;
    left: 230px;
    padding-left: 15px;
    i{
      cursor: pointer;
    }
  }
  .u-info-box{
    list-style: none;
    position: absolute;
    right: 15px;
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
  }
  .menu-hide{
    left: -230px;
  }
}
</style>

<template>
  <div class="dash">
    <div class="header-wrap">
      <div class="logo-box">
        <a ref="logo" class="a-logo ec-fl"><img src="/static/img/copilot-logo-white.svg" height="40"></a>
        <!-- <span class="span-title ec-fl">这是一个大数据平台</span> -->
      </div>
      <div class="header-other">
        <Icon @click="hideMenu" type="navicon" class="ec-fl" size="30" color="#fff"></Icon>
      </div>
      <ul class="u-info-box">
          <li class="user-info">
            <span><img :src="tData.avatar"/></span>
            <span>{{tData.displayName[index]}}</span>
        </li>
      </ul>
    </div>
    <ul ref="menu" class="sidebar-menu">
      <!-- <li class="user-info">
        <span><img :src="tData.avatar"/></span>
        <span>{{tData.displayName}}</span>
      </li> -->
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
        displayName: ['Annie', 'Ashe', 'Evelynn', 'Fiora', 'MissFortune', 'Rivan', 'Soraka', 'Garen', 'Caitlyn'],
        avatar: '../../static/img/5.png'
      },
      index: 0
    }
  },
  mounted () {
    this.index = Math.ceil(Math.random() * 8)
  },
  methods: {
    toggleMenu (e) {
      console.log(e)
      // let $elem = e.srcElement || e.target
      // $elem.style.background = 'rgba(45, 140, 240, 0.2)'
    },
    hideMenu () {
      var $content = document.querySelector('.content-wrap')
      if (this.$refs.menu.className.trim() === 'sidebar-menu') {
        this.$refs.menu.className = 'sidebar-menu menu-hide'
        $content.style.marginLeft = '0'
      } else {
        this.$refs.menu.className = 'sidebar-menu'
        $content.style.marginLeft = '230px'
      }
    }
  }
}
</script>
