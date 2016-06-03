import { test } from 'qunit';
import moduleForAcceptance from 'travel-eve/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | event');

test('visiting /events/:event_id', function(assert) {
  server.createList('event', 1);
  visit('/events/1');

  andThen(function() {
    assert.equal(currentURL(), '/events/1');
  });
});

test('It lists the event', function(assert) {
  let events = server.createList('event', 1);
  visit('/events/1');

  andThen(function() {
    assert.equal(find('.event-title').text(), events[0].title);
    assert.equal(find('.long-description').text(), events[0].description);
  });
});
