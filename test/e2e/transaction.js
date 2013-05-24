
describe('Banking:Transactions', function() {

	beforeEach(function() {
		browser().navigateTo('/index.html');
	});

	describe('Home', function() {

		it('should have the right title', function() {
			expect(element('title').text()).toEqual('Angular Transactions');
		});
		
		it('should redirect to transactions view', function() {
			expect(browser().window().hash()).toEqual("/transactions");
		});

	});

	describe('List', function() {

		it('should list 5 transactions', function() {
			expect(repeater('tr.transaction').count()).toEqual(5);
		});

		it('should format dates properly', function() {
			expect(element('tr.transaction:nth-child(1) th:nth-child(1)').text()).toMatch(/\d{2}\/\d{2}\/\d{4}/);
		})

		it('should format prices properly', function() {
			expect(element('tr.transaction:nth-child(1) td:nth-child(3)').text()).toMatch(/€ \d{2},\d{2}/);
		})

		it('should filter accordingly', function() {
			input('filterText.description').enter('Int');
			expect(repeater('tr.transaction').count()).toEqual(2);
		});

	})

	describe('Detail', function() {

		beforeEach(function() {
			element('tr.transaction:nth-child(1) a').click();
		});

		it('should link to transaction detail', function() {
			expect(browser().window().hash()).toEqual('/transactions/6');
		});
		
		it('should go back to list when edit is canceled', function() {
			element('#cancel').click();
			expect(browser().window().hash()).toEqual("/transactions");
		});
		
		it('should save updated transaction', function() {
			input('transaction.amount').enter('12.95');
			element('#save').click();
			expect(element('tr.transaction:nth-child(1) td:nth-child(3)').text()).toEqual('€ 12,95');
		});

		it('should surley save updated transaction', function() {
			input('transaction.amount').enter('29.90');
			element('#save').click();
			expect(element('tr.transaction:nth-child(1) td:nth-child(3)').text()).toEqual('€ 29,90');
		});

	})

});
