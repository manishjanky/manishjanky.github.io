var manish = angular.module("manish", ['ngRoute']);

manish.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.
      when('/index.html', {
          title: 'Manish Kumar',
          templateUrl: 'app/views/home.html',
          controller: 'homeController',
      }).when('/', {
          title: 'Manish Kumar',
          templateUrl: 'app/views/home.html',
          controller: 'homeController',
      }).when('/projects', {
          title: 'Projects',
          templateUrl: 'app/views/projects.html',
          controller: 'projectsController',
      }).when('/coverLetter', {
          title: 'Cover Letter',
          templateUrl: 'app/views/coverLetter.html',
          controller: 'homeController',
      }).when('/accolades', {
          title: 'Accolades',
          templateUrl: 'app/views/accolades.html',
          controller: 'homeController',
      })       
}]);

manish.run(['$rootScope', '$route', function ($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function () {
        //update the title of the page
        document.title = $route.current.title;
        //hide the sidebar nav div as it stays even after view changes as being appended to documnet ouside the ng-view div
        $('.button-collapse').sideNav('hide');
    });
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


