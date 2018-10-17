import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentListWithToggleOpen, { CommentList } from './comment-list'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render items', () => {
    articles.map((article) => {
      if (article.comments !== undefined) {
        const container = shallow(
          <CommentListWithToggleOpen
            comments={article.comments}
            isOpen={true}
          />
        )
        expect(container.find('.test--comment-list__item').length).toEqual(
          article.comments.length
        )
      }
    })
  })

  it('should render all closed comments by default', () => {
    articles.map((article) => {
      if (article.comments !== undefined) {
        const container = shallow(
          <CommentListWithToggleOpen comments={article.comments} />
        )
        expect(container.find('.test--comment__body').length).toEqual(0)
      }
    })
  })

  it('should open comments on click', () => {
    const container = mount(
      <CommentListWithToggleOpen comments={articles[0].comments} />
    )
    expect(container.find('.test--comment__list').length).toEqual(0)

    container
      .find('.test--comment__btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test--comment__list').length).toEqual(1)
  })

  it('should fetch data on mount', () => {
    articles.map((article) => {
      let functionIsCalled = false
      mount(
        <CommentListWithToggleOpen
          comments={article.comments}
          fetchData={() => (functionIsCalled = true)}
        />
      )

      expect(functionIsCalled).toBe(true)
    })
  })
})
