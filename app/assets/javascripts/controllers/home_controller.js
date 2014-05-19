todoapp.controller('home_controller',['$scope', '$http','$routeParams','$cookies', function ($scope, $http,$routeParams, $cookies){
  if($cookies.user){
    $scope.text = 'Logined';
  }else{
    $scope.text = 'Chua login';
  }

}]);
