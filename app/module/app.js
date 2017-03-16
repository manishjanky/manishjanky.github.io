var manish = angular.module("manish", ['ngRoute']);

manish.config(['$routeProvider', '$locationProvider', '$compileProvider', function ($routeProvider, $locationProvider,$compileProvider, $httpProvider) {

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
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
          title: 'Manish - Projects',
          templateUrl: 'app/views/projects.html',
          controller: 'projectsController',
      }).when('/coverLetter', {
          title: 'Manish - Cover Letter',
          templateUrl: 'app/views/coverLetter.html',
          controller: 'homeController',
      }).when('/accolades', {
          title: 'Manish - Accolades',
          templateUrl: 'app/views/accolades.html',
          controller: 'homeController',
      }).when('/createProfile', {
          title: 'Create Your Profile',
          templateUrl: 'app/views/createProfile.html',
          controller: 'createProfileController',
      }).when('/credits', {
          title: 'Credits',
          templateUrl: 'app/views/credits.html',
          controller: '',
      }).when('/mtip', {
          title: 'mTip',
          templateUrl: 'app/views/mTipDemos.html',
          controller: 'mTipController',
      })
}]);

manish.run(['$rootScope', '$route', '$window', 'profileService', function ($rootScope, $route, $window, profileService) {
    $rootScope.$on('$routeChangeSuccess', function () {
        //update the title of the page
        document.title = $route.current.title;
    });
    if ($window.localStorage) {
        var layout = $window.localStorage.getItem("manish_Layout");
        if (layout == null) {
            $window.localStorage.setItem("manish_Layout","top");
            profileService.layoutStyle = "top";
        } else {
            profileService.layoutStyle = layout;
            //$window.localStorage.setItem("manish_Layout", "side");
        }
    }
}]);
manish.service('profileService', function ($http,$window) {
    var self = this;
    this.userProfile = null;
    this.getUserProfile = function () {
        //get the profile.json file
            return $http.get("/profile.json");
    },
    this.setLayoutStyle = function (toplayout) {
        if (toplayout) {
            $window.localStorage.setItem("manish_Layout", "top");
            self.layoutStyle = "top";
        } else {
            $window.localStorage.setItem("manish_Layout", "side");
            self.layoutStyle = "side";
        }
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


