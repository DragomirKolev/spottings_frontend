import React from 'react';
import renderer from 'react-test-renderer';

import TextBox from '../../../components/common/TextBox';

it('renders TextBox', () => {
  const tree = renderer
    .create(<TextBox 
          label={'Confident in your sighting?'}
          value='testValue'
          search={['te', 'tes', 'test']}
          help={false}
          onChange={jest.fn()}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});