angular.module("groupProject").controller("bountyCtrl",["$scope","bountyService","bounties","LoginService",function(o,t,n,e){o.bounties=n.data,o.discardPost=function(o){t.discardPost(o)}}]);