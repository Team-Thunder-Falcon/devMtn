angular.module("groupProject").controller("userProfileCtrl",["$scope","userProfileService","getPosts","getUser",function(e,t,o,n){e.user=n.data,e.updateUserInfo=function(e,o){t.updateUserInfo(e,o)},e.deleteAccount=function(e){t.deleteAccount(e)},e.getFavorites=function(){t.getFavorites().then(function(t){e.favorites=t.data})},e.posts=o.data,e.getBounties=function(o){t.getBounties(o).then(function(t){e.bounties=t.data})},e.removeFavorite=function(e,o){t.removeFavorite(e,o)},e.removeWatchLater=function(e,o){t.removeWatchLater(e,o)}}]);