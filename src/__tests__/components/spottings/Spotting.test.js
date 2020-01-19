import React from 'react';
import renderer from 'react-test-renderer';

import Spotting from '../../../components/spottings/Spotting';

it('renders Spotting', () => {
  const spotting = {
    'date_time': '2020-01-19T14:17:51.495Z',
	  'location': 'in the middle of nowhere',
	  'bird_type': 'pidgeon',
	  'name': 'George Paul',
	  'confident': true
  }
  const tree = renderer
    .create(<Spotting spotting={spotting} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});