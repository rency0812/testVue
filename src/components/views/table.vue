<template>
  <div class="table-wrap">
    <Table :content="self" :data="tableData1" :columns="tableColumns1" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
        <div>
            <Page :total="100" :current="1" @on-change="changePage" show-elevator show-sizer show-total></Page>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      self: this,
      tableData1: this.mockTableData1(),
      tableColumns1: [
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '状态',
          key: 'status',
          render: (h, p) => {
            const color = p.row.status === 1 ? 'blue' : p.row.status === 2 ? 'green' : 'red'
            const text = p.row.status === 1 ? '构建中' : p.row.status === 2 ? '构建完成' : '构建失败'
            // return `<tag type="dot" color="${color}">${text}</tag>`
            return (<tag type="dot" color={color}>{text}</tag>)
            // return h('div',[
            //   h('div',{style:{float:'left',width:'50px',height:'50px',background:'#ccc'}},[h('p','内容2')]),
            //   h('div',{style:{float:'left',width:'50px',height:'50px',background:'#fc1'}},[h('p','内容2')])
            // ])
          }
        },
        {
          title: '画像内容',
          key: 'portrayal',
          render: (h, params) => {
            return h('Poptip', {
              props: {
                trigger: 'hover',
                title: params.row.portrayal.length + '个画像内容',
                placement: 'bottom'
              }
            }, [
              h('Tag', params.row.portrayal.length),
              h('div', {
                slot: 'content'
              }, [
                h('ul', this.tableData1[params.index].portrayal.map(item => {
                  return h('li', {
                    style: {
                      textAlign: 'center',
                      padding: '4px'
                    }
                  }, item)
                }))
              ])
            ])
          }
        },
        {
          title: '选定人群数',
          key: 'people',
          render: (h, p) => {
            return h('Poptip',
              {
                props: {
                  trigger: 'hover',
                  title: p.row.people.length + '个客群',
                  placement: 'bottom'
                }
              },
              [
                h('Tag', p.row.people.length),
                h('div', {slot: 'content'}, [
                  h('ul', this.tableData1[p.index].people.map(v => {
                    return h('li', {
                      style: {
                        textAlign: 'center',
                        padding: '5px'
                      }
                    }, v.n + '：' + v.c + '\tpeople')
                  }))
                ])
              ]
            )
          }
        },
        {
          title: '取样时段',
          key: 'time',
          render: (h, p) => {
            return `近${p.row.time}天`
          }
        },
        {
          title: '更新时间',
          key: 'update',
          render: (h, p) => h('div', this.formatDate(this.tableData1[p.index].update))
        },
        {
          title: '操作',
          key: 'act',
          render: (h, p) => {
            return h('div', [
              h('Button', {
                props: {type: 'primary', size: 'small'},
                style: {marginRight: '5px'},
                on: {
                  click: () => this.show(p.index)
                }
              }, '查看'),
              h('Button', {
                props: {type: 'primary', size: 'small'},
                style: {},
                on: {
                  click: () => this.del(p.index)
                }
              }, '删除')
            ]
            )
          }
        }
      ]
    }
  },
  methods: {
    show (i) {
      let _i = 1
      _i = i > 4 ? i - 4 : i
      console.log(_i)
      this.$Modal.info({
        title: '用户信息',
        content: `姓名：${this.tableData1[i].name}<br>内容：${this.tableData1[i].portrayal[_i]}`
      })
    },
    del (i) {
      this.tableData1.splice(i, 1)
    },
    mockTableData1 () {
      let data = []
      for (let i = 0; i < 10; i++) {
        data.push({
          name: '商圈' + Math.floor(Math.random() * 100 + 1),
          status: Math.floor(Math.random() * 3 + 1),
          portrayal: ['城市渗透', '人群迁移', '消费指数', '生活指数', '娱乐指数'],
          people: [
            {
              n: '客群' + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            },
            {
              n: '客群' + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            },
            {
              n: '客群' + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            }
          ],
          time: Math.floor(Math.random() * 7 + 1),
          update: new Date()
        })
      }
      return data
    },
    formatDate (date) {
      const y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      return y + '-' + m + '-' + d
    },
    changePage () {
      // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
      this.tableData1 = this.mockTableData1()
    }
  },
  mounted () {
    this.tableData1 = this.mockTableData1()
  }
}
</script>
<style lang="scss" scoped>

</style>
