import {Component} from 'react'

import './index.css'

class Filters extends Component {
  renderDifficultyLevelOptions = () => {
    const {levelsData} = this.props

    return levelsData.map(({id, level}) => (
      <option key={id} className="option" value={level}>
        {level}
      </option>
    ))
  }

  onChangeLevel = event => {
    const {onChangeDifficultyLevel} = this.props
    const {value} = event.target

    return onChangeDifficultyLevel(value)
  }

  renderLanguageOptions = () => {
    const {languageData} = this.props

    return languageData.map(({id, language}) => (
      <option key={id} className="option" value={language}>
        {language}
      </option>
    ))
  }

  onChangeLanguageOptions = event => {
    const {onChangeLanguage} = this.props
    const {value} = event.target

    return onChangeLanguage(value)
  }

  renderFilters = () => (
    <div className="select-filters">
      <div className="select-options">
        <label htmlFor="language" className="filter-name">
          LANGUAGE
        </label>
        <select
          className="select-item"
          onChange={event => this.onChangeLanguageOptions(event)}
        >
          {this.renderLanguageOptions()}
        </select>
      </div>
      <div className="select-options">
        <label htmlFor="difficulty-level" className="filter-name">
          DIFFICULTY LEVEL
        </label>
        <select
          className="select-item"
          onChange={event => this.onChangeLevel(event)}
        >
          {this.renderDifficultyLevelOptions()}
        </select>
      </div>
    </div>
  )

  render() {
    return <div>{this.renderFilters()}</div>
  }
}

export default Filters
