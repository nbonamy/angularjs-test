
describe('Banking:Transactions', function() {

	beforeEach(function() {
		browser().navigateTo('/index.html');
	});

	it('should have the right title', function() {
		expect(element('title').text()).toEqual('Angular Transactions');		
	});
	
	it('should redirect to transactions view', function() {
		expect(browser().window().hash()).toEqual("/transactions");		
	});

	it('should list 5 transactions', function() {
		expect(repeater('tr.transaction').count()).toEqual(5);
	});
	
	it('should link to transaction detail', function() {
		element('tr.transaction:nth-child(0)').click();
		expect(browser().location().hash()).toEqual('#/transaction');
	});
	
});
