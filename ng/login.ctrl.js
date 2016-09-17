angular.module('app')
.controller('LoginCtrl', function($location, AuthenticationSvc){
  var vm = this;
  vm.credentials = {
    email : "",
    password : ""
  };

  vm.onSubmit = function () {
    AuthenticationSvc
    .login(vm.credentials)
    .error(function(err){
      alert(err);
    })
    .then(function(){
      $location.path('profile');
    });
  };
})
