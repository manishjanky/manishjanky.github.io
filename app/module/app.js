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

manish.directive('tooltipped', function ($compile, $timeout) {
    return {
        restrict:'A',
        link: function (scope, element, attrs) {
            var rmDestroyListener = Function.prototype;
            attrs.$observe('tooltipped', function (value) {
                if (value === 'false') {
                    element.tooltip("remove");
                   
                } else if (value !== 'false') {
                    init();
                }
            });
             function init() {
                debugger
                element.addClass("tooltipped");
                $compile(element.contents())(scope);
                $timeout(function () {
                    if (element.attr('data-tooltip-id')) {
                        element.tooltip('remove');
                    }
                    element.tooltip();
                });
               
                element.on('$destroy', function () {
                    element.tooltip("remove");
                });

                //alert("sdfsef")
            }

        }
    }
})


