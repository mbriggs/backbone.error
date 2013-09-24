(function(){
  function ErrorBase(){ this.initialize.apply(this, arguments)}
  ErrorBase.prototype = new Error;
  ErrorBase.extend = Backbone.Class.extend;

  Backbone.Error = ErrorBase.extend({
    name: 'Error',
    initialize: function(message){
      if(message) this.message = message;
    }
  }, { nameProp: 'name' });
}());
