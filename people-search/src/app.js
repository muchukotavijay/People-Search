angular.module('peopleGallery', [])
.controller('peopleCtrl', ['$scope', 'gallaryService', function($scope, gallaryService) {
	gallaryService.getJson().then(function(result){
		$scope.peopleGalry = result.imageList;
	});
	 
}]);

