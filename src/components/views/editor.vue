<template>
  <div class="rs-editor-wrap">
    <div ref="editor" style="text-align:left"></div>
    <button v-on:click="getContent">保存内容</button>
    <div class="edit-content">{{htmlContent}}</div>
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'editor',
  data () {
    return {
      editorContent: '',
      htmlContent: ''
    }
  },
  methods: {
    getContent: function () {
      this.htmlContent = this.editorContent || this.editor.txt.text()
    }
  },
  mounted () {
    this.editor = new E(this.$refs.editor)
    this.editor.customConfig.onchange = (html) => {
      this.editorContent = JSON.stringify(html)
    }
    this.editor.create()
    this.editor.txt.html('<p>你在南方的艳阳里，大雪纷飞，我在北方的寒夜了，四季如春，如果天黑之前来的几，我要忘了你眼睛</p>')
  }
}
</script>

<style lang="scss" scoped>
  .rs-editor-wrap{
    .edit-content{
      padding: 18px 0;
      border: 1px solid rgba(1,1,1,.2);
      color: purple;
    }
  }
</style>
