Backbone.Error = function(){
  this.initialize.apply(this, arguments)
};

Backbone.Error.prototype = new Error();

Backbone.Error.prototype.initialize = function(message){
  if(message) this.message = message;
};

Backbone.Error.extend = Backbone.Model.extend;