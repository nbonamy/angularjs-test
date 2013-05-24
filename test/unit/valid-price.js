
describe('Banking', function() {

	// get application
	beforeEach(module('Banking'));

	describe('Valid-Price', function() {

		// scope
		var scope;
		
		beforeEach(inject(function($compile, $rootScope) {
			scope = $rootScope.$new();
			var priceElement = $compile('<form name="form"><input type="text" name="price" valid-price ng-model="price"></input></form>')(scope);
		}));
		
		// helper function
		function validate(price, verb, result) {
			it('should ' + verb + ' ' + price, function() {
				scope.form.price.$setViewValue(price);
				return expect(scope.price).toBe(result) && expect(scope.form.$valid).toBe(scope.price == price);
			});
		}

		// shortcut
		function shouldValidate(price) {
			validate(price, 'validate', price);
		}
		
		// shortcut
		function shouldNotValidate(price) {
			validate(price, 'not validate', undefined);
		}
		
		// valid tests
		shouldValidate('0');
		shouldValidate('1');
		shouldValidate('-1');
		shouldValidate('1.');
		shouldValidate('1.1');
		shouldValidate('1.11');
		shouldValidate('11.1');
		shouldValidate('11.11');
		shouldValidate('-11.11');
		shouldValidate('.1');
		shouldValidate('.11');
		shouldValidate('-.11');

		// invalid tests
		shouldNotValidate('a');
		shouldNotValidate('a.b');
		shouldNotValidate(' 0.1');
		shouldNotValidate('1. 0');
		shouldNotValidate('1..0');
		shouldNotValidate('1.a');
		
	});
	
});
