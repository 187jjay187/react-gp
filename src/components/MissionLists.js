/* eslint-disable camelcase */
// import react
// import propertypes from proptypes library
import React from 'react';
import PropTypes from 'prop-types';

// Import MissionLists.css
import './MissionLists.css';
// create MissionLists function
const MissionLists = ({ mission }) => {
  const { mission_name } = mission;

  // return the Mission name html
  return (
    <div className="mission-main-container">
      <span className="mission-name">{ mission_name }</span>
    </div>
  );
};

// import MissionLists react component
MissionLists.propTypes = {
  mission: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MissionLists;
