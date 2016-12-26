var manish = angular.module("manish", ['ngRoute']);

manish.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.
      when('/index.html', {
          title: 'Welcome',
          templateUrl: 'app/views/home.html',
          controller: 'homeController',
      }).when('/', {
          title: 'Welcome',
          templateUrl: 'app/views/home.html',
          controller: 'homeController',
      })    
}]);

manish.service('profileService', function ($http) {
   this.userProfile = null;
    this.getUserProfile = function () {
            return $http.get("/profile.json");
    }
})
manish.directive('errSrc', function () {
    return {
        link: function (scope, element, attrs) {
            element.bind('error', function () {
                if (attrs.src != attrs.errSrc) {
                    attrs.$set('src', attrs.errSrc);
                }
            })
        }
    }
});


