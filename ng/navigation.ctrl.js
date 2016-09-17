angular.module('app')
.controller('NavigationCtrl', function($location, AuthenticationSvc){
  var vm = this;
  vm.isLoggedIn = AuthenticationSvc.isLoggedIn();
  vm.currentUser =  AuthenticationSvc.currentUser();
  vm.logout = function(){
    AuthenticationSvc.logout();
    $location.path('/');
  }
})
