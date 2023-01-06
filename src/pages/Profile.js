import React from 'react';
import { useSelector } from 'react-redux';
// Components
import RocketLists from '../components/RocketLists';

// Stylesheet
import './Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.Rockets);

  const reservedRockets = rockets.filter((item) => item.reserved === true);

  return (

    <div className="profile-rockets-section">
      <h3 className="rockets-list">My Rockets</h3>
      {reservedRockets.length ? (
        reservedRockets.map((rocket) => (
          <RocketLists
            key={rocket.id}
            rocket={rocket}
          />
        ))
      ) : (
        <span className="no-reserved">No Reserved Rocket!!!</span>
      )}
    </div>

  );
};

export default Profile;
