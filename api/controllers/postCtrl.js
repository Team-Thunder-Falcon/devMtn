var mongoose    = require( 'mongoose' ) ,
    $q          = require( 'q' ) ,
    User        = mongoose.model('User', require('../models/userSchema.js')),
    Post        = mongoose.model('Post', require('../models/postSchema.js')) ;

module.exports = {

  create: function(req, res){
    var newPost   = new Post();
    newPost.type  = req.body.type;
    newPost.url   = req.body.url;
    newPost.title = req.body.title;
    newPost.desc  = req.body.desc;
    newPost.cat   = req.body.cat;
    newPost.tags  = req.body.tags;
    newPost.thumbnail = req.body.thumbnail;
    newPost.user  = req.body.user;
    newPost.bounty = req.body.bounty;
    newPost.save(function(err, createdPost) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(createdPost);
    });
  } ,

  retrievePending: function(req, res){
    Post.find({})
    .where('isApproved').equals(false)
    .populate('user')
    .exec().then(function(posts, err){
      if (err) return res.status(500).json(err);
      return res.status(200).json(posts);
    });
  } ,

  retrieveApproved: function(req, res){
    Post.find({})
    .where('isApproved').equals(true)
    .exec().then(function(posts, err){
      if (err) return res.status(500).json(err);
      return res.status(200).json(posts);
    });
  } ,

  retrieveOne: function(req, res){
    Post.find( { "_id": req.params.post_id } )
    .exec().then(function(post, err){
      if (err) return res.status(500).json(err);
      else return res.status(200).json(post);
    });
  } ,

  retrieveCatPending: function(req, res){
    Post.find( {"cat": req.params.cat} )
    .where('isApproved').equals(false)
    .exec().then(function(posts, err){
      if (err) return res.status(500).json(err);
      else return res.status(200).json(posts);
    });
  } ,

  retrieveCatApproved: function(req, res){
    Post.find( {"cat": req.params.cat} )
    .where('isApproved').equals(true)
    .exec().then(function(posts, err){
      if (err) return res.status(500).json(err);
      else return res.status(200).json(posts);
    });
  } ,

  retrieveCatByTag: function(req, res){
    Post.find( {"cat": req.params.cat, "tags": req.params.tag} )
    .exec().then(function(posts, err){
      if (err) return res.status(500).json(err);
      else return res.status(200).json(posts);
    });
  } ,

  update: function(req, res){
    Post.findByIdAndUpdate(req.params.post_id, req.body, {new: true}, function(err, updatedUser){
      if (err) return res.status(500).json(err);
      return res.status(200).json(updatedUser);
    });
  } ,

  remove: function(req, res){
    Post.findOne({'_id': req.params.post_id}, function(err, post) {
        if(err) return res.status(500).json(err);
        User.findByIdAndUpdate(post.user, {$pull:{posts: post._id}}, function(err, user) {
            if(err) return res.status(500).json(err);
        });
    });
    Post.findByIdAndRemove(req.params.post_id, function(err) {
        if(err) return res.status(500);
        return res.status(200).send('Post ' + req.params.post_id + ' has been deleted');
    });
  }
  
};
