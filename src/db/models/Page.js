import db from '../db'

const Page = db.model('Page',{
  name : {
    type : String,
    required : true
  },
  title : String,
  description : String,
  layout : {
    type : String,
    required : true
  },
  components : [
    {
      type : db.Schema.Types.ObjectId,
      ref : 'Component'
    }
  ],
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

export default Page
