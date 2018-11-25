import Vue from 'vue'
import whattodo from '@/components/whattodo.vue'

describe('whattodo.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(whattodo)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent)
      .to.contain('Things to be done...')
  })
})

describe('whattodo.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(whattodo)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent)
      .to.contain('What have been already done...')
  })
})