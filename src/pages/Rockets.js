// imports
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleReservation } from '../Redux/Rockets/Rockets';

// Components for RocketDetails
import RocketDetails from '../components/RocketDetails';

// Stylesheet for RocketDetails
import '../components/RocketDetails.css';

// call and destructure state
const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets);

  // create mission function
  const eventHandler = (id) => {
    dispatch(toggleReservation(id));
  };

  if (rockets.length === 0) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  // map the rocket details and return html information
  return (
    <>
      <div className="rockets-main-section">
        {rockets.map((rocket) => (
          <RocketDetails
            key={rocket.id}
            rocket={rocket}
            eventHandler={eventHandler}
          />
        ))}
      </div>
    </>
  );
};

// export rockets
export default Rockets;
