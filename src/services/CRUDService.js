const connection = require('../config/database')

const getAllUsers= async ()=>{
let [result,fields] = await connection.query('select * from Users')
  return result
}
const getUpdateUser = async (userId)=>{
   let [result,fields] = await connection.query('select * from Users where id = ?',[userId])
   console.log(result)
   let user = result && result.length>0 ? result[0]: {}
   return user
}
module.exports = {
    getAllUsers,
    getUpdateUser
}