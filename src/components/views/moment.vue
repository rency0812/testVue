<style lang="scss" scoped>
  .rs-moment-wrap{
    padding-top: 25px;
    li{
      font-size: 22px;
    }
  }
</style>

<template>
  <div class="rs-moment-wrap">
    <ul>
      <li>当前时间：{{nowTime}}</li>
      <li><pre>moment().format('YYYY/MM/DD HH:mm:ss')</pre></li>
      <li>今天是星期{{toWeek}}，第{{numWeek}}周</li>
      <li>距离大学毕业已经{{hadTime}}</li>
      <li><pre>moment('XXXXXXXX', 'YYYYMMDD').fromNow()</pre></li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      nowTime: null,
      hadTime: null,
      toWeek: null,
      numWeek: null
    }
  },
  methods: {
  },
  mounted () {
    this.nowTime = moment().format('YYYY/MM/DD HH:mm:ss')
    this.hadTime = moment('20150611', 'YYYYMMDD').fromNow()
    this.toWeek = moment().weekday()
    this.numWeek = moment().isoWeek()
  }
}
</script>
