/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

let emojiClicksCountObject = {}
let res
class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      gameResult: 'playing',
      emojisList,
      score: 0,
      topScore: 0,
    }
  }

  scoreCalculator = id => {
    let {score, topScore, gameResult} = this.state
    if (!(id in emojiClicksCountObject)) {
      score += 1
      emojiClicksCountObject[id] = true

      if (score > topScore) {
        topScore = score
      }
    } else {
      res = -1
    }
    console.log(emojiClicksCountObject)
    if (score === 12) {
      gameResult = 'win'
      emojiClicksCountObject = {}
    } else if (res === -1) {
      gameResult = 'lose'
      emojiClicksCountObject = {}
    } else {
      gameResult = 'playing'
    }
    this.setState({score, topScore, gameResult})
  }

  playAgain = () => {
    emojiClicksCountObject = {}
    res = 0
    this.setState({
      gameResult: 'playing',
      score: 0,
      emojisList: this.shuffledEmojisList(),
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.state
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onEmojiClick = () => {
    this.setState({emojisList: this.shuffledEmojisList()})
  }

  render() {
    const {emojisList, score, topScore, gameResult} = this.state
    return (
      <>
        <NavBar score={score} topScore={topScore} />
        <div className="emoji-game-bgContainer">
          {gameResult === 'playing' ? (
            <ul className="emoji-list">
              {emojisList.map(emoji => (
                <EmojiCard
                  scoreCalculator={this.scoreCalculator}
                  key={emoji.id}
                  emojiDetails={emoji}
                  onEmojiClick={this.onEmojiClick}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              playAgain={this.playAgain}
              topScore={topScore}
              score={score}
              gameResult={gameResult}
            />
          )}
        </div>
      </>
    )
  }
}

export default EmojiGame
