# pick-weight

> Returns a single item from an array with relative weighting of odds.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/pick-weight/blob/master/LICENSE)
  
[![build:?](https://img.shields.io/travis/mock-end/pick-weight/master.svg?style=flat-square)](https://travis-ci.org/mock-end/pick-weight)
[![coverage:?](https://img.shields.io/coveralls/mock-end/pick-weight/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/pick-weight)
  
  
## Install
  
```
$ npm install --save pick-weight 
```
  
## Usage
  
```js
var weighted = require('pick-weight');
  
// API
// - weighted(arr, weights);
```

The following code will generate `'a'` 100 times more often than `'b'` but still choose one or the other randomly.
  
```js
weighted(['a', 'b'], [100, 1]);
// => 'a'
```

The weights are all relative, so if you have more than just two it will ensure that all items are generated relative to all of the weights.

```js
weighted(['a', 'b', 'c', 'd'], [1, 2, 3, 4]);
// => 'c'
```
  
Will generate a letter from the array but will pick `'b'` twice as often as it picks `'a'` and will pick `'c'` three times as often as it picks `'a'` and will pick `'d'` four times as often as it will pick `'a'` and will pick `'d'` two times as often as it will pick `'b'`.  

The weights can be whole numbers as shown above or fractions.

```js
weighted(['a', 'b', 'c', 'd'], [0.1, 0.2, 0.3, 0.4]);
// => 'd'
```

There is no requirement that the weights sum to anything in particular, they are all compared relative to each other so all of the following are equivalent:

```js
weighted(['a', 'b', 'c', 'd'], [1, 2, 3, 4]);
weighted(['a', 'b', 'c', 'd'], [0.1, 0.2, 0.3, 0.4]);
weighted(['a', 'b', 'c', 'd'], [100, 200, 300, 400]);
weighted(['a', 'b', 'c', 'd'], [17, 34, 51, 68]);
weighted(['a', 'b', 'c', 'd'], [0.17, 0.34, 0.51, 0.68]);
```

## Related

- [pick-item](https://github.com/mock-end/pick-item) - Given an array, pick a random element and return it.
- [pick-items](https://github.com/mock-end/pick-items) - Given an array, pick some random elements and return them in a new array. 
- [pick-prop](https://github.com/mock-end/pick-prop) - Given an object, pick a random property and return it.
- [pick-props](https://github.com/mock-end/pick-props) - Given an object, pick some random properties and return them in an array.
- [pick-key](https://github.com/mock-end/pick-key) - Given an object, pick a random key and return it.
- [pick-keys](https://github.com/mock-end/pick-keys) - Given an object, pick some random keys and return them in an array.
- [pick-pair](https://github.com/mock-end/pick-pair) - Given an object, pick a random key-value and return it in a new object.
- [pick-pairs](https://github.com/mock-end/pick-pairs) - Given an object, pick some random key-values and return it in a new object.

## Contributing
  
Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/pick-weight/issues/new).
