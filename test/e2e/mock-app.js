
app = angular.module('BankingTest', ['Banking', 'ngMockE2E']).run(function($httpBackend) {

	$httpBackend.whenGET('ws/transaction/').respond(transactions);
	$httpBackend.whenGET().passThrough();
	
});
