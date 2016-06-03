import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('single-event', 'Integration | Component | single event', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  let model = {id: 3, title: 'Test title', description: 'some text'};
  this.set('model', model);
  this.render(hbs`{{single-event event=model}}`);

  assert.equal(this.$('.event-title').text(), 'Test title');
  assert.equal(this.$('.long-description').text(), 'some text');
  assert.equal(this.$('.linkback').text(), 'Back to event list');
});
