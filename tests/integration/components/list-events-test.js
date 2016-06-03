import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('list-events', 'Integration | Component | list events', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  let model = {id: 3, title: 'Test title', short_description: 'some text'};
  this.set('model', model);
  this.render(hbs`{{list-events event=model}}`);

  assert.equal(this.$('.event-title').text(), 'Test title');
  assert.equal(this.$('.short-description').text(), 'some text more...');
});
