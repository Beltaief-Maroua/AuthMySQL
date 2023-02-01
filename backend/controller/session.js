const {connection} = require('../configurationBD/config')
module.exports = {
    Post:(user_id,session)=>{
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO sessions(session,logedIn_At,user_id)Values (?,?,?)',
            [user_id,session,Date.now()+1000*3600*24*7],
            (err,results)=>{
                return err?reject(err):resolve(results)
            }
            )
        })
    },
    Get:(session)=>{
        return new Promise((resolve,reject)=>{
      connection.query('SELECT * FROM sessions WHERE session=?',[session],
      (err,results)=>{
        // console.log(results,'sesssionss')
          err ? reject(err):resolve(results)
      } )
     
        })
    },
    Delete:(session)=>{
        return new Promise((resolve,reject)=>{
            connection.query('DELETE FROM sessions WHERE session=?',[session],
            (err,results)=>{
                err ?reject(err):resolve(results)
            })
        })
    }
}