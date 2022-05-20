import {Component} from 'react'

import Filters from '../Filters'
import InterviewQuestion from '../InterviewQuestion'
import './index.css'

let filteredData
class InterviewQuestionsApp extends Component {
  state = {
    activeLanguage: 'ALL',
    activeDifficultyLevel: 'ALL',
  }

  onChangeLanguage = value => {
    this.setState({
      activeLanguage: value,
    })
  }

  onChangeDifficultyLevel = value => {
    this.setState({
      activeDifficultyLevel: value,
    })
  }

  getFilteredData = () => {
    const {questionsData} = this.props
    const {activeLanguage, activeDifficultyLevel} = this.state

    if (activeLanguage === 'ALL' && activeDifficultyLevel === 'ALL') {
      filteredData = questionsData
    } else if (activeLanguage === 'ALL' && activeDifficultyLevel !== 'ALL') {
      filteredData = questionsData.filter(
        eachQuestion => eachQuestion.difficultyLevel === activeDifficultyLevel,
      )
    } else if (activeLanguage !== 'ALL' && activeDifficultyLevel === 'ALL') {
      filteredData = questionsData.filter(
        eachQuestion => eachQuestion.language === activeLanguage,
      )
    } else {
      filteredData = questionsData.filter(
        eachQuestion =>
          eachQuestion.language === activeLanguage &&
          eachQuestion.difficultyLevel === activeDifficultyLevel,
      )
    }
    return filteredData
  }

  render() {
    const filteredQuestionsData = this.getFilteredData()
    const {levelsData, languageData} = this.props

    return (
      <div className="app-container">
        <div className="heading-container">
          <h1 className="heading">30 Seconds of Interviews</h1>
          <img
            className="interview-image"
            src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
            alt="img"
          />
        </div>
        <div className="filter-container">
          <div className="questions-container">
            <Filters
              levelsData={levelsData}
              languageData={languageData}
              onChangeDifficultyLevel={this.onChangeDifficultyLevel}
              onChangeLanguage={this.onChangeLanguage}
            />
            {filteredQuestionsData.map(eachQuestion => (
              <InterviewQuestion
                key={eachQuestion.id}
                question={eachQuestion}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
