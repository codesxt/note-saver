angular.module('app')
.service('AuthenticationSvc', function ($http, $window) {
  var vm = this;
	vm.saveToken = function(token){
    $window.localStorage['mean-token'] = token;
  };
  vm.getToken = function(){
    return $window.localStorage['mean-token'];
  };
  vm.logout = function() {
    $window.localStorage.removeItem('mean-token');
  };
  vm.isLoggedIn = function(){
    var token = vm.getToken();
    var payload;
    if(token){
      payload = token.split('.')[1];
      payload = $window.atob(payload);
      payload = JSON.parse(payload);
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  };
  vm.currentUser = function(){
    if(vm.isLoggedIn()){
      var token = vm.getToken();
      var payload = token.split('.')[1];
      payload = $window.atob(payload);
      payload = decodeURIComponent(escape(payload)); //Fixes UTF-8 Encoding Issues
      payload = JSON.parse(payload);
      return {
        email : payload.email,
        name : payload.name,
        payload: payload
      };
    }
  };
  vm.register = function(user) {
    return $http.post('/api/register', user).success(function(data){
      vm.saveToken(data.token);
    });
  };
  vm.login = function(user) {
    return $http.post('/api/login', user).success(function(data) {
      vm.saveToken(data.token);
    });
  };
});
