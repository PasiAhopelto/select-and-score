import React from 'react';
import Decide from './Decide'
import { Decision } from './Decide'
import renderer from 'react-test-renderer';

it('Is initially UNDECIDED', () => {
  const component = renderer.create(
    <Decide />
  );
  let decision = component.toJSON();
  expect(decision).toMatchSnapshot();
  expect(decision.props.decision).toBe(Decision.UNDECIDED);
});
