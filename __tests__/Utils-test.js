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

it('createArrayOfNumbers test elements range of 0-100', async() => {
    let sampleArray =  createArrayOfNumbers()
    expect(sampleArray[0] >= 0).toBeTruthy();
    expect(sampleArray[0] <=100).toBeTruthy();

    expect(sampleArray[1] >= 0).toBeTruthy();
    expect(sampleArray[1] <=100).toBeTruthy();

    expect(sampleArray[2] >= 0).toBeTruthy();
    expect(sampleArray[2] <=100).toBeTruthy();

    expect(sampleArray[3] >= 0).toBeTruthy();
    expect(sampleArray[3] <=100).toBeTruthy();

    expect(sampleArray[4] >= 0).toBeTruthy();
    expect(sampleArray[4] <=100).toBeTruthy();

    expect(sampleArray[5] >= 0).toBeTruthy();
    expect(sampleArray[5] <=100).toBeTruthy();
});

it('createArrayOfNumbers test array is unique', async() => {
    let sampleArray =  createArrayOfNumbers()
    const isArrayUnique = arr => Array.isArray(arr) && new Set(arr).size === arr.length; // add function to check that array is unique.
    expect(isArrayUnique(sampleArray)).toBeTruthy();
});