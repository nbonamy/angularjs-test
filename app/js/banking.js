
var app = angular.module('Banking', [ 'ngResource' ]);

// routing
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/transactions', {
		templateUrl: 'app/partials/transactionList.html',
		controller: 'TransactionListController'
	})
	.when('/transactions/:transactionId', {
		templateUrl: 'app/partials/transactionDetail.html',
		controller: 'TransactionDetailController'
	})
	.when('/about', {
		templateUrl: 'app/partials/about.html'
	})
	.otherwise({
		redirectTo: '/transactions'
	});
}]);

// growl
app.setConfirm = function(message) {
	$.bootstrapGrowl(message, { type: 'success'} );
};

// error
app.setError = function(message) {
	$.bootstrapGrowl(message, { type: 'error'} );
};
