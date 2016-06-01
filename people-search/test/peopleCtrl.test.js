describe('People Controller - People Search ', function () {
	var $scope, controller, $controller, gallaryService;
    beforeEach(module('peopleGallery'));
    beforeEach(inject(function(_$controller_, _gallaryService_){
        $controller = _$controller_;
		gallaryService = _gallaryService_;
    }));

    describe('People Gallery Search People Name ', function () {
        

        beforeEach(function() {
            $scope = {};
            controller = $controller('peopleCtrl', { $scope: $scope, gallaryService: gallaryService });
        });
		
		it('Should check for controller', function () {
			expect(controller).toBeDefined();
		});

        it('Should check total number of images', function () {
            console.log(gallaryService.getJson());
			/* gallaryService.getJson().then(function(result){
				console.log(result);
				$scope.peopleGalry = result.imageList;
			}); */
			expect(gallaryService.getJson()).toBeDefined();
        });
    });

});