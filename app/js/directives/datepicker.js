
app.directive('datepicker', function($parse) {
	return {

		restrict: 'AE',
		require: [ 'ngModel' ],
		datepicker: null,

		link: function(scope, elem, attrs) {
			
			// first create the datepicker
			if (angular.lowercase(elem.prop('tagName')) == 'input') {
				datepicker = elem;
			} else {
				datepicker = $('<input type="text" />');
				$(elem).append(datepicker);
			}

			// watch scope changes
			scope.$watch(attrs.ngModel, function(value) {
				datepicker.val(formatDate(value));
			});

			// date selection by user
			datepicker.datepicker({
				onSelect: function(value) {
					var date = unformatDate(value);
					$parse(attrs.ngModel).assign(scope, date);
				}
			});
		}

	};
})
