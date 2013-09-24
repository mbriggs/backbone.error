describe("Backbone.Error", function() {

  it("is an error", function() {
    expect(new Backbone.Error()).to.be.an.instanceOf(Error);
  });

  it("sets message", function() {
    var error = new Backbone.Error('foo');
    expect(error.message).to.eq('foo');
  });

  it("sets constructor name to error", function(){
    var error = new Backbone.Error('foo');
    expect(error.constructor.name).to.eq('Error');
  })

  describe("extended", function() {
    var TestError = Backbone.Error.extend({
      name: 'TestError',
      initialize: function(message) {
        this.message = message + '!!!';
      }
    });

    var error;

    beforeEach(function() {
      error = new TestError('FOO');
    });


    it("allows error assignment to be overridden", function() {
      expect(function() { throw error }).to.throw(/FOO!!!/);
    });

    it("allows error name to be overridden", function() {
      expect(error.toString()).to.eq('TestError: FOO!!!');
    });
  });
});