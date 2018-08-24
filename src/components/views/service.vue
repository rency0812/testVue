<template>
  <div class="service">
    <div>
      <h1 class="text-center">开源项目</h1>
      <h4 class="text-center">Github 热门开源项目</h4>
    </div>
    <Row>
      <i-col v-if="response" v-for="repo in response" :key="repo.id" span="8">
        <div class="box">
          <div class="widget-user-header bg-aqua-active text-center">
            <h3 class="widget-user-username center-text">{{ repo.name }}</h3>
          </div>
          <div class="img">
            <img :src="repo.owner.avatar_url" alt="repo.owner.login + ' Avatar'" />
          </div>
          <Row class="description-block">
            <i-col span="8">
              <div class="description-block">
                <h5 class="description-header">{{repo.stargazers_count}}</h5>
                <span class="description-text">Star</span>
              </div>
            </i-col>
            <i-col span="8">
              <div class="description-block">
                <a v-bind:href="repo.owner.html_url" target="_blank">
                  <button type="button" class="btn btn-default btn-lg">Visit</button>
                </a>
              </div>
            </i-col>
            <i-col span="8">
              <div class="description-block">
                <h5 class="description-header">{{repo.forks_count}}</h5>
                <span class="description-text">Forks</span>
              </div>
            </i-col>
          </Row>
        </div>
      </i-col>
    </Row>
    <div class="footer"></div>
    <Spin size="large" fix v-show="isShow">加载中...</Spin>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Repository',
  data () {
    return {
      githubUrl: 'https://api.github.com/search/repositories?q=language%3Ajavascript&sort=stars',
      response: null,
      error: null,
      isShow: true
    }
  },
  methods: {
    callGitHub () {
      axios.get(this.githubUrl)
        .then(response => {
          console.log('GitHub Response:', response)

          if (response.status !== 200) {
            // this.error = response.statusText
            return
          }

          this.response = response.data.items
          this.isShow = false
        })
        .catch(error => {
          // Request failed.
          console.log('error', error.response)
          // this.error = error.response.statusText
        })
    }
  },
  mounted () {
    this.callGitHub()
  }
}
</script>

<style lang="scss" scoped>
  .service{
    overflow-x: hidden;
    overflow-y: auto;
    max-height: calc(100vh - 50px);
    h1,h3{
      color: #666;
    }
    .box{
      h3{
        color: #fff;
      }
      button{
        width: 100px;
        height: 30px;
        cursor: pointer;
      }
      position: relative;
      padding: 15px;
      .description-block{
        background: #e9eaec;
        padding: 15px 0;
      }
      .widget-user-header{
        height: 120px;
        padding: 20px;
        border-radius: 3px;
      }
      .bg-aqua-active{
        background-color: #00a7d0;
      }
      .img{
        position: absolute;
        top: 65px;
        left: 50%;
        margin-left: -45px;
        z-index: 5;
        img{
          width: 90px;
          height: 90px;
          border-radius: 50%;
        }
      }
    }
    .footer{
      height: 70px;
    }
  }
</style>
