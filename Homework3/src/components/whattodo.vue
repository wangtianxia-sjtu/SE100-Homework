<template>
  <div class="todolist">
    <Layout :style="{background: '#FFFFFA',height: '100%'}">
      <Content>
        <Row style="margin-top:1%">
          <Col span="12" class="tobedone">
            <h2>
              Things to be done...
            </h2>
          <todocards :todo="todo" :done="tobedone"></todocards>
          </Col>
          <Col span="12" class="alreadydone">
            <h2>
              What have been already done...
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
      alreadydone: true
    }
  },
  components: {
    todocards
  },
  props: ['todo']
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
