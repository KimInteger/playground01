type Player = {
  hp : number
  atk : number
}

type Monster = {
  hp : number
  def : number
}

const attackSome = (player : Player,monster :Monster) => {
  const damage = Math.max(0,player.atk - monster.def)

  monster.hp = monster.hp - damage
  
  return monster.hp
}

export default attackSome