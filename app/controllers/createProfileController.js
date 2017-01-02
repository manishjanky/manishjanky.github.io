var createProfileController = manish.controller("createProfileController", function ($scope, $http, $location, $rootScope, profileService) {
    $scope.tab = 'getProfile';
    $scope.user = {};
    $scope.education = [{ }];
    $scope.summary = ['', '', '', '']
    $scope.skills = [{}, {}, {}, {}];
    $scope.experience = [{}];
    $scope.certifications = [{}];
    $scope.accolades = [{}];
    $scope.instructions = ['Fill in all the details that follow.', 'Once you are done with filling the details,  got to the instructions tab.', 'Under instructions tab click on the Download Profile button.', 'After you click Download a JOSN file will be downloaded. Save this file as profile.json.', 'Visit the Github link given below. There you will see a Clone or Download button.', 'Click on the Clone or Download button then click on  Download ZIP link.'];
    $scope.addItems = function (itemType) {
        if (itemType != 'summary') {
            $scope[itemType].push({});
        } else {
            $scope[itemType].push('');
        }
        
    }
    
});
