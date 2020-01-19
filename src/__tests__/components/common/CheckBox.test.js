import React from 'react';
import renderer from 'react-test-renderer';

import CheckBox from '../../../components/common/CheckBox';

it('renders CheckBox', () => {
  const tree = renderer
    .create(<CheckBox 
          label={'Confident in your sighting?'}
          value={true} 
          onChange={jest.fn()}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
