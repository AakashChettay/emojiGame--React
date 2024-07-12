import './index.css'

const WinOrLoseCard = props => {
  const {score, gameResult, topScore, playAgain} = props
  const playAgainClicked = () => {
    playAgain()
  }
  return (
    <div className="card">
      <img
        src={
          gameResult === 'win'
            ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
        }
        alt="win or lose"
        className="resultImage"
      />
      <div className="resultDisplayContainer">
        <h1 className="resHead">
          {gameResult === 'win' ? 'You Won' : 'You Lose'}
        </h1>
        <p className="resPara">
          {gameResult === 'win' ? 'Best Score' : 'Score'}
        </p>
        <p className="scoreStyle">
          {gameResult === 'win' ? `${topScore}/12` : `${score}/12`}
        </p>
        <button
          onClick={playAgainClicked}
          type="button"
          className="play-again-btn"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}
export default WinOrLoseCard
