import React from 'react'

type Player = {
  hp: number,
  atk : number,
  exp : number
}

interface PlayerProps {
  player : Player
}

const PlayerSection : React.FC<PlayerProps> = ({player}) => {
  return (
    <div>
      <p>HP : {player.hp}</p>
      <p>ATK : {player.atk}</p>
      <p>EXP : {player.exp}</p>
    </div>
  )
}