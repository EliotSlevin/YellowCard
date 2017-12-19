import 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

import TitleBar from '../components/TitleBar'

test('renders correctly', () => {
  const tree = renderer.create(<TitleBar />).toJSON();
  expect(tree).toMatchSnapshot()
});
