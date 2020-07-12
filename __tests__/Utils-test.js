/**
 * @format
 */

import 'react-native';
import React from 'react';
import {shuffle, createArrayOfNumbers} from '../src/Utils/SupportFun'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.useFakeTimers();

it('Shuffle test 0 element', async() => {
  expect(shuffle([1,2,3])).toContain(1)
});

it('Shuffle test 1 element', async() => {
    expect(shuffle([1,2,3])).toContain(2)
});

it('Shuffle test 2 element', async() => {
    expect(shuffle([1,2,3])).toContain(3)
});

it('Shuffle test number of element same', async() => {
    expect(shuffle([1,2,3])).toHaveLength(3)
});

it('createArrayOfNumbers test whether numbers outside 100 or below 0', async() => {
    expect(createArrayOfNumbers()).toEqual(
        expect.not.arrayContaining([101, -1])
      );
});

it('createArrayOfNumbers test number of elements', async() => {
    expect(createArrayOfNumbers()).toHaveLength(6)
});