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
      }).when('/projects', {
          title: 'Welcome',
          templateUrl: 'app/views/projects.html',
          controller: 'projectsController',
      }).when('/coverLetter', {
          title: 'Welcome',
          templateUrl: 'app/views/coverLetter.html',
          controller: 'coverLetterController',
      })      
}]);

manish.service('profileService', function ($http) {
   this.userProfile = null;
    this.getUserProfile = function () {
        //get the profile.json file
            return $http.get("/profile.json");
    }
})
manish.directive('errSrc', function () {
    //directive to handle the Image loading error
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


