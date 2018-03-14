import React from 'react'
import Map from '../components/Map'
import renderer from 'react-test-renderer'


test('map view',()=>{
    const tree = renderer.create(<Map/>).toJSON()
    expect(tree).toMatchSnapshot();
})