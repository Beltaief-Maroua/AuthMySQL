const models = require('../controller/session')

module.exports={
    CreateSession:((req,res,user_id,session)=>{
        models.post(user_id,session)
        .then((result)=>{
            res.cookie("auth",session,{
                path: '/',
                expires: new Date(new Date().getTime() + 86400 * 1000),
                httpOnly: false,
                auth: false
            }).send([session,"success",user_id])
        })
        .catch((err)=>{
           res.send(err)
        })
    }),
    VerifySession:(req,res,next)=>{
        if(req.cookies.auth){
            models.Get(req.cookies.auth)
            .then((result)=>{
                if(result.length>0&&(result[0].date>Date.now())){
                    var registerInfo={
                        user_id:result[0].user_id,
                        session:result[0].session,
                    }
                    res.status(200).send(registerInfo)
                }else{
                    res.status(200).send('session login fail')
                }
            })
            .catch((err)=>{
                res.status(500).send(err)
            })
        }else{
            res.status(200).send('session login fail')
        }
    }
}
