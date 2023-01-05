/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleReservation } from '../Redux/Rockets/Rockets';

// Components for RocketDetails
import RocketDetails from '../components/RocketDetails';

// Stylesheet for RocketDetails
import '../components/RocketDetails.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets);
  const eventHandler = (id) => {
    dispatch(toggleReservation(id));
  };

  
};

export default Rockets;
