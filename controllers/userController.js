const db = require('../database/connection')

// Create a new Users
const createUser = async (user_name, user_pass) => {
  try {
    await db.query("INSERT INTO users (user_name, user_pass) VALUES ($1, crypt($2, gen_salt('bf', 8)));", [user_name, user_pass]);
  }catch(err){
    console.log(err)
    return toString(err)
  }
  return 'Usuário criado com sucesso'
};


// Login
const loginUser = async (user_name, user_pass) => {
  try {
    let user = await db.query("SELECT * FROM users WHERE user_name = $1 AND user_pass = crypt($2, user_pass);", [user_name, user_pass])
    console.log(user.rows[0])
    return user

  } catch (err) {
    console.log(err)
    return err
  }
}


module.exports = {
  createUser,
  loginUser
}