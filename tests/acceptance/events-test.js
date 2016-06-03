import { test } from 'qunit';
import moduleForAcceptance from 'travel-eve/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | events');

test('Events are loaded into the main page', function(assert) {
  let events = server.createList('event', 20);
  visit('/events');

  andThen(function() {
    assert.equal(find('.list-event').length, 20);
    assert.equal(find('.event-title:first').text(), events[0].title);
  });
});
