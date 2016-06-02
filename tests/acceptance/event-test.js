import { test } from 'qunit';
import moduleForAcceptance from 'travel-eve/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | events');

test('Events are loaded into the page', function(assert) {
  let events = server.createList('event', 20);
  visit('/event');

  andThen(function() {
    assert.equal(find('li').length, 20);
    assert.equal(find('li:first').text(), events[0].name);
  });
});
