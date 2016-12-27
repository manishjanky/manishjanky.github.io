var styleController = manish.controller("styleController", function ($scope, $http, $location, $rootScope, $window) {
    $scope.styleSheet = "blue";
    $scope.updateStyle = function (style) {
        if (angular.isUndefined(style) || style==null) {
            //set and load the theme chosen by user using localstorage
            var sty = $window.localStorage.getItem('manish_styleSheet');
            if (angular.isUndefined(sty) || sty==null) {
                $scope.styleSheet = 'blue';
            } else {
                $scope.styleSheet = sty;
            }

        } else {
            $scope.styleSheet = style;
            $window.localStorage.setItem('manish_styleSheet', style);
        }
        //update the style selected by the user

    }
    $scope.updateStyle();
});
