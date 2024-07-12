import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <div className="navbar">
      <div className="logoCon">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emojiLogo"
        />
        <h1 className="navText">Emoji Game</h1>
      </div>
      <div className="scoreCon">
        <p className="score">Score: {score}</p>
        <p className="top-score">Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
