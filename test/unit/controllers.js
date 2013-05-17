// see http://blog.freeside.co/post/41774841006/getting-started-with-angular-unit-tests

describe('Banking:Controllers', function() {

	// get application
	beforeEach(module('Banking'));

	// the mock data
	var transactions = [{
		"id" : "1",
		"instant" : "2013-01-01 00:00:00",
		"description" : "Internet",
		"amount" : "1"
	}, {
		"id" : "2",
		"instant" : "2013-01-02 00:00:00",
		"description" : "Courses",
		"amount" : "2"
	}];
	
	// get a mock HTTP backend
	var $httpBackend;
	beforeEach(angular.mock.inject(function($injector) {
		$httpBackend = $injector.get('$httpBackend');
		$httpBackend.expectGET('ws/transaction').respond(transactions);
		$httpBackend.expectGET('ws/transaction/2').respond(transactions[1]);
	}));

	// clean-up http backend
	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	var timeout;
	var listController;
	var detailController;
	var listScope;
	var detailScope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($timeout, $controller, $rootScope, $location, TransactionResource) {
		timeout = $timeout;
		listScope = $rootScope.$new();
		detailScope = $rootScope.$new();
		listController = $controller('TransactionListController', {
			$scope : listScope,
			TransactionResource : TransactionResource
		});
		detailController = $controller('TransactionDetailController', {
			$scope: detailScope,
			$routeParams: { transactionId: 2 },
			$location: $location,
			TransactionResource : TransactionResource
		});
	}));

	describe('TransactionListController', function() {
		
		it('should attach a list of two transactions to the scope', function() {
			$httpBackend.flush();
			expect(listScope.transactions.length).toBe(2);
			// jasmine toEqual fails on this for an unknown reason...
			expect(angular.equals(listScope.transactions[0], transactions[0])).toBe(true);
			expect(angular.equals(listScope.transactions[1], transactions[1])).toBe(true);
		});
		
	});
	
	describe('TransactionDetailController', function() {

		it('should attach 2nd transaction to the scope', function() {
			$httpBackend.flush();
			expect(detailScope.transaction).not.toBe(null);
			expect(angular.equals(detailScope.transaction, transactions[1])).toBe(true);
		});
		
	});

});
