import React from 'react';
import Decide from './Decide'
import { Decision } from './Decide'
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';

afterEach(cleanup);

it('Is initially UNDECIDED', () => {
  const component = renderer.create(
    <Decide />
  );
  let decision = component.toJSON();
  expect(decision).toMatchSnapshot();
});

it('Is YES if yes clicked', () => {
  const { queryByLabelText, getByLabelText } = render(<Decide />);
  fireEvent.click(getByLabelText(/Kyllä/i));
  expect(queryByLabelText(/Kyllä/i)).toBeTruthy();
});

it('Is NO if no clicked', () => {
  const { queryByLabelText, getByLabelText } = render(<Decide />);
  fireEvent.click(getByLabelText(/Ei/i));
  expect(queryByLabelText(/Ei/i)).toBeTruthy();
});
