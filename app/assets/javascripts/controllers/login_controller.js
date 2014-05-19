todoapp.controller('login_controller',['$scope', '$http','$routeParams','$cookies', function ($scope, $http, $routeParams, $cookies){

  $scope.login = function(){
    data = {'email': $scope.email, 'password': $scope.password}

    $http.post("/api/v1/users/login",data)
         .success(function(user){
            delete $cookies["user"];
            $cookies["user_id"] = user.id;
            window.location.href= "/"
         })
         .error(function(error){
            $scope.error_msg = error;
         });
  }
}]);
