
define(['angular', 'mocks'], function () {
	"use strict";

	describe('TransactionListController', function() {
		it('should list 5 transactions ', function() {
			
			var scope = {};
			var app = angular.module('Banking');
			expect(app).not.toBe(null);
			var ctl = app.controller('TransactionListController', { $scope: scope });
			console.debug(scope);
	
	  });
	});
	
});
