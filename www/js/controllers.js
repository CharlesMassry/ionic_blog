angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('PostsCtrl', function($scope, $http) {
  $http.get("http://charliemassry.com/posts.json").success(function(data) {
    $scope.posts = data;
  });
})

.controller('PostDetailCtrl', function($scope, $stateParams, $http) {
  $http.get("http://charliemassry.com/posts/" + $stateParams.postId + ".json").success(function(data) {
    $scope.post = data;
  });
});
