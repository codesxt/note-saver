angular.module('app')
.controller('NavigationCtrl', function($location, AuthenticationSvc){
  var vm = this;
  vm.isLoggedIn = AuthenticationSvc.isLoggedIn();
  vm.currentUser =  AuthenticationSvc.currentUser();
  console.log("Datos de usuario: ");
  console.log(vm.currentUser);
  vm.logout = function(){
    console.log('Logging out...');
    AuthenticationSvc.logout();
    $location.path('/');
  }
})
