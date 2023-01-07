import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../Redux/configureStore';
import DisplayMission from './DisplayMission';

test('Mission test with snapshot of mission', () => {
  const data = {
    mission_id: 10,
    mission_name: 'Eutelsat',
    description: 'Eutelsat S.A. is a European satellite operator. Providing coverage over the entire European continent, the Middle East, Africa, Asia and the Americas, it is the worlds third largest satellite operator in terms of revenues.',
    reserved: false,
  };
  const component = renderer.create(
    <Provider store={store}>
      <DisplayMission mission={data} />
    </Provider>,
  );
  //   const tree = component.toJSON();
  expect(component.toJSON()).toMatchSnapshot();
});
