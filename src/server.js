import express from 'express'
import grapqlHTTP from 'express-graphql'
import config from './config'

const server = express()
const PORT = process.env.port || config.express.port

server.use('/graphql',grapqlHTTP({

}))
server.listen(PORT,(err)=>{
  if (err) console.log(err)
  else console.log('UStory Backend Service listen to PORT '+PORT);
})
