'use strict';

angular.module('myApp', []);

angular.module('myApp')
    .controller('MainCtrl', ['$scope', function($scope) {

        $scope.contact = {
            subject: 'This is subject',
            body: 'This is body'
        };

        $scope.encodeString = function(str) {
            window.encodeURIComponent(str);
        };
    }])
    .controller('PortCtrl', ['$scope', function($scope) {
        console.log('PortCtrl');

        $scope.items = [{
            title: 'Trees',
            src: 'images/tumblr_npaisxZZFa1ted1sho1_1280.jpg'
        }, {
            title: 'Bees',
            src: 'images/tumblr_nxlxllX6y51ted1sho1_1280.jpg'
        }, {
            title: 'Automobiles',
            src: 'images/tumblr_nxlyirxQY91ted1sho1_1280.jpg'
        }, {
            title: 'Panthers',
            src: 'images/tumblr_nxoacblPus1ted1sho1_1280.jpg'
        }, ];
    }])
    .controller('FooterCtrl', ['$scope', function($scope){
          console.log('Footer');
          $scope.tabName = null;
    }]);
