angular.module('app')
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    controller: 'HomeCtrl',
    templateUrl: 'home.html',
    controllerAs: 'vm'
  })
  .when('/register', {
    controller: 'RegisterCtrl',
    templateUrl: 'register.html',
    controllerAs: 'vm'
  })
  .when('/login', {
    controller: 'LoginCtrl',
    templateUrl: 'login.html',
    controllerAs: 'vm'
  })
  .when('/profile', {
    controller: 'ProfileCtrl',
    templateUrl: 'profile.html',
    controllerAs: 'vm'
  })
  .otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true)
})

function run($rootScope, $location, AuthenticationSvc) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if ($location.path() === '/profile' && !AuthenticationSvc.isLoggedIn()) {
      $location.path('/');
    }
  });
}

angular.module('app')
.run(['$rootScope', '$location', 'AuthenticationSvc', run]);
