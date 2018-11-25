<template>
  <Layout :style="{background: '#FFFFFA',height: '100%'}">
    <Row style="margin-top:1%">
      <Col span="12" class="tobedone">
        <importantcards :todo="todo" :odd="even"></importantcards>
      </Col>
      <Col span="12" class="alreadydone">
        <importantcards :todo="todo" :odd="odd"></importantcards>
      </Col>
    </Row>
  </Layout>
</template>

<script>
import importantcards from '@/components/importantcards.vue'
export default {
  name: 'important',
  props: ['todo'],
  data () {
    return {
      odd: 1,
      even: 0
    }
  },
  components: {
    importantcards
  }
}
</script>
