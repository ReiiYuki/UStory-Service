import express from 'express'
import mongoose from 'mongoose'

let USTORY_DB_URI = 'mongodb://localhost:27017/ustory'

let server = express()

mongoose.connect(USTORY_DB_URI,(err)=>{
  if (err) console.log(err)
  else console.log('Connect to MongoDB at "'+USTORY_DB_URI+'" Successful')
})
server.listen(4000,(err)=>{
  if (err) console.log(err)
  else console.log('Starting Server at 4000...')
})
