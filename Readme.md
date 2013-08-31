
# bind-plugin

  Allows to [bind](https://github.com/bredele/data-binding) node attributes to a [store](https://github.com/bredele/store)

## Installation

    $ component install bredele/bind-plugin

## Usage


```js
var plugin = require('bind-plugin');
...
binding.add('bind', plugin);
...
```

First parameter is the attribute's name and second if the model attribute.

```html
<p data-bind="innerHTML,description"></p>
```

   

## License

  MIT