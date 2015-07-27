var mongoose    = require( 'mongoose' ) ,
    postSchema  = require( './subSchema.js' ) ;

var userSchema = {
  firstName:  { type: String, required: true } ,
  lastName:   { type: String, required: true } ,
  email:      { type: String, required: true, unique: true } ,
  password:   { type: String, required: true } ,
  isAdmin:    { type: Boolean, required: true } ,
  posts:      [ { type: mongoose.Schema.Types.ObjectId, ref: 'Post' } ]
};

module.exports = new mongoose.Schema( userSchema );
