import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  description(i) { return faker.lorem.paragraph(); },
  short_description(i) { return faker.lorem.words(); },
  title(i) { return faker.address.city(); }
});
