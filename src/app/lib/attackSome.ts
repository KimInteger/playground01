type Player = {
  hp : number
  atk : number
  exp : number
}

type Monster = {
  hp : number
  atk : number
  def : number
  exp : number
}

const attackSome = (player : Player,monster :Monster) => {
  const damage = Math.max(0,player.atk - monster.def)

  monster.hp = monster.hp - damage
  
  return monster.hp
}

export default attackSome