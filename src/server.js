import express from 'express'

let server = express()

server.listen(4000,()=>{
  console.log('Connect to Server at 4000 Successful')
})
