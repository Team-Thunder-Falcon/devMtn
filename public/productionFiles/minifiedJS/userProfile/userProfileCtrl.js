angular.module("groupProject").controller("userProfileCtrl",["$scope","userProfileService","getUser","LoginService","homeService",function(e,t,o,r,n){e.user=o,e.updateUserInfo=function(e,o){t.updateUserInfo(e,o)},e.deleteAccount=function(e){t.deleteAccount(e)},e.removeFavorite=function(o,r){t.removeFavorite(o,r).then(function(t){e.user.favorites.splice(t.data._id,1)})},e.removeviewLater=function(o,r){t.removeviewLater(o,r).then(function(t){e.user.viewLater.splice(t.data._id,1)})},e.deletePost=function(e){n.deletePost(e)}}]);