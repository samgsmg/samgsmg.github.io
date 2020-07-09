import BaseButton from './_base-button.vue'

describe('@components/_base-button', () => {
  it('renders its content', () => {
    const slotContent = '<span>foo</span>'
    const { element } = shallowMount(BaseButton, {
      slots: {
        defalut: slotContent,
      },
    })
    expect(element.innerHTML).toContains(slotContent)
  })
})
