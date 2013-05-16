
var app = angular.module('Banking', [ 'ngResource' ]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/transactions', {
		templateUrl: 'partials/transactionList.html',
		controller: 'TransactionListController'
	})
	.when('/transactions/:transactionId', {
		templateUrl: 'partials/transactionDetail.html',
		controller: 'TransactionDetailController'
	})
	.when('/about', {
		templateUrl: 'partials/about.html'
	})
	.otherwise({
		redirectTo: '/transactions'
	});
}]);

// configure accounting
accounting.settings = {
	currency: {
		symbol : "€",   // default currency symbol is '$'
		format: "%s %v", // controls output: %s = symbol, %v = value/number (can be object: see below)
		decimal : ",",  // decimal point separator
		thousand: ".",  // thousands separator
		precision : 2   // decimal places
	},
	number: {
		precision : 0,  // default precision on numbers is 0
		thousand: " ",
		decimal : ","
	}
}

// money format with accounting.js
app.filter('amount', function() {
	return function(amount) {
		return accounting.formatMoney(amount);
	}
});

// date formatting
app.filter('date', function() {
	return function(date) {
		return moment(date, "YYYY-MM-DD HH:mm:ss").format("L");
	}
});

// growl
app.setConfirm = function(message) {
	$.bootstrapGrowl(message, { type: 'success'});
}

// error
app.setError = function(message) {
	$.bootstrapGrowl(message, { type: 'error'});
}
