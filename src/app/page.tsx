'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const goBattle = () => {
    router.push('/BattleField')
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[rgb(var(--background-start-rgb))] to-[rgb(var(--background-end-rgb))]">
    <button
      className="
        bg-blue-500
        text-white
        font-bold
        py-4
        px-12
        rounded-lg
        shadow-lg
        transform
        transition-transform
        duration-300
        hover:bg-blue-600
        hover:scale-105
        focus:outline-none
        focus:ring-2
        focus:ring-blue-300
      "
      onClick={goBattle}
    >
      Press Start!
    </button>
  </div>

  );
}
