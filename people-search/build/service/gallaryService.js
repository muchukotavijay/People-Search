angular.module('peopleGallery').factory('gallaryService', function($http, $q) {
   return {
     getJson: function() {
       var deferred = $q.defer();
       $http.get('../imageData.json').success(function(data) {
          deferred.resolve(data);
       }).error(function(){
          deferred.reject();
       });
       return deferred.promise;
     }
   }
});