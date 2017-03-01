import db from '../db'

const Component = db.model('Component',{
  name : {
    type : String,
    required : true
  },
  description : String,
  code : {
    type : String,
    required : true,
    default : ''
  },
  isActive : {
    type : Boolean,
    required : true,
    default : true
  },
  createdDate : {
    type : Date,
    required : true,
    default : Date.now
  },
  updatedDate : {
    type : Date,
    required : true,
    default : Date.now
  }
})

export default Component
