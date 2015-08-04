angular.module('groupProject')
.controller('adminCtrl', ['$scope', 'adminService', 'getPosts', function($scope, adminService, getPosts) {

	$scope.modalShown = false;
  // $scope.toggleModal = function() {
  // 	console.log($scope.modalShown);
  //   $scope.modalShown = !$scope.modalShown;
  // };

  $scope.modal2Shown = false;
  $scope.toggleModal2 = function() {
    $scope.modal2Shown = !$scope.modal2Shown;
  };

  $scope.posts = getPosts.data;

  $scope.approvePost = function(id) {
 		adminService.approvePost(id);
	};

	$scope.discardPost = function(id){
		adminService.discardPost(id);
	};

	$scope.editPost = function(id){
		adminService.editPost(id);
	};

	$scope.clearIt = function(){
		console.log($scope.show);
	};

	$scope.postBounty = function(bounty){
		adminService.postBounty(bounty);
	};

}]);
