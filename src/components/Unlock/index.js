// Write your code here
import {useState} from 'react'
import {Paragraph} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)
  const clicked = () => {
    setIsLocked(prevState => !prevState)
  }

  console.log(isLocked)
  return (
    <div>
      <img
        src={
          isLocked
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={isLocked ? 'lock' : 'unlock'}
      />
      <Paragraph>
        {isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </Paragraph>
      <button type="submit" onClick={clicked}>
        {isLocked ? 'Unlock' : 'Lock'}
      </button>
    </div>
  )
}

export default Unlock
