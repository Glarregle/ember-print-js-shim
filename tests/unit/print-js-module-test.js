import { module, test } from 'qunit';
import printJs from 'print-js';

module('print-js as an ES6 module');

test('it works', function(assert) {
  assert.ok(printJs);
});
