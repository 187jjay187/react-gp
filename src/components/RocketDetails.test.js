import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../Redux/configureStore';
import RocketDetails from './RocketDetails';

test('Check if rockets render properly', () => {
  const data = {
    name: 'Falcon Heavy',
    desc: 'Falcon Heavy can lift more than twice the payload of the next closest operational vehicle',
    type: 'Rocket',
    flickr_images: ['img'],
  };

  const { getByText } = render(
    <Provider store={store}>
      <RocketDetails rocket={data} />
    </Provider>,
  );

  expect(getByText(/Reserve Rocket/i)).toBeInTheDocument();
});
