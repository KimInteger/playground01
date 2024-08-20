import React from 'react';

type Monster = {
  hp: number,
  atk : number,
  def: number,
  exp: number,
}

interface MonsterProps {
  monster: Monster;
}

const MonsterSection: React.FC<MonsterProps> = ({ monster }) => {
  return (
    <div className="bg-red-900 text-white p-6 rounded-lg shadow-md w-[180px] h-[240px]">
      <h2>monster</h2>
      <p className="mb-2">HP: <span className="font-semibold">{monster.hp}</span></p>
      <p className="mb-2">ATK: <span className="font-semibold">{monster.atk}</span></p>
      <p className="mb-2">DEF: <span className="font-semibold">{monster.def}</span></p>
      <p>EXP: <span className="font-semibold">{monster.exp}</span></p>
    </div>
  );
};

export default MonsterSection;
