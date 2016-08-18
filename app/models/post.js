import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  title: DS.attr(),
  category: DS.attr(),
  image: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
