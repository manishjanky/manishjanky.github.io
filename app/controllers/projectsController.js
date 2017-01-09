var projectsController = manish.controller("projectsController", function ($scope, $http, $location, $rootScope, $window,profileService) {
    $scope.topLayout = profileService.layoutStyle == "top" ? true : false;
    $scope.layoutToggle = true;
    $scope.togglelayout = function () {
        $scope.topLayout = !$scope.topLayout;
        profileService.setLayoutStyle($scope.topLayout);// = $scope.topLayout ? "top" : "side";
    }
    $scope.userProfile = function () {
        if (profileService.userProfile != null) {
            $scope.user = profileService.userProfile;
        } else {
            var promise = profileService.getUserProfile();
            promise.then(function (response) {
                $scope.user = response.data;
                profileService.userProfile = response.data;
            }, function (response) {
                //error occured
            })
        }
    }
    $scope.userProfile();
});
