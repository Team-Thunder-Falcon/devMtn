angular.module("groupProject").controller("bountyCtrl",["$scope","bountyService","bounties","adminService","currentUser",function(o,n,t,u,e){o.bounties=t.data,o.admin=e.isAdmin,o.postBounty=function(n){u.postBounty(n),o.bounties.push(n)},o.modal2Shown=!1,o.toggleModal2=function(){o.modal2Shown=!o.modal2Shown}}]);