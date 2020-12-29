const db = require('../database/connection')

const createUser = async (user_name, user_pass) => {
  try {
    await db.query("INSERT INTO users (user_name, user_pass) VALUES ($1, crypt($2, gen_salt('bf', 8)));", [user_name, user_pass]);
  }catch(err){
    console.log(err)
    return toString(err)
  }
  return 'Usuário criado com sucesso'
};


module.exports = {
  createUser
}