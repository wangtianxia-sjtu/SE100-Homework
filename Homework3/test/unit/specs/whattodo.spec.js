import Vue from 'vue'
import whattodo from '@/components/whattodo.vue'

describe('whattodo.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(whattodo)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.header p').textContent)
      .to.equal('\n        A naïve todo list written by Vue.js\n        ')
  })
})

describe('whattodo.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(whattodo)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.tobedone h2').textContent)
      .to.equal('\n              Things to be done...\n            ')
  })
})

describe('whattodo.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(whattodo)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.alreadydone h2').textContent)
      .to.equal('\n              What you have already done...\n            ')
  })
})

describe('whattodo.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(whattodo)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.footer').textContent)
      .to.equal('\n        SE100 Homework3 2018 © Wang Tianxia\n      ')
  })
})
