import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Layer ${i}`;
  },

  css(i) {
    return `#layer {
      marker-width: ${i + 5};
      marker-fill: #EE4D5A;
      marker-line-color: #FFFFFF;
    }`;
  },

  sql: 'SELECT * FROM ne_10m_populated_places_simple WHERE adm0name IN (SELECT admin FROM ne_adm0_europe)'
});
