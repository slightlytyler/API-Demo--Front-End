import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  title: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date')
});
