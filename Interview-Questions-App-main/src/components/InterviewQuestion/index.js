import {Component} from 'react'

import './index.css'

const languages = {
  html: 'HTML',
  css: 'CSS',
  javascript: 'JAVASCRIPT',
}

const levels = {
  easy: 'EASY',
  medium: 'MEDIUM',
  hard: 'HARD',
}

class InterviewQuestion extends Component {
  state = {
    isAnswerHidden: false,
  }

  renderAnswer = () => {
    const {question} = this.props
    const {answerText} = question
    const {isAnswerHidden} = this.state

    if (isAnswerHidden) {
      return <p className="answer-text"> {answerText} </p>
    }
    return null
  }

  onToggleAnswer = () => {
    this.setState(prevState => ({
      isAnswerHidden: !prevState.isAnswerHidden,
    }))
  }

  renderLanguageClassName = () => {
    const {question} = this.props
    const {language} = question
    let selectedLanguage

    if (language === languages.html) {
      selectedLanguage = 'html'
    } else if (language === languages.css) {
      selectedLanguage = 'css'
    } else {
      selectedLanguage = 'javascript'
    }
    return selectedLanguage
  }

  renderDifficultyLevelClassName = () => {
    const {question} = this.props
    const {difficultyLevel} = question
    let selectedDifficultyLevel

    if (difficultyLevel === levels.easy) {
      selectedDifficultyLevel = 'easy-level'
    } else if (difficultyLevel === levels.medium) {
      selectedDifficultyLevel = 'medium-level'
    } else {
      selectedDifficultyLevel = 'hard-level'
    }
    return selectedDifficultyLevel
  }

  render() {
    const {question} = this.props
    const {questionText, language, difficultyLevel} = question
    const {isAnswerHidden} = this.state
    const imgUrl = isAnswerHidden
      ? 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'
      : 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'
    const altText = isAnswerHidden ? 'up arrow' : 'down arrow'

    return (
      <div className="question-container">
        <div className="apply-filters">
          <span
            className={`${this.renderDifficultyLevelClassName()} selected-item`}
          >
            {difficultyLevel}
          </span>
          <span className={`${this.renderLanguageClassName()} selected-item`}>
            {language}
          </span>
        </div>
        <h1 className="question-text">{questionText}</h1>
        <button type="button" className="button" onClick={this.onToggleAnswer}>
          {isAnswerHidden ? 'Hide' : 'Show'}
          <img className="image" src={imgUrl} alt={altText} />
        </button>
        {this.renderAnswer()}
      </div>
    )
  }
}

export default InterviewQuestion
