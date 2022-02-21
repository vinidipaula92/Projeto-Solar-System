import React, { Component } from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="ourMission">
        <Title headline="Missões" />
        <div className="missao">
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />))}
        </div>
      </div>
    );
  }
}

export default Missions;
