'use client'

import MonsterSection from "../ui/BattleField/monsterSection"
import PlayerSection from "../ui/BattleField/playerSection"
import { useState, useRef, useEffect } from "react"

export default function Home() {
  const initialPlayer = {
    hp: 200,
    atk: 10,
    exp: 0
  }

  const initialMonster = {
    hp: 400,
    atk: 5,
    def: 5,
    exp: 100
  }

  const [player, setPlayer] = useState(initialPlayer)
  const [monster, setMonster] = useState(initialMonster)
  const [showMonster, setShowMonster] = useState(true)
  const [scriptMessages, setScriptMessages] = useState<string[]>([])

  // 스크롤을 최신 로그로 자동 스크롤
  const logContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = logContainerRef.current
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }, [scriptMessages])

  const attackMotion = () => {
    const damage = player.atk - monster.def
    const newMonsterHp = monster.hp - damage

    let newMessages = [...scriptMessages]

    if (damage > 0) {
      newMessages.push(`플레이어가 몬스터에게 ${damage}만큼의 데미지를 입혔습니다.`)
    } else {
      newMessages.push("플레이어의 공격이 몬스터에게 데미지를 입히지 않았습니다.")
    }

    if (newMonsterHp <= 0) {
      newMessages.push(`몬스터가 사망하였습니다. 몬스터의 경험치 ${monster.exp}를 획득하셨습니다.`)
      
      // 플레이어의 경험치 업데이트
      setPlayer(prevPlayer => ({
        ...prevPlayer,
        exp: prevPlayer.exp + monster.exp
      }))

      // 몬스터 사라지기
      setShowMonster(false)
      
      // 5초 후 몬스터 생성
      setTimeout(() => {
        setMonster(initialMonster) // 새 몬스터로 초기화
        setShowMonster(true)
        setScriptMessages(prevMessages => [
          ...prevMessages,
          "몬스터가 새로 생성되었습니다."
        ])
      }, 5000)
      
    } else {
      // 몬스터의 HP 업데이트
      setMonster(prevMonster => ({
        ...prevMonster,
        hp: newMonsterHp
      }))
    }

    // 스크립트 메시지 업데이트
    setScriptMessages(newMessages)
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-4">
        <PlayerSection player={player} />
        {showMonster && <MonsterSection monster={monster} />}
      </div>
      <div className="mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={attackMotion}
        >
          공격!!!
        </button>
      </div>
      <div className="border border-gray-300 p-4 w-full max-w-md h-[300px] overflow-y-auto" ref={logContainerRef}>
        {scriptMessages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  )
}
