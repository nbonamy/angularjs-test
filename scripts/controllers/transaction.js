
app.controller('TransactionController', function($scope, $location, TransactionResource, TransactionService) {
	
	// confirm
	function set_confirm(message) {
		$.bootstrapGrowl(message, { type: 'success'});
	}

	// error
	function set_error(message) {
		$.bootstrapGrowl(message, { type: 'error'});
	}
	
	// list data
	$scope.list = function() {
		
		$scope.transactions = TransactionResource.query({}, function() {
		}, function() {
			set_error('An error occured while retrieving the transaction list');
		});
		
		/*TransactionService.list().success(function(transactions) {
			$scope.transactions = transactions;
		}).error(function(data, status, headers, config) {
			set_error('An error occured while retrieving the transaction list');
		});*/
	}
		
	// select a transaction
	$scope.select = function(index) {
		
		var id = $scope.transactions[index].id;
		var transaction = TransactionResource.get({id:id}, function() {
			$scope.selectedTransaction = transaction;
		}, function() {
			$scope.selectedTransaction = null;
			set_error('An error occured while retrieving the transaction');
		});
		
		
		/*TransactionService.get(id).success(function(response) {
			$scope.selectedTransaction = response;
		});*/
	}
	
	// save selected transaction
	$scope.save = function() {
		
		$scope.selectedTransaction.$save({id:$scope.selectedTransaction.id}, function() {
			set_confirm('Transaction successfully updated');
			$scope.selectedTransaction = null;
			$scope.list();
		}, function() {
			set_error('An error occured while updating the transaction');
		});
		
		/*TransactionService.put($scope.selectedTransaction).success(function(response) {
			set_confirm('Transaction successfully updated');
			$scope.selectedTransaction = null;
			$scope.list();
		}).error(function(data, status, headers, config) {
			set_error('An error occured while updating the transaction');
		});*/
	}
	
	// cancel edit
	$scope.cancel = function() {
		$scope.selectedTransaction = null;
	}
	
	// initialize
	$scope.list();
	$scope.selectedTransaction = null;
	
});