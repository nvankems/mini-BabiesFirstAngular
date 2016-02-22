angular.module('friendsList')
.controller('mainCtrl', function( $scope ) {
    $scope.name = 'Nick';
    $scope.friends = [
        {name: 'Eric'},
        {name: 'Chris'},
        {name: 'Erika'},
        {name: 'Kristi'},
        {name: 'Shelby'}
    ];



});