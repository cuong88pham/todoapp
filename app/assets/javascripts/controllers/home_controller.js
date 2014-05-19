todoapp.controller('home_controller',['$scope', '$http','$routeParams','$cookies', function ($scope, $http,$routeParams, $cookies){
  if($cookies["user_id"]){
    console.log($cookies["user_id"]);
    $scope.user_id = $cookies["user_id"];
    getDataList();
    // console.log($scope.user);
  }else{
    $scope.user = false;
  }

  $scope.addTodoList = function(title){
    data = {'title': title, 'user_id':$cookies["user_id"]};

    $http.post("/api/v1/todo_lists",data)
      .success(function(todo){
        getDataList();
      })
      .error(function(error){
        $scope.error_msg = error;
      });
  }

  $scope.updateTodoList = function(id, status){
    if(status)
      var uStatus = false;
    else
      var uStatus = true;
    data = {'id': id, 'status':uStatus};
    $http.put("/api/v1/todo_lists",data)
      .success(function(todo){
        getDataList();
      })
      .error(function(error){
        $scope.error_msg = error;
      });
  }

  $scope.deleteTodoList = function(id){
    $http.get("/api/v1/todo_lists/delete?id="+id)
      .success(function(todo){
        getDataList();
      })
      .error(function(error){
        $scope.error_msg = error;
      });
  }

  function getDataList(){
    $http.get("/api/v1/todo_lists?user_id="+$cookies["user_id"])
          .success(function(data){
            $scope.lists = data;
          })
          .error(function(error){
            $scope.error_msg = error;
          })
  }
}]);
