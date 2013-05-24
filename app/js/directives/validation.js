
// price validation
app.directive('validPrice', function() {
	return {
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl) {
			var regex=/^-?\d*\.?\d{0,2}$/;
			ctrl.$parsers.unshift(function(viewValue) {
				if (regex.test(viewValue)) {
					ctrl.$setValidity('validPrice', true);
					return viewValue;
				} else {
					ctrl.$setValidity('validPrice', false);
					return undefined;
				}
			});
		}
	};
});
