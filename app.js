(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.items = "";
    $scope.message = " ";
    $scope.style = {color: 'black'};


    $scope.numOfItems = function () {
      var totalItems = calculateNumberOfItems($scope.items);
      if(totalItems > 3){
        $scope.message = "Too much!";
        $scope.style = {color: 'red'};
      

      }
      else if(totalItems>0){
        $scope.message = "Enjoy!";
        $scope.style = {color: "green"};


      }
      else {
        $scope.message = " ";
      }

    };

    function calculateNumberOfItems(string) {
      var totalItemsInStr = string.split(' ').length;

      return totalItemsInStr;
    }

  };

})();
