import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const TestComponent = defineComponent({
    template: '<div>Hello, {{ name }}!</div>',
    props: ['name']
})

describe('TestComponent', () => {
    test('renders properly', () => {
        const wrapper = mount(TestComponent, {
            props: {
                name: 'World'
            }
        })
        expect(wrapper.text()).toContain('Hello, World!')
    })
})