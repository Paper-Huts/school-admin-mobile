import React from 'react';
import renderer from 'react-jest-renderer';

import Attendance from './../components/Attendance/Attendance';

test('renders Attendance component correctly', () => {
  const tree = renderer.create(<Attendance/>).toJSON();
  expect(tree).toMatchSnapshot();
});