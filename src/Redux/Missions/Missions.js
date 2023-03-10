/* eslint-disable camelcase */
// imports
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import redux utils folder
import pick, { addJoined } from '../utils';

// Call API BASE_URL
const BASE_URL = 'https://api.spacexdata.com/v3/missions';

// functions for missions
const FETCH_MISSIONS = 'Missions/Missions/FETCH_MISSIONS';
const TOGGLE_JOIN_MISSION = 'Missions/Missions/TOGGLE_JOIN_MISSION';

// Reducers for mission state
const initialState = [];

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_MISSIONS}/fulfilled`:
      return [...action.payload];
    case `${FETCH_MISSIONS}/pending`:
      return state;
    case `${FETCH_MISSIONS}/rejected`:
      return state;
    case TOGGLE_JOIN_MISSION:
      return (state.map((missions) => {
        if (missions.mission_id === action.mission_id) {
          return {
            ...missions,
            joined: !missions.joined,
          };
        }
        return missions;
      }));
    default:
      return state;
  }
}

// functions to create Missions
export const fetchMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  try {
    const response = await axios.get(BASE_URL);
    const { data } = response;
    let missions = [];
    const selectedData = ['mission_id', 'mission_name', 'description'];

    data.forEach((object) => {
      missions.push(pick(object, selectedData));
    });
    missions = addJoined(missions);
    return missions;
  } catch (error) {
    return error;
  }
});

// export toggle
export const toggleJoinMission = (mission_id) => ({ type: TOGGLE_JOIN_MISSION, mission_id });
