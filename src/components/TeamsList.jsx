/**
 * Given a list of teams, we need to expose the teams in different ways:
 * - Criteria 1: depending on the score, order the list from highest to lowest.
 * - Criteria 2: depending on the score, order the list from lowest to highest.
 * - Criteria 3: depending on the player's quantity, show ONLY the teams that has more than 3 players.
 *
 * What you need to implement is:
 * - 3 buttons. Each of them need to execute a criteria.
 * - The list of teams should be updated dynamically depending on the selected filter.
 * - Each team item should display: Team Name / Player’s quantity / Total Score of each team.
 */

import { useEffect, useState } from "react";
import './TeamsList.css'
const TEAMS = [
  {
    name: "Red",
    players: ["Robin", "Rey", "Roger", "Richard"],
    games: [
      {
        score: 10,
        city: "LA",
      },
      {
        score: 1,
        city: "NJ",
      },
      {
        score: 3,
        city: "NY",
      },
    ],
  },
  {
    name: "Blue",
    players: ["Bob", "Ben"],
    games: [
      {
        score: 6,
        city: "CA",
      },
      {
        score: 3,
        city: "LA",
      },
    ],
  },
  {
    name: "Yellow",
    players: ["Yesmin", "Yuliana", "Yosemite"],
    games: [
      {
        score: 2,
        city: "NY",
      },
      {
        score: 4,
        city: "LA",
      },
      {
        score: 7,
        city: "AK",
      },
    ],
  },
];

export function TeamsList() {
  const [teams, setTeams] = useState(TEAMS);

  useEffect(() => {
    // calculate this for us so we don't have to do it over the sorting
    if (teams?.length && !teams[0]?.totalScore)
      setTeams((teams) =>
        teams.map((t) => {
          const score = t.games.reduce((sum, curr) => {
            sum += curr.score;
            return sum;
          }, 0);
          return {
            ...t,
            totalScore: score,
          };
        })
      );
  }, [teams]);

  // Order teams by score (highest to lowest)
  function orderTeamByScoreHighestToLowest() {
    //sort does it in place so we MUST create a copy of the array.
    const sorted = [...teams].sort((t1, t2) =>
      t1.totalScore > t2.totalScore ? -1 : 1
    );
    setTeams(sorted);
  }

  // Order teams by score (lowest to highest)
  function orderTeamByScoreLowestToHighest() {
    const sorted = [...teams].sort((t1, t2) =>
      t1.totalScore > t2.totalScore ? 1 : -1
    );
    setTeams(sorted);
  }

  // Filtering teams that with at least 3 players
  function teamsWithMoreThanThreePlayers() {
    const sorted = teams.filter((t) => t.players.length >= 3);
    setTeams(sorted);
  }

  return (
    <div>
      <div className="btn-group">
        <button onClick={() => setTeams(TEAMS)}>Initial list</button>
        <button onClick={orderTeamByScoreHighestToLowest}>
          Highest to Lowest
        </button>
        <button onClick={orderTeamByScoreLowestToHighest}>
          Lowest to Highest
        </button>
        <button onClick={teamsWithMoreThanThreePlayers}>
          Teams with at least 3 players
        </button>
      </div>

      <ul className="teams">
        {teams.map((t) => (
          <div className="team-container" key={`team-item-${t.name}`}>
            <div className="team-row">
              <div>Team name</div>
              <div>{t.name}</div>
            </div>
            <div className="team-row">
              <div>Players quantity</div>
              <div>{t.players.length}</div>
            </div>
            <div className="team-row">
              <div>Total score</div>
              <div>{t.totalScore}</div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
