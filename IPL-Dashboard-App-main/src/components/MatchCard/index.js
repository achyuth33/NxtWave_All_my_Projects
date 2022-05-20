import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  getMatchStatusClassName = matchStatus => {
    if (matchStatus === 'Won') {
      return 'match-won'
    }
    return 'match-lost'
  }

  render() {
    const {matchData} = this.props
    const {competingTeamLogo, competingTeam, matchStatus, result} = matchData
    const matchStatusClassName = `match-status ${this.getMatchStatusClassName(
      matchStatus,
    )}`

    return (
      <li className="match-card">
        <img
          src={competingTeamLogo}
          className="competing-team-logo"
          alt={`competing-team ${competingTeam}`}
        />
        <p className="competing-team-name">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={matchStatusClassName}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
