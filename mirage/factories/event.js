import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) { return faker.company.bsBuzz(); },
  description(i) { return faker.lorem.paragraph(); }
});
