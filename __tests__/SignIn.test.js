import React from 'react'
import SignIn from '../components/SignIn'
import renderer from 'react-test-renderer'

test('sign in',()=>{
    const tree = renderer.create(<SignIn/>).toJSON()
    expect(tree).toMatchSnapshot();
})