<template>
  <div id="login_back" class="login-wrap">
    <div class="login-main">
      <h1>登录(Login)</h1>
      <form action="" method="">
        <input type="text" name="username" v-model="userLogin.userName" class="username" placeholder="请输入您的用户名！">
        <input type="password" name="password" v-model="userLogin.pwd" class="password" placeholder="请输入您的用户密码！">
        <!-- <input type="Captcha" class="Captcha" name="Captcha" placeholder="请输入验证码！"> -->
        <button @click="login" type="button" class="submit_button">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
        <div class="error"><span></span></div>
        <div :style="{color: '#ccc'}"><span>随便输入即可</span></div>
      </form>
    </div>
    <div class="skill-wrap">
      <ul class="skill-box">
        <li v-for="v in oTxt" :key="v.id" :style="{background:v.color}">{{v.name}}</li>
      </ul>
      <P>技术栈</P>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      imgSrc: [
        'http://www.17sucai.com/preview/120111/2014-07-10/1402393818279_zcool.com_.cn_/assets/img/1.jpg',
        'http://www.17sucai.com/preview/120111/2014-07-10/1402393818279_zcool.com_.cn_/assets/img/2.jpg',
        'http://www.17sucai.com/preview/120111/2014-07-10/1402393818279_zcool.com_.cn_/assets/img/3.jpg'
      ],
      oTxt: [
        {name: 'vue', color: 'rgba(121,100,102,0.8)'}, {name: 'vRouter', color: 'rgba(121,100,102,0.8)'},
        {name: 'iview', color: 'rgba(121,100,102,0.8)'},
        {name: 'sass', color: 'rgba(121,100,102,0.8)'},
        {name: 'git', color: 'rgba(121,100,102,0.8)'},
        {name: 'webpack', color: 'rgba(121,100,102,0.8)'},
        {name: 'ES6', color: 'rgba(121,100,102,0.8)'},
        {name: 'vuex', color: 'rgba(121,100,102,0.8)'}
      ],
      timer: null,
      userLogin: {
        userName: '',
        pwd: ''
      }
    }
  },
  methods: {
    changeBack () {
      let _i = Math.floor(Math.random() * this.imgSrc.length)
      let LoginBack = document.getElementById('login_back')
      LoginBack.style.background = `#ccc url(${this.imgSrc[_i]})`
    },
    login () {
      // this.$store.state.token = 123456
      // this.$store.commit({
      //   type: 'SET_TOKEN',
      //   token: 123456789
      // })
      if (!this.userLogin.userName || !this.userLogin.pwd) {
        this.$Message.warning('请输入用户名密码！')
        return
      }
      this.$store.commit('SET_TOKEN', 147369258)
      sessionStorage.setItem('state', true)
      this.$router.push('/index')
    }
  },
  destroyed () {
    clearInterval(this.timer)
  },
  mounted () {
    this.timer = setInterval(() => { this.changeBack() }, 15000)
    console.log(this.$store.state.token)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .login-wrap{
    width: 100%;
    height: 100vh;
    background:#ccc url('http://www.17sucai.com/preview/120111/2014-07-10/1402393818279_zcool.com_.cn_/assets/img/1.jpg') center no-repeat;
    background-size: 100% 100%;
    color: #fff;
    .login-main{
      position: absolute;
      top: 50%;
      left: 66%;
      width: 350px;
      height: 320px;
      margin-left: -175px;
      margin-top: -220px;
      input,button{
        width: 100% !important;
      }
      input::-webkit-input-placeholder, textarea::-webkit-input-placeholder{
        /* WebKit browsers */
        color: #fff;
        }
        input:-moz-placeholder, textarea:-moz-placeholder{
        /* Mozilla Firefox 4 to 18 */
        color: #fff;
        }
        input::-moz-placeholder, textarea::-moz-placeholder{
        /* Mozilla Firefox 19+ */
        color: #fff;
        }
        input:-ms-input-placeholder, textarea:-ms-input-placeholder{
        /* Internet Explorer 10+ */
        color: #fff;
      }
      input{
        width: 270px;
        height: 42px;
        margin-top: 25px;
        padding: 0 15px;
        background: #2d2d2d;
        background: rgba(45,45,45,.15);
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
        border-radius: 6px;
        border: 1px solid #3d3d3d;
        border: 1px solid rgba(255,255,255,.15);
        -moz-box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
        -webkit-box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
        box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
        font-family: 'PT Sans', Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #fff;
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
        transition: all .2s;
        -o-transition: all .2s;
        -moz-transition: all .2s;
        -webkit-transition: all .2s;
        -ms-transition: all .2s;
      }
      button{
        cursor: pointer;
        width: 300px;
        height: 44px;
        margin-top: 25px;
        padding: 0;
        background: #ef4300;
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
        border-radius: 6px;
        border: 1px solid #ff730e;
        -moz-box-shadow: 0 15px 30px 0 rgba(255,255,255,.25) inset,
    0 2px 7px 0 rgba(0,0,0,.2);
        -webkit-box-shadow: 0 15px 30px 0 rgba(255,255,255,.25) inset, 0 2px 7px 0 rgba(0,0,0,.2);
        box-shadow: 0 15px 30px 0 rgba(255,255,255,.25) inset, 0 2px 7px 0 rgba(0,0,0,.2);
        font-family: 'PT Sans', Helvetica, Arial, sans-serif;
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
        transition: all .2s;
        -o-transition: all .2s;
        -moz-transition: all .2s;
        -webkit-transition: all .2s;
        -ms-transition: all .2s;
      }
    }
    h1{
      font-size: 30px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,.2);
    }
    .skill-wrap{
      position: absolute;
      top: 16%;
      left: 10%;
      width: 300px;
      height: 300px;
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      line-height: 300px;
      p{
        position: absolute;
        top: 46px;
        left: 50%;
      }
    }
    .skill-box{
      position: absolute;
      top: 16%;
      left: 10%;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      border: 4px dotted #fff;
      animation: Drotate 16s linear infinite;
      -webkit-animation: Drotate 16s linear infinite;
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      line-height: 300px;
      li{
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        font-size: 18px;
        font-weight: 700;
        text-shadow: 1px 1px 1px #ccc;
        text-align: center;
        line-height: 80px;
        list-style: none;
        animation: Drotates 16s linear infinite;
        -webkit-animation: Drotates 16s linear infinite;
        &:nth-child(1){
          top: -40px;
          left: 50%;
          margin-left: -40px;
        }
        &:nth-child(2){
          top: 50%;
          right: -40px;
          margin-top: -40px;
        }
        &:nth-child(3){
          bottom: -40px;
          left: 50%;
          margin-left: -40px;
        }
        &:nth-child(4){
          left: -40px;
          top: 50%;
          margin-top:-40px;
        }
        &:nth-child(5){
          top: 0;
          left: 0;
        }
        &:nth-child(6){
          top: 0;
          right: 0;
        }
        &:nth-child(7){
          bottom: 0;
          left: 0;
        }
        &:nth-child(8){
          bottom: 0;
          right: 0;
        }
        &:nth-child(9){
          top: 50%;
          right: 50%;
        }
      }
    }
  }
  @keyframes Drotate {
    from{
      transform: rotateZ(0deg);
    }
    to{
      transform: rotateZ(360deg);
    }
  }
  @keyframes Drotates {
    from{
      transform: rotateZ(360deg);
    }
    to{
      transform: rotateZ(0deg);
    }
  }
</style>
