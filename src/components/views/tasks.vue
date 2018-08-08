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
  </div>
</template>

<script>
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
    this.check()
    if (this.delData) {
      this.delList = this.delData
    }
    for (let i = 0; i <= 5; i++) {
      if (i === 3) { continue }
      console.log(i)
    }
    // this.delList.forEach((v, i) => {
    //   if (i === 2) { return }
    //   console.log(v)
    // })
  }
}
</script>

<style lang="scss" scoped>
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
      width: 300px;
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
    table{
      width: 300px;
      margin: 20px auto 0;
      th,td{
        padding: 4px;
        text-align: center
      }
    }
  }
</style>
