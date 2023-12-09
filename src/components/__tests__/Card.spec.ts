import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Card from '../Card.vue'

describe('Card', () => {
  it('Should render the card with a title, a tag and an image', () => {
    const wrapper = mount(Card, { props: {
      image: '/images/venice.jpeg',
      title: 'venice',
      tag: 'italy',
    } })
    expect(wrapper.text()).toContain('venice')
    expect(wrapper.text()).toContain('italy')
  })

  it('Should render the card with a title, a tag, an image, a description and a link', () => {
    const wrapper = mount(Card, { props: {
      image: '/images/venice.jpeg',
      title: 'venice',
      tag: 'italy',
      description: "Known for its romantic canals and historic architecture."
    } })
    expect(wrapper.text()).toContain('Known for its romantic canals and historic architecture.')
    expect(wrapper.text()).toContain('Explore More')
  })
})
