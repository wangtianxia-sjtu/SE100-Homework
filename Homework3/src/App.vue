<template>
  <div id="app" style="min-height: 100%">
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
  <Layout :style="{height: '100%'}">
  <Header :style="{background: '#0d0'}" class="header">
        <Row>
        <Col span='12'>
        <p style="font-size:30px;color:#f00;text-align:left">
        <router-link to="/">
        <Button type="primary" style="font-size:20px;margin-left:-2%"> Todo List </Button>
        </router-link>
        </p>
        </Col>
        <Col span='12'>
        <el-button style="float:right;margin-top:2%;margin-right:-5%" @click="addsomething"><Icon type="md-add"/> New </el-button>
        </Col>
        </Row>
  </Header>
  <Layout :style="{background: '#fff', height: '100%'}">
    <Sider hide-trigger :style="{background: '#fff',height: '100%'}">
       <sidebar></sidebar>
    </Sider>
    <Content>
    <router-view :todo="todo"/>
    </Content>
  </Layout>
  <Footer class="footer">
    SE100 Homework3 2018 © Wang Tianxia
  </Footer>
  </Layout>
  </div>
</template>

<script>
import sidebar from '@/components/fixed/sidebar.vue'
export default {
  name: 'App',
  data () {
    return {
      formLabelWidth: '120px',
      dialogFormVisible: false,
      form: {
        title: '',
        date: '',
        detail: ''
      },
      todo: [
        {
          title: 'SE101 Homework8',
          date: 'Thu Nov 15 2018 22:00:00 GMT+0800 (中国标准时间)',
          detail: 'Pipeline design',
          importance: true,
          done: true
        },
        {
          title: 'SE100',
          date: 'Tue Dec 25 2018 22:00:00 GMT+0800 (中国标准时间)',
          detail: 'Front-end homework',
          importance: true,
          done: false
        },
        {
          title: '软件展示会',
          date: 'Wed Dec 5 2018 14:00:00 GMT+0800 (中国标准时间)',
          detail: '',
          importance: false,
          done: false
        }
      ]
    }
  },
  components: {
    sidebar
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
      this.todo.push({title: this.form.title, date: this.form.date, detail: this.form.detail, importance: false, done: false})
      console.log(this.todo)
    },
    addsomething () {
      this.dialogFormVisible = true
      this.form.title = ''
      this.form.date = ''
      this.form.detail = ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%
  /* margin-top: 60px; */
}
</style>
