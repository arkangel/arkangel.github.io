(function() {
'use strict';

angular.module("LunchCheck", []).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchCheckMessage = "";

  $scope.lunchList = "";

  $scope.checkLunch = function() {
    var lunchListArray = $scope.lunchList.split(",").map(function(s) { return s.trim(); }).filter(String);

    if(($scope.lunchList.length === 0) || (lunchListArray.length === 0)){
      $scope.lunchCheckMessage = "Please enter data first";
    } else {

      if(lunchListArray.length > 3) {
        $scope.lunchCheckMessage = "Too much!";
      } else {
        $scope.lunchCheckMessage = "Enjoy!";
      }
    }
  }


}

})();
