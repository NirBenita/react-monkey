import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { postMessage, App } from './App'

it('renders without crashing', () => {
  shallow(<App />);
});

describe('post a message', () => {

  it('should add a message to a given state', () => {
    let state = [];

    postMessage(state, 'gaga');

    expect(state[0]).toEqual('gaga');

  });

  xit('should throw an error if passed object is not a message', () => {
    // TODO: Ask how to go about validation.
    let state = [];

    expect(() => {
      postMessage(state, { value: 'gaga' })
    }).toThrow();
  })
})


describe('user input controller', () => {
  // create a new message object from event
  // 
})

describe('message feed', () => {
  it('should fire an event when a message is added to the feed', () => {
    let mockMessageSentFunc = jest.fn()
    const wrapper = shallow(<App onMessageSent={mockMessageSentFunc} />);
    
    wrapper.find('.response').simulate('click');

    expect(mockMessageSentFunc.mock.calls.length).toBe(1);
  })
    // Event should include which message was fired
})
// desctibe: Bot
// Should render welcome message
// Should listen to a message feed
// Given input x, create and post the correct message