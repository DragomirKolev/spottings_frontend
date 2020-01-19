import React from 'react';
import renderer from 'react-test-renderer';

import DateTimePicker from '../../../components/common/DateTimePicker';

it('renders DateTimePicker', () => {
  const tree = renderer
    .create(<DateTimePicker 
          value={'11/11/1111 11:11'} 
          onChange={jest.fn()}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
  

