angular.module('app')
.service('ProfileDataSvc', function($http, AuthenticationSvc){
  var vm = this;
  vm.getProfile = function(){
    return $http.get('/api/profile', {
      headers: {
        Authorization: 'Bearer ' + AuthenticationSvc.getToken()
      }
    })
  }
})
