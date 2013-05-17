
describe('Banking', function() {

	// get application
	beforeEach(module('Banking'));

	describe('Amount Formatter', function() {

		// vars
		var scope;
		var amountElement;
		
		// setup
		beforeEach(inject(function($compile, $rootScope) {
			scope = $rootScope.$new();
			amountElement = $compile('<span>{{ amount|amount }}</span>')(scope);
		}));

		// helper
		function shouldValidate(value, result) {
			it('should format ' + value + ' to ' + result, function() {
				scope.$apply(function() {
					scope.amount = value;
				});
				return expect(amountElement.text()).toBe(result);
			});
		};
		
		// valid
		shouldValidate(0, '€ 0,00');
		shouldValidate(1, '€ 1,00');
		shouldValidate(-1, '€ -1,00');
		shouldValidate(12, '€ 12,00');
		shouldValidate(1.1, '€ 1,10');
		shouldValidate(1.12, '€ 1,12');
		shouldValidate(1.123, '€ 1,12');
		shouldValidate(1.129, '€ 1,13');
		
		// invalid
		shouldValidate('a', '€ 0,00');
		shouldValidate('1..', '€ 1,00');
		
	});
	
	describe('Date Formatter', function() {

		// vars
		var scope;
		var dateElement;
		
		// setup
		beforeEach(inject(function($compile, $rootScope) {
			scope = $rootScope.$new();
			dateElement = $compile('<span>{{ date|date }}</span>')(scope);
		}));

		// helper
		function shouldValidate(value, result) {
			it('should format ' + value + ' to ' + result, function() {
				scope.$apply(function() {
					scope.date = value;
				});
				return expect(dateElement.text()).toBe(result);
			});
		};
		
		// valid
		shouldValidate('2013-01-01 12:34:56', '01/01/2013');
		shouldValidate('aaaa-bb-cc dd:ee:ff', '01/01/0000');
		
	});

});
