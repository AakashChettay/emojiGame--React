import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onEmojiClick, scoreCalculator} = props
  const {id, emojiUrl, emojiName} = emojiDetails
  const handleClick = () => {
    onEmojiClick()
    scoreCalculator(id)
  }
  return (
    <li className="emojiCard">
      <button onClick={handleClick} className="btnStyle" type="button">
        <img src={emojiUrl} alt={emojiName} className="emojiImage" />
      </button>
    </li>
  )
}

export default EmojiCard
