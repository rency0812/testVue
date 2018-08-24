<template>
  <div id="task">
    <input id="txt" type="text" @keydown.enter="addTask" v-model="task.content" autofocus="autofocus" placeholder="请输入任务回车添加">
    <div class="task-list">
      <div class="list-box" :key="item.id" v-for="(item, index) in list">
        <input type="checkbox" @click="changeState(index)" :checked = "item.finished">
        <span :class=" {'finish':item.finished} ">{{ item.content }}</span>
        <button type="button" @click="delTask(index)" class="del">删除</button>
      </div>
      <em v-if="list.length === 0" class="empty">暂无任务</em>
    </div>
    <table border="1">
      <tr class="th-head"><th>已删除的内容</th><th>是否完成</th></tr>
      <tr :key="v.id" v-for="v in delList"><th>{{v.content}}</th><th>{{v.finished?'已完成':'未完成'}}</th>
      <!-- <th><button @click="reply(i)" :class="{ 'none':v.finished}">{{v.finished?'':'恢复'}}</button></th> -->
      </tr>
    </table>
    <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
      <legend>评分</legend>
    </fieldset>
    <table class="layui-hide" id="test"></table>
  </div>
</template>

<script>
import axios from '../../interceptor'

export default {
  data () {
    return {
      task: {
        content: '',
        finished: false,
        deleted: false
      },
      list: [
        {content: '就像这样子', finished: false},
        {content: '你可以添加你自己的日常', finished: false},
        {content: '完成的就干掉它', finished: true}
      ],
      delList: [],
      delData: null
    }
  },
  methods: {
    initRate () {
      let layui = window.layui
      layui.use('table', () => {
        var table = layui.table
        table.render({
          elem: '#test',
          url: '/static/tsconfig.json',
          height: 350,
          cols: [[
            {field: 'id', width: 80, title: 'ID', sort: true},
            {field: 'username', width: 80, title: '用户名'},
            {field: 'sex', width: 80, title: '性别', sort: true},
            {field: 'city', width: 80, title: '城市'},
            {field: 'sign', title: '签名', minWidth: 150},
            {field: 'experience', width: 80, title: '积分', sort: true},
            {field: 'score', width: 80, title: '评分', sort: true},
            {field: 'classify', width: 80, title: '职业'},
            {field: 'wealth', width: 135, title: '财富', sort: true}
          ]],
          page: true
        })
      })
    },
    callPost () {
      axios.post('/vehicleinternet/login', {loginName: 'chengzhao', password: window.btoa('123456')}).then(response => {
        console.log(response.data)
      }).catch(err => {
        console.log(err)
      })
    },
    reply (i) {
      this.delList.splice(i, 1)
      this.list.push(this.delList[i])
    },
    addTask () {
      if (this.task.content === '' || this.task.content === null) {
        this.$message({
          type: 'info',
          message: '不能添加空任务'
        })
        return
      }
      this.list.push(this.task)
      console.log(this.list)
      this.task = {
        content: '',
        finished: false,
        deleted: false
      }
    },
    changeState (index) {
      let curState = this.list[index].finished
      this.list[index].finished = !curState
    },
    delTask (index) {
      let self = this
      if (!this.list[index].finished) {
        this.$Modal.confirm({
          title: '提示',
          content: '<p>该任务尚未完成，确定要删除吗？</p>',
          onOk: () => {
            self.del(index)
            self.check()
            this.$Message.info('已删除')
          },
          onCancel: () => {
            this.$Message.info('已取消')
          }
        })
      } else {
        this.del(index)
      }
    },
    del (index) {
      this.delList.push(this.list[index])
      window.localStorage.setItem('taskData', JSON.stringify(this.delList))
      this.list.splice(index, 1)
    },
    check () {
      let taskData = window.localStorage.getItem('taskData')
      this.delData = JSON.parse(taskData)
    }
  },
  destroyed () {
    //  alert(123)
  },
  beforeDestroy () {
    //  alert('离开了')
  },
  mounted () {
    this.initRate()
    this.check()
    if (this.delData) {
      this.delList = this.delData
    }
    for (let i = 0; i <= 5; i++) {
      if (i === 3) { continue }
      console.log(i)
    }
    this.callPost()
    // this.delList.forEach((v, i) => {
    //   if (i === 2) { return }
    //   console.log(v)
    // })
  }
}
</script>

<style lang="scss">

  .layui-table {
    width: 100%;
    background-color: #fff;
    color: #666
  }

.layui-table tr {
    transition: all .3s;
    -webkit-transition: all .3s
}

.layui-table th {
    text-align: left;
    font-weight: 400
}

.layui-table tbody tr:hover,.layui-table thead tr,.layui-table-click,.layui-table-header,.layui-table-hover,.layui-table-mend,.layui-table-patch,.layui-table-tool,.layui-table[lay-even] tr:nth-child(even) {
    background-color: #f2f2f2
}

.layui-table td,.layui-table th,.layui-table-fixed-r,.layui-table-header,.layui-table-page,.layui-table-tips-main,.layui-table-tool,.layui-table-view,.layui-table[lay-skin=line],.layui-table[lay-skin=row] {
    border-width: 1px;
    border-style: solid;
    border-color: #e6e6e6
}

.layui-table td,.layui-table th {
    position: relative;
    padding: 9px 15px;
    min-height: 20px;
    line-height: 20px;
    font-size: 14px
}

.layui-table[lay-skin=line] td,.layui-table[lay-skin=line] th {
    border-width: 0 0 1px
}

.layui-table[lay-skin=row] td,.layui-table[lay-skin=row] th {
    border-width: 0 1px 0 0
}

.layui-table[lay-skin=nob] td,.layui-table[lay-skin=nob] th {
    border: none
}

.layui-table img {
    max-width: 100px
}

.layui-table[lay-size=lg] td,.layui-table[lay-size=lg] th {
    padding: 15px 30px
}

.layui-table-view .layui-table[lay-size=lg] .layui-table-cell {
    height: 40px;
    line-height: 40px
}

.layui-table[lay-size=sm] td,.layui-table[lay-size=sm] th {
    font-size: 12px;
    padding: 5px 10px
}

.layui-table-view .layui-table[lay-size=sm] .layui-table-cell {
    height: 20px;
    line-height: 20px
}

.layui-table[lay-data] {
    display: none
}

.layui-table-box,.layui-table-view {
    position: relative;
    overflow: hidden
}

.layui-table-view .layui-table {
    position: relative;
    width: auto;
    margin: 0
}

.layui-table-body,.layui-table-header .layui-table,.layui-table-page {
    margin-bottom: -1px
}

.layui-table-view .layui-table[lay-skin=line] {
    border-width: 0 1px 0 0
}

.layui-table-view .layui-table[lay-skin=row] {
    border-width: 0 0 1px
}

.layui-table-view .layui-table td,.layui-table-view .layui-table th {
    padding: 5px 0;
    border-top: none;
    border-left: none
}

.layui-table-view .layui-table td {
    cursor: default
}

.layui-table-view .layui-form-checkbox[lay-skin=primary] i {
    width: 18px;
    height: 18px
}

.layui-table-header {
    border-width: 0 0 1px;
    overflow: hidden
}

.layui-table-sort {
    width: 10px;
    height: 20px;
    margin-left: 5px;
    cursor: pointer!important
}

.layui-table-sort .layui-edge {
    position: absolute;
    left: 5px;
    border-width: 5px
}

.layui-table-sort .layui-table-sort-asc {
    top: 4px;
    border-top: none;
    border-bottom-style: solid;
    border-bottom-color: #b2b2b2
}

.layui-table-sort .layui-table-sort-asc:hover {
    border-bottom-color: #666
}

.layui-table-sort .layui-table-sort-desc {
    bottom: 4px;
    border-bottom: none;
    border-top-style: solid;
    border-top-color: #b2b2b2
}

.layui-table-sort .layui-table-sort-desc:hover {
    border-top-color: #666
}

.layui-table-sort[lay-sort=asc] .layui-table-sort-asc {
    border-bottom-color: #000
}

.layui-table-sort[lay-sort=desc] .layui-table-sort-desc {
    border-top-color: #000
}

.layui-table-cell {
    height: 28px;
    line-height: 28px;
    padding: 0 15px;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box
}

.layui-table-cell .layui-form-checkbox[lay-skin=primary],.layui-table-cell .layui-form-radio[lay-skin=primary] {
    top: -1px;
    vertical-align: middle
}

.layui-table-cell .layui-form-radio {
    padding-right: 0
}

.layui-table-cell .layui-form-radio>i {
    margin-right: 0
}

.layui-table-cell .layui-table-link {
    color: #01AAED
}

.laytable-cell-checkbox,.laytable-cell-numbers,.laytable-cell-radio,.laytable-cell-space {
    padding: 0;
    text-align: center
}

.layui-table-body {
    position: relative;
    overflow: auto;
    margin-right: -1px
}

.layui-table-body .layui-none {
    line-height: 40px;
    text-align: center;
    color: #999
}

.layui-table-fixed {
    position: absolute;
    left: 0;
    top: 0
}

.layui-table-fixed .layui-table-body {
    overflow: hidden
}

.layui-table-fixed-l {
    box-shadow: 0 -1px 8px rgba(0,0,0,.08)
}

.layui-table-fixed-r {
    left: auto;
    right: -1px;
    border-width: 0 0 0 1px;
    box-shadow: -1px 0 8px rgba(0,0,0,.08)
}

.layui-table-fixed-r .layui-table-header {
    position: relative;
    overflow: visible
}

.layui-table-mend {
    position: absolute;
    right: -49px;
    top: 0;
    height: 100%;
    width: 50px
}

.layui-table-tool {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 30px;
    padding: 10px 15px;
    border-width: 0 0 1px
}

.layui-table-page {
    position: relative;
    width: 100%;
    padding: 7px 7px 0;
    border-width: 1px 0 0;
    height: 41px;
    font-size: 12px
}

.layui-table-page>div {
    height: 26px
}

.layui-table-page .layui-laypage {
    margin: 0
}

.layui-table-page .layui-laypage a,.layui-table-page .layui-laypage span {
    height: 26px;
    line-height: 26px;
    margin-bottom: 10px;
    border: none;
    background: 0 0
}

.layui-table-page .layui-laypage a,.layui-table-page .layui-laypage span.layui-laypage-curr {
    padding: 0 12px
}

.layui-table-page .layui-laypage span {
    margin-left: 0;
    padding: 0
}

.layui-table-page .layui-laypage .layui-laypage-prev {
    margin-left: -7px!important
}

.layui-table-page .layui-laypage .layui-laypage-curr .layui-laypage-em {
    left: 0;
    top: 0;
    padding: 0
}

.layui-table-page .layui-laypage button,.layui-table-page .layui-laypage input {
    height: 26px;
    line-height: 26px
}

.layui-table-page .layui-laypage input {
    width: 40px
}

.layui-table-page .layui-laypage button {
    padding: 0 10px
}

.layui-table-page select {
    height: 18px
}

.layui-table-view select[lay-ignore] {
    display: inline-block
}

.layui-table-patch .layui-table-cell {
    padding: 0;
    width: 30px
}

.layui-table-edit {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0 14px 1px;
    border-radius: 0;
    box-shadow: 1px 1px 20px rgba(0,0,0,.15)
}

.layui-table-edit:focus {
    border-color: #5FB878!important
}

select.layui-table-edit {
    padding: 0 0 0 10px;
    border-color: #C9C9C9
}

.layui-table-view .layui-form-checkbox,.layui-table-view .layui-form-radio,.layui-table-view .layui-form-switch {
    top: 0;
    margin: 0;
    box-sizing: content-box
}

.layui-table-view .layui-form-checkbox {
    top: -1px;
    height: 26px;
    line-height: 26px
}

body .layui-table-tips .layui-layer-content {
    background: 0 0;
    padding: 0;
    box-shadow: 0 1px 6px rgba(0,0,0,.1)
}

.layui-table-tips-main {
    margin: -44px 0 0 -1px;
    max-height: 150px;
    padding: 8px 15px;
    font-size: 14px;
    overflow-y: scroll;
    background-color: #fff;
    color: #333
}

.layui-table-tips-c {
    position: absolute;
    right: -3px;
    top: -12px;
    width: 18px;
    height: 18px;
    padding: 3px;
    text-align: center;
    font-weight: 700;
    border-radius: 100%;
    font-size: 14px;
    cursor: pointer;
    background-color: #666
}

.layui-table-tips-c:hover {
    background-color: #999
}
  #task{
    padding-top: 30px;
    .none{
      display: none
    }
    table {
      .th-head{
        color: red;
      }
    }
    #txt{
      display: block;
      margin: 0 auto;
      width: 300px;
      height: 36px;
      line-height: 36px;
      box-sizing: border-box;
      padding-left: 4px;
      border-radius: 6px;
      border: 1px solid #ccc;
      outline: 0;
      box-shadow: 0 0 5px #ccc;
    }
    .task-list{
      margin:0 auto;
      width: auto;
      .list-box{
        position: relative;
        padding: 8px 0;
        font-size: 20px;
        border-bottom: 1px solid #efefef;
        &:last-child{
          border-bottom: 0;
        }
        .finish{
          text-decoration: line-through;
          color: #ccc;
        }
        .del{
          position: relative;
          right: 0;
          background: red;
          text-decoration: none;
          font-size: 14px;
          border: 0;
          outline: 0;
          padding: 2px 6px;
          border-radius: 5px;
          color: #fff;
        }
      }
      .empty{
        display: block;
        font-size: 14px;
        color: #008000;
        text-align: center;
        padding: 12px 0;
      }
    }
    &>table{
      width: 300px;
      margin: 20px auto 0;
      th,td{
        padding: 4px;
        text-align: center
      }
    }
  }
</style>
