angular.module("groupProject").controller("homeCtrl",["$scope","homeService","getPosts","currentUser",function(o,t,e,n){o.modalShown=!1,o.admin=n.isAdmin,o.posts=e.data,o.upVoteDownVote=function(e,n){t.upVoteDownVote(e,n).success(function(t){var e;o.posts.map(function(o,n){o._id===t._id&&(e=n)}),o.posts[e]=t})},o.addToFavorites=function(o){t.addToFavorites(o)},o.addToviewLater=function(o){t.addToviewLater(o)},o.modalShown=!1,o.toggleModal=function(){o.modalShown=!o.modalShown,o.newPost=""},o.deletePost=function(o){t.deletePost(o)}}]);