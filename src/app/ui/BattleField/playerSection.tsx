import React from 'react';

interface Player {
  hp: number;
  atk: number;
  exp: number;
}

interface PlayerProps {
  player: Player;
}

const PlayerSection: React.FC<PlayerProps> = ({ player }) => {
  return (
    <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md w-[180px] h-[240px] mr-16">
      <h2>player</h2>
      <p className="mb-2">HP: <span className="font-semibold">{player.hp}</span></p>
      <p className="mb-2">ATK: <span className="font-semibold">{player.atk}</span></p>
      <p>EXP: <span className="font-semibold">{player.exp}</span></p>
    </div>
  );
};

export default PlayerSection;
