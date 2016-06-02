import { test } from 'qunit';
import moduleForAcceptance from 'travel-eve/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | 404');

test('It redirects to index when accessed directly', function(assert) {
  visit('/404');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('It displays 404 message for nonexistent pages', function(assert) {
  visit('/certainly_does_not_exist_unless_we_went_mad');

  andThen(function() {
    assert.equal(currentURL(), '/certainly_does_not_exist_unless_we_went_mad');
    assert.equal(find('h3.404').text(), 'Page not found. Please return back');
  });
});
