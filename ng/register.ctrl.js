angular.module('app')
.controller('RegisterCtrl', function($location, AuthenticationSvc){
  var vm = this;
  vm.credentials = {
    name : "",
    email : "",
    password : ""
  };
  vm.onSubmit = function () {
    AuthenticationSvc
      .register(vm.credentials)
      .error(function(err){
        alert(err);
      })
      .then(function(){
        $location.path('profile');
      });
  };
})
