<style lang="scss" scoped>
  .axios{
    padding: 12px 0;
    .row{
      padding: 0 12px;
    }
    .card{
      background: #bbbec4;
      p{
        text-align: left;
        color: #333;
      }
    }
  }
</style>

<template>
  <div v-if="oData&&oData1" class="axios">
    <h1>@Axios+@easy Mock</h1>
    <Row class="row">
      <Col span="11">
        <Card class="card">
          <p slot="title">Email：{{oData.email}}<span :style="{float:'right'}">{{oData.date}}</span></p>
          <p>age：{{oData.integer}}</p>
          <p>city：{{oData.city}}</p>
          <p>desc：{{oData.cparagraph}}</p>
          <p>desc：{{oData.csentence}}</p>
        </Card>
      </Col>
      <Col span="11" offset="2">
        <Card class="card">
          <p slot="title">Email：{{oData1.email}}<span :style="{float:'right'}">{{oData.date}}</span></p>
          <p>age：{{oData1.integer}}</p>
          <p>city：{{oData1.city}}</p>
          <p>desc：{{oData1.cparagraph}}</p>
          <p>desc：{{oData1.csentence}}</p>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'axios',
  data () {
    return {
      url: 'https://easy-mock.com/mock/5afbf5ddc910be77a053fb13/example/api',
      oData: null,
      oData1: null
    }
  },
  methods: {
    callData () {
      axios.get(this.url).then(res => {
        console.log(res)
        this.oData = res.data.data
      })
      axios.get(this.url).then(res => {
        this.oData1 = res.data.data
      })
    },
    timer () {
      clearInterval(this.timer)
      this.timer = setInterval(this.callData, 10000)
    }
  },
  destroyed () {
    clearInterval(this.timer)
  },
  mounted () {
    this.callData()
    this.timer()
  }
}
</script>
