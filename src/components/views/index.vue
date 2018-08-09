<template>
  <div class="index-wrap">
    <Row class="iview-row padding-top">
      <i-col :span="11">
        <div class="grid-content">
          <h2>柱图</h2>
          <div ref="bar" :style="{height: '300px'}"></div>
        </div>
      </i-col>
      <i-col :span="11">
        <div class="grid-content">
          <h2>曲线图</h2>
          <div ref="line" :style="{height: '300px'}"></div>
        </div>
      </i-col>
    </Row>
    <Row class="iview-row padding-top" justify="center">
      <i-col :span="11">
        <div class="grid-content">
          <h2>饼图</h2>
          <div ref="pie" :style="{height: '300px'}"></div>
        </div>
      </i-col>
      <i-col :span="11">
        <div class="grid-content">
          <h2>环形图</h2>
          <div ref="hoop" :style="{height: '300px'}"></div>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
// let echarts = require('echarts')
// import ES from '../../test/ES'

export default {
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
    this.$nextTick(() => {
      this.drawBar()
      this.drawLine()
      this.drawPie()
      this.drawPie2()
    })
  },
  methods: {
    drawBar () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(this.$refs.bar)
      myChart.setOption({
        title: {text: 'echarts羊毛衫', left: '10%'},
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    },
    drawLine () {
      this.oLine = this.$echarts.init(this.$refs.line)
      let option = {
        title: {
          text: '食品生产情况',
          subtext: '每年企业新办/注销许可证趋势',
          left: '10%'
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          top: '25%',
          containLabel: true
        },
        legend: {
          right: '10%',
          data: ['新办数', '注销数']
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          }
        ],
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '新办数',
            type: 'line',
            areaStyle: {
              normal: {type: 'default',
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(199, 37, 50,0.2)'
                }, {
                  offset: 1,
                  color: 'rgba(199, 37, 50,0.2)'
                }], false)
              }
            },
            smooth: true,
            itemStyle: {
              normal: {areaStyle: {type: 'default'}}
            },
            data: [136, 375, 380, 449, 114, 267, 142, 318, 357, 193, 421, 391]
          },
          {
            name: '注销数',
            type: 'line',
            areaStyle: {
              normal: {type: 'default',
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(19, 37, 250, 0.2)'
                }, {
                  offset: 1,
                  color: 'rgba(19, 37, 250, 0.2)'
                }], false)
              }
            },
            smooth: true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [610, 312, 221, 654, 910, 630, 310, 521, 354, 560, 830, 310]
          }
        ]
      }
      this.oLine.setOption(option, true)
    },
    drawPie () {
      this.pieId = this.$echarts.init(this.$refs.pie)
      let option1 = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [{
          name: '库存情况',
          type: 'pie',
          radius: '68%',
          center: ['50%', '50%'],
          clockwise: false,
          data: [{
            value: 45,
            name: 'CARD'
          }, {
            value: 25,
            name: 'SSD'
          }, {
            value: 15,
            name: 'U盘'
          }, {
            value: 8,
            name: '嵌入式'
          }, {
            value: 7,
            name: 'FLASH'
          }],
          label: {
            normal: {
              textStyle: {
                color: '#999',
                fontSize: 14
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              borderWidth: 4,
              borderColor: '#ffffff'
            },
            emphasis: {
              borderWidth: 0,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }],
        color: [
          '#00acee',
          '#52cdd5',
          '#79d9f1',
          '#a7e7ff',
          '#c8efff'
        ],
        backgroundColor: '#fff'
      }
      this.pieId.setOption(option1, true)
    },
    drawPie2 () {
      this.pieId2 = this.$echarts.init(this.$refs.hoop)
      let option2 = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          right: '30%',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
            ]
          }
        ]
      }
      this.pieId2.setOption(option2, true)
    }
  }
}
</script>
<style lang='scss' scoped>
.index-wrap{
  .padding-top{
    padding-top: 52px;
  }
  h2{
    text-align: center;
  }
}
</style>
