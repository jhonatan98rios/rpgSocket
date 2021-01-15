const db = require('../database/connection')

async function levelUp(perfil){

  console.log(perfil)

  try {
    let { user, nv, xp, next, hp, attack, defense, points } = perfil

    let data = await db.query(`
      UPDATE users
      SET nv = $1,
          xp = $2,
          next = $3,
          hp = $4,
          attack = $5,
          defense = $6,
          points = $7
      WHERE user_name = $8`,
      [nv, xp, next, hp, attack, defense, points, user]
    )

    return data
  } catch (err) {
    return err
  }
}

module.exports = {
  levelUp
}