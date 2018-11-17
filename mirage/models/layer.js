import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  variations: hasMany('variation-carto')
});
