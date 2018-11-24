<template>
  <div class="todolist">
  <el-dialog title="Add something" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="Title" placeholder="Describe it in a few words" :label-width="formLabelWidth">
      <el-input v-model="form.title" autocomplete="off" placeholder="Describe it in a few words"></el-input>
    </el-form-item>
    <el-form-item label="Detail (optional)" placeholder="Describe it in detail" :label-width="formLabelWidth">
      <el-input type="textarea" autosize v-model="form.detail" placeholder="Describe it in detail"></el-input>
    </el-form-item>
    <el-form-item label="Deadline" placeholder="Deadline?" :label-width="formLabelWidth">
    <el-date-picker v-model="form.date" type="datetime" style={padding:50px;margin-left:-54%;} placeholder="Deadline?"></el-date-picker>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">Cancel</el-button>
    <el-button type="primary" @click="confirmation">Confirm</el-button>
  </div>
</el-dialog>
    <Layout :style="{background: '#fff',height: '100%'}">
      <Header :style="{background: '#000'}">
        <p style="font-size:30px;color:#fff;margin-left:0%;">
        A naïve todo list written by Vue.js
        </p>
      </Header>
      <Content>
        <el-button plain style="margin:10px" @click="addsomething"> Click me to add some todos </el-button>
        <Row>
          <Col span="12">
            <h2>
              Things to be done...
            </h2>
          <todocards :todo="todo" :done="tobedone"></todocards>
          </Col>
          <Col span="12">
            <h2>
              What you have already done...
            </h2>
          <todocards :todo="todo" :done="alreadydone"></todocards>
          </Col>
        </Row>
        <Row>
          <Col span="12" :style="{background: '#f00'}">
          </Col>
          <Col span="12" :style="{background: '#0f0'}">
          </Col>
        </Row>
      </Content>
      <Footer>
        SE100 Homework3 2018 © Wang Tianxia
      </Footer>
    </Layout>
  </div>
</template>

<script>
import todocards from '@/components/todocards.vue'
export default {
  name: 'whattodo',
  data () {
    return {
      dialogFormVisible: false,
      tobedone: false,
      alreadydone: true,
      form: {
        title: '',
        date: '',
        detail: ''
      },
      formLabelWidth: '120px',
      todo: [
        {
          title: 'SE101 Homework8',
          date: 'Thu Nov 15 2018 22:00:00 GMT+0800 (中国标准时间)',
          detail: 'Pipeline design',
          done: true
        },
        {
          title: 'SE100',
          date: 'Tue Dec 25 2018 22:00:00 GMT+0800 (中国标准时间)',
          detail: 'Front-end homework',
          done: false
        },
        {
          title: '软件展示会',
          date: 'Wed Dec 5 2018 14:00:00 GMT+0800 (中国标准时间)',
          detail: '',
          done: false
        }
      ]
    }
  },
  methods: {
    confirmation () {
      if (this.form.title === '' || this.form.date === '') {
        this.$message({
          showClose: true,
          message: 'The title and the deadline are required.',
          type: 'error'
        })
        return
      }
      this.dialogFormVisible = false
      this.todo.push({title: this.form.title, date: this.form.date, detail: this.form.detail, done: false})
      console.log(this.todo)
    },
    addsomething () {
      this.dialogFormVisible = true
      this.form.title = ''
      this.form.date = ''
      this.form.detail = ''
    }
  },
  components: {
    todocards
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
