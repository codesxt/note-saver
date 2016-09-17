angular.module('app')
.directive('navigation', function(){
  return {
    restrict: 'EA',
    templateUrl: './navigation.html',
    controller: 'NavigationCtrl as navvm'
  }
})
