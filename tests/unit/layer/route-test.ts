import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | layer', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:layer');
    assert.ok(route);
  });
});
