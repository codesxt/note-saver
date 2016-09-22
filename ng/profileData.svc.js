angular.module('app')
.service('ProfileDataSvc', function($http, AuthenticationSvc){
  var vm = this;
  vm.getProfile = function(){
    console.log("Authorization: Bearer " + AuthenticationSvc.getToken());
    return $http.get('/api/profile', {
      headers: {
        Authorization: 'Bearer ' + AuthenticationSvc.getToken()
      }
    });
  };
});
