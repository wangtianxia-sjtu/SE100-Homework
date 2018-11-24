<template>
  <div class="todolist">
  <el-dialog title="Add something" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="Title" placeholder="Describe it in a few words" :label-width="formLabelWidth">
      <el-input v-model="form.title" autocomplete="off" placeholder="Describe it in a few words"></el-input>
    </el-form-item>
    <el-form-item label="Detail" placeholder="Describe it in detail" :label-width="formLabelWidth">
      <el-input type="textarea" autosize v-model="form.detail" placeholder="Describe it in detail"></el-input>
    </el-form-item>
    <el-form-item label="Deadline" placeholder="Deadline?" :label-width="formLabelWidth">
    <el-date-picker v-model="form.date" type="datetime" style={padding:50px} placeholder="Deadline?"></el-date-picker>
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
        A simple todo list written by Vue.js
        </p>
      </Header>
      <Content>
        <el-button plain style="margin:10px" @click="addsomething"> Click me to add some todos </el-button>
        <Row>
          <Col span="12">
            <h3>
              Things to be done...
            </h3>
          <todocards :todo="todo" :done="tobedone"></todocards>
          </Col>
          <Col span="12">
            <h3>
              What you have already done...
            </h3>
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
        SE100 Homework3 2018 Wang Tianxia
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
      todo: []
    }
  },
  methods: {
    confirmation () {
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
