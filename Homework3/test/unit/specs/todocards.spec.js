import Vue from 'vue'
import todocards from '@/components/todocards.vue'

function getRenderedText(Component, propsData) {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({ propsData: propsData }).$mount()
    return vm.$el.textContent
}

describe('todocards.vue', () => {
    it('renders correctly with different props', () => {
        expect(getRenderedText(todocards, {
            done: false,
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
        })).to.contain('软件展示会')
    })
})
