(function(){
  if(Backbone.Class) throw new Error("Something already exists at Backbone.Class!!")
  var Class = Backbone.Class = function(){ this.initialize.apply(this, arguments) };

  Class.nameProp = '__name__';
  Class.__name__ = 'Class';
  _.extend(Class.prototype, Backbone.Events);
  Class.prototype.initialize = function(){};

  Class.extend = extend;
  Class.define = function(definition){
    var klass = this.extend(definition);
    return new klass();
  }

  function extend(protoArg, classArg){
    var nameProp = ((classArg && classArg.nameProp) || this.nameProp);

    if (protoArg) {
      var name = (protoArg[nameProp] || this[nameProp]);
      var constructor = protoArg.hasOwnProperty('constructor') ? protoArg.constructor : this;

      protoArg = _.extend(protoArg, { constructor: namedConstructor(name, constructor) });
    }

    return Backbone.Model.extend.call(this, protoArg, classArg);
  }

  function namedConstructor(name, constructor) {
    var fn = new Function('constructor', 'return function ' + name + '(){ '
                                       + 'constructor.apply(this, arguments) '
                                       + '};');
    return fn(constructor);
  }
}());