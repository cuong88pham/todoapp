todoapp.controller('login_controller',['$scope', '$http','$routeParams','$cookies', function ($scope, $http, $routeParams, $cookies){

  $scope.login = function(){
    $http.post("/api/v1/users/login?email="+$scope.email+"&password="+$scope.password)
         .success(function(data){
            $cookies.user = data;
         })
         .error(function(data){
            console.log(data);
         });
  }
}]);
