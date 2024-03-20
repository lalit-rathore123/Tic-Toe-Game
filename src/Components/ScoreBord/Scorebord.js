import React from 'react'
import "./Score.css"

const Scorebord = ({xScore,oScore,tie,XisPlaying}) => {
  return (
    <div className='scoreboard'>
      <span className= {`x-score ${XisPlaying === true ? "xScoreboard" :""}`} > X = {xScore}</span>
      <span className={`o-score ${XisPlaying === false ? "oScoreboard" :""}`}> O = {oScore}</span>
      <span className='o-tie'> Tie = {tie}</span>
    </div>
  )
}

export default Scorebord
