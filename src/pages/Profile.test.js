import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Profile from './Profile';

test('check profile rendering', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );

  expect(getAllByText(/My Rockets/i).length).toBe(1);
});
