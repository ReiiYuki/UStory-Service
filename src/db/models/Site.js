import db from '../db'

const Site = db.model('Site',{
  name : {
    type : String,
    required : true
  },
  title : {
    type : String,
    required : true,
    default : ''
  },
  description : String,
  isActive : {
    type : Boolean,
    required : true,
    default : true
  },
  isIndex : {
    type : Boolean,
    required : true,
    default : false
  },
  pages : [
    {
      type : db.Schema.Types.ObjectId,
      ref : 'Page'
    }
  ],
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

export default Site
