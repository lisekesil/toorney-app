import React, { useEffect } from 'react';
import styled from 'styled-components';
import Creator from './Creator/Creator';
import TopBar from './TopBar/TopBar';

const AppContainer = styled.div``;

const teams = ['Apple', 'Orange', 'Kiwi', 'Pear', 'Banana'];

const App = () => {
  const toorney = (teams: string[]) => {
    let numOfTeams = teams.length;

    if (numOfTeams % 2 === 1) {
      teams.push('pauza');
      numOfTeams++;
    }

    const gameweeks = numOfTeams - 1;
    let pairs: any = [];

    for (let gw = 0; gameweeks > gw; gw++) {
      pairs[gw] = [];

      for (let t = 0; numOfTeams / 2 > t; t++) {
        const A = teams[t];
        const B = teams[numOfTeams - 1 - t];

        if (gw % 2 === 1 && t === 0) {
          pairs[gw].push([A, B]);
        } else {
          pairs[gw].push([B, A]);
        }
      }

      teams.splice(1, 0, teams.pop() as string);
    }

    console.log(pairs);
  };

  useEffect(() => {
    toorney(teams);
  }, []);

  return (
    <AppContainer>
      <TopBar />
      {/* <ul>
        {teams.map((team) => (
          <li key={team}>{team}</li>
        ))}
      </ul> */}
      <Creator />
    </AppContainer>
  );
};

export default App;
