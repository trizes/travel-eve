import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:event', 'Unit | Adapter | event', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it creates the namespace', function(assert) {
  let adapter = this.subject();
  assert.equal(adapter.namespace, 'api');
});
