<template>
  <div class="todolist">
    <el-dialog title="Add something" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="Title" placeholder="Describe it in a few words" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Detail" placeholder="Describe it in detail" :label-width="formLabelWidth">
      <el-input type="textarea" autosize v-model="form.detail"></el-input>
    </el-form-item>
    <el-form-item label="Deadline" placeholder="Deadline?" :label-width="formLabelWidth">
    <el-date-picker v-model="form.date" type="datetime" style={padding:50px}></el-date-picker>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
    <Layout :style="{background: '#fff',height: '100%'}">
      <Header :style="{background: '#000'}">
        <p style="font-size:30px;color:#fff;margin-left:0%;">
        A simple todo list written by Vue.js
        </p>
      </Header>
      <Content>
        <el-button plain style="margin:10px" @click="dialogFormVisible = true"> Click me to add some todos </el-button>
        <Row>
          <Col span="12">
            <h3>
              Things to be done...
            </h3>
          </Col>
          <Col span="12">
            <h3>
              What you have already done...
            </h3>
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
export default {
  name: 'whattodo',
  data () {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date: '',
        detail: ''
      },
      formLabelWidth: '120px'
    }
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
