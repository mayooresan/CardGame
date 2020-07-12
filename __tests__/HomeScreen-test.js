/**
 * @format
 */

import 'react-native';
import React from 'react';
import HomeScreen from '../src/screens/HomeScreen'
import CACard from '../src/components/CACard'
import CAHeader from '../src/components/CAHeader'
import CALinkButton from '../src/components/CALinkButton'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.useFakeTimers();

it('renders correctly', async() => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly CACard', async() => {
  const tree = renderer.create(<CACard />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly CAHeader', async() => {
  const tree = renderer.create(<CAHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly CALinkButton', async() => {
  const tree = renderer.create(<CALinkButton />).toJSON();
  expect(tree).toMatchSnapshot();
});