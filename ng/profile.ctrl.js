angular.module('app')
.controller('ProfileCtrl', function($location, ProfileDataSvc){
  var vm = this;
  vm.user = {};
  ProfileDataSvc.getProfile()
  .success(function(data){
    vm.user = data;
    console.log("Getting user data.");
    console.log(vm.user);
  })
  .error(function(e){
    console.log(e);
  });
});
