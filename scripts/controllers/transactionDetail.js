
app.controller('TransactionDetailController', function($scope, $routeParams, $location, TransactionResource) {

	$scope.backToList = function() {
		$location.path('transactions');
	}
	
	// save selected transaction
	$scope.save = function() {
		
		$scope.transaction.$save({id:$scope.transaction.id}, function() {
			app.setConfirm('Transaction successfully updated');
			$scope.backToList();
		}, function() {
			app.setError('An error occured while updating the transaction');
		});
		
	}
	
	// initialize
	var transaction = TransactionResource.get({id:$routeParams.transactionId}, function() {
		$scope.transaction = transaction;
	}, function() {
		app.setError('An error occured while retrieving the transaction');
		$scope.backToList();
	});
	
});