import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentList from './comment-list'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should add 2 and 2', () => {
    expect(2 + 2).toEqual(4)
  })

  it('should render items', () => {
    const container = shallow(<CommentList comments={articles.comments} />)

    expect(container.find('.test--comment-list__item').length).toEqual(
      comments.length
    )
  })

  it('should open comments on click', () => {
    const container = mount(<CommentList comments={articles.comments} />)

    expect(container.find('.test--comment__body').length).toEqual(0)

    container
      .find('.test--comment__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--comment__body').length).toEqual(1)
  })
})
