var homeController = manish.controller("homeController", function ($scope, $http, $location, $rootScope, profileService) {
    $scope.date = new Date();
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
