export default function() {
  this.namespace = 'api';
  this.timing = 400;
  this.get('events');
  this.get('/events/:id');
}
