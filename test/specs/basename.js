describe('basename', function () {

	var chai = require('chai');
	var expect = chai.expect;
	var assert = chai.assert;

	var actual = '/dir/sub/file.ext';
	var expectMsg = 'My Message';

	describe('valid expectation', function () {
		var expected = 'file.ext';

		describe('pass', function () {
			it('expect / should', function () {
				expect(actual).to.have.basename(expected, expectMsg);
				actual.should.have.basename(expected, expectMsg);
			});
			it('assert', function () {
				assert.basename(actual, expected, expectMsg);
			});
		});
		describe('fail negation', function () {
			var report = "My Message: expected '" + actual + "' not to have basename '" + expected + "' but got 'file.ext'";

			it('expect.not / should.not', function () {
				expect(function () {
					expect(actual).to.not.have.basename(expected, expectMsg);

				}).to.fail(report);
				expect(function () {
					actual.should.not.have.basename(expected, expectMsg);

				}).to.fail(report);
			});
			it('assert.not', function () {
				expect(function () {
					assert.notBasename(actual, expected, expectMsg);

				}).to.fail(report);
			});
		});
	});
	describe('invalid expectation', function () {
		var expected = 'foobar.ext';

		describe('fail', function () {
			var report = "My Message: expected '" + actual + "' to have basename '" + expected + "' but got 'file.ext'";

			it('expect / should', function () {
				expect(function () {
					expect(actual).to.have.basename(expected, expectMsg);

				}).to.fail(report);
				expect(function () {
					actual.should.have.basename(expected, expectMsg);

				}).to.fail(report);
			});
			it('assert', function () {
				expect(function () {
					assert.basename(actual, expected, expectMsg);

				}).to.fail(report);
			});
		});
		describe('pass negation', function () {
			it('expect.not / should.not', function () {
				expect(actual).to.not.have.basename(expected, expectMsg);
				actual.should.not.have.basename(expected, expectMsg);
			});
			it('assert.not', function () {
				assert.notBasename(actual, expected, expectMsg);
			});
		});
	});
});