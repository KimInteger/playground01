'use client'

import MonsterSection from "../ui/BattleField/monsterSection"
import PlayerSection from "../ui/BattleField/playerSection"
import attackSome from "../lib/attackSome"
import { useState } from "react"

export default function Home() {
  const player = {
    hp : 200,
    atk : 10,
    exp : 0
  }

  const initialMonster = {
    hp: 400,
    atk: 5,
    def: 5,
    exp: 100
  }

  const [monster, setMonster] = useState(initialMonster)

  const attackMotion = () => {
    const newMonsterHp = attackSome(player, monster)
    setMonster(prevMonster => ({
      ...prevMonster,
      hp: newMonsterHp
    }))
  }

  return(
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <PlayerSection player={player}/>
        <MonsterSection monster={{ ...monster, hp: monster.hp }} />
      </div>
      <div className="mt-4 mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={attackMotion}>공격!!!</button>
      </div>
      <div className="border border-gray-300 p-4 w-full max-w-md">

      </div>
    </div>
  )
}