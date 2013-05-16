
// see http://blog.freeside.co/post/41774841006/getting-started-with-angular-unit-tests

describe('Banking', function() {
	
	describe('TransactionListController', function() {
		it('should list 5 transactions ', function() {
			
			// get application
			beforeEach(module('Banking'));
			
		   // testing controller
		   var $httpBackend;
		   beforeEach(inject(function($injector) {
		     $httpBackend = $injector.get('$httpBackend');
		     $httpBackend.when('GET', 'ws/transaction').respond({userId: 'userX'}, {'A-Token': 'xxx'});
		   }));

		   // now get controller
		   var scope;
		   beforeEach(inject(function($rootScope, $controller) {
	  		 scope = $rootScope.$new();
	  		 $controller('TransactionListController', {
	  			 $scope: scope
	  		 });
		   }));

		   console.debug(scope);
	  });
	});

});
