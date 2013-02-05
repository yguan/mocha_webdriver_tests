define(function () {
    describe('DOM', function() {

        it('should contain a div with id "mocha"', function() {
			$('#mocha').length.should.equal(1);
        });
    });
});
