const db = require('../database/connection')
//const { mountPerfil } = require('./perfilController')
const crypt = require("crypto")

// Create a new Users
const createUser = async (user_name, user_pass) => {
  try {
    let token = generateToken(user_name)

    let existentUser = await db.query(`
      SELECT * FROM users 
      WHERE user_name = $1;`, 
      [user_name]
    )

    if(existentUser.rows[0]) return false

    let result = await db.query(`
      INSERT INTO users (user_name, user_pass, token) 
      VALUES ($1, crypt($2, gen_salt('bf', 8)), $3);`, 
      [user_name, user_pass, token]
    )
    return result.rowCount

  }catch(err){

    return 'err'
  }
}


// Login
const loginUser = async (user_name, user_pass) => {
  try {

    let newToken = generateToken(user_name)
    
    let user = await db.query(`
      SELECT * FROM users 
      WHERE user_name = $1 
      AND user_pass = crypt($2, user_pass);`, 
      [user_name, user_pass]
    )

    if(user.rowCount > 0){

      updateToken(user_name, newToken)

      let { nv, xp, next, hp, attack, defense, points } = user.rows[0]

      return {
        user: user.rows[0].user_name,
        token: newToken,
        perfil: {
          user: user.rows[0].user_name,
          nv, xp, next, hp, attack, defense, points
        } 
      } 
    
    }else {
      return false
    }

  } catch (err) {
    return err
  }
}


// Login with Token
const loginToken = async (username, token) => {

  try {

    let newToken = generateToken(username)

    let user = await db.query(`
      SELECT * FROM users 
      WHERE user_name = $1 
      AND token = $2`, 
      [username, token]
    )

    if(user.rows.length > 0){

      updateToken(username, newToken)

      let { nv, xp, next, hp, attack, defense, points } = user.rows[0]

      return {
        user: user.rows[0].user_name,
        token: newToken,
        perfil: {
          user: user.rows[0].user_name,
          nv, xp, next, hp, attack, defense, points
        }
      } 
    
    }else {
      return false
    }

  } catch (err) {
    return err
  }
}


const updateToken = async (user_name, token) => {
  try {
    
    let user = await db.query(`
      UPDATE users
      SET token = $1
      WHERE user_name = $2`,
      [token, user_name]
    )

    return user

  } catch (err) {
    return err
  }
  
}


const generateToken = (user) => {
  let date = new Date().getTime();
  return crypt.createHash("sha256").update(`${date}${user}`).digest("base64")
}


module.exports = {
  createUser,
  loginUser,
  loginToken
}