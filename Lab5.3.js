

// app.service("personList", function($http, $q)
// {
//     // var deferred = $q.defer();
//     // $http.get('https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp').then (function (data){
//     //     deferred.resolve(data);
//     // });

//     // this.getPersonList = function ()
//     // {
//     //     return deferred.promise;
//     // }
//     $http.jsonp('https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp', {jsonpCallbackParam: 'callback'})
// })

// .controller("personCtrl", function ($scope, personList){
//     var promise = personList.getPersonList();
//     promise.then(function (data){
//         $scope.person = data;
//         console.log($scope.person);
//     })
// })

// var app = angular.module('httpExample', []);
// app.config(['$sceDelegateProvider', function($sceDelegateProvider) {
//   // We must whitelist the JSONP endpoint that we are using to show that we trust it
//   $sceDelegateProvider.resourceUrlWhitelist([
//     'self',
//     'https://angularjs.org/**'
//   ]);
// }])
// app.controller('FetchController', ['$scope', '$http', '$templateCache',
//   function($scope, $http, $templateCache) {
//     $scope.method = 'GET';
//     $scope.url = 'https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp';
    

//     $scope.fetch = function() {
//       $scope.code = null;
//       $scope.response = null;

//       $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
//         then(function(response) {
//           $scope.status = response.status;
//           $scope.data = response.data;
//           console.log($scope.data);
//         }, function(response) {
//           $scope.data = response.data || 'Request failed';
//           $scope.status = response.status;
//       });
//     };

   
//   }]);