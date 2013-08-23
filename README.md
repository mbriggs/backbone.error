# Backbone.Error

Allows for easy custom error creation using Backbones object model

## Implementation

```js
var MyError = Backbone.Error.extend({
  name: 'MyError',
  initialize: function(message, data){
    this.data = data;
    this.message = message;
  }
});

throw new MyError('foo', {foo: 1});
```

## Testing

 - install karma if you dont have it `sudo npm install -g karma karma-mocha`
 - run `karma start`