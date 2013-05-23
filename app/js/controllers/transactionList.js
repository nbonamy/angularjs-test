
app.controller('TransactionListController', function($scope, TransactionResource) {
	
	$scope.sortOrder = 'instant';
	
	$scope.transactions = TransactionResource.query({}, function() {
	}, function() {
		app.setError('An error occured while retrieving the transaction list');
	});
	
});
