import mongoose from 'mongoose'
import config from '../config'

mongoose.connect(config.mongodb.uri,(err)=>{
  if (err) console.log(err)
  else console.log('UStory Backend Service connect to MongoDB '+config.mongodb.uri)
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open',(err){
  if (err) console.log(err)
  else console.log('MongoDB is connected')
})

export default db
