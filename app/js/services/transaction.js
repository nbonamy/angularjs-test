
var rootUrl = 'ws/transaction/';
	
app.factory('TransactionResource', function($resource) {
	return $resource(rootUrl + ':id');
});

app.factory('TransactionService', function($http, $resource) {

	return {
		
		list: function() {
			return $http.get(rootUrl + 'list.php').error(function(data, status) {
				console.debug('Error while getting transactions. Response='+status+', '+data);
			});
		},
		
		get: function(id) {
			return $http.get(rootUrl + 'get.php?id='+id);
		},
		
		put: function(trans) {
			return $http.put(rootUrl + 'put.php', trans);
		}
		
	};
  
});
