angular.module('blogSystemApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {
  $scope.items = ['item1', 'item2', 'item3'];
  $scope.selected = {
    item: $scope.items[0]
  };
  $scope.ok = function () {
    $modalInstance.close();
  };
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
