const express = require('express')
const app = express()
const port = 3002
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {userRouter}= require('../backend/router/userRouter')
const {sessionRouter}= require('../backend/router/sessionRouter')



app.use(
    cors({
        origin:'http://localhost:3000',
        credentials:false,
        optionsSuccessStatus:200,
    })
)
app.use(express.json())
app.use('/',userRouter)
app.use('/',sessionRouter)

app.listen(port, ()=>{
    console.log('server is alive')
    console.log('http://localhost:'+port)
})