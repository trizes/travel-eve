import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  description(i) { return faker.lorem.paragraphs(); },
  short_description(i) { return faker.lorem.words(); },
  title(i) { return faker.address.city(); }
});
