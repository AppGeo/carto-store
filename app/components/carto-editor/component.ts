import Component from '@ember/component';
import { get } from '@ember/object';
import { action } from '@ember-decorators/object';
import carto from '@carto/carto.js';

interface LoadedEvent {
  target: object;
}

interface CartoLayer {
  setStyle: Function;
}

interface CartoData {
  css?: string;
  sql?: string;
}

const client = new carto.Client({
  apiKey: 'default_public',
  username: 'cartojs-test'
});


export default class CartoEditor extends Component.extend({
  // anything which *must* be merged to prototype here
}) {
  lat: number = 30;
  lng: number = 0;
  zoom: number = 3;
  cartoSource: string = 'ne_10m_populated_places_simple';
  cartoCss: string = `
    #layer {
      marker-width: 7;
      marker-fill: #EE4D5A;
      marker-line-color: #FFFFFF;
    }
  `;
  cartoSql?: string;
  layer: carto.layer.Layer;
  style: carto.style.CartoCSS;
  source: carto.source.Dataset;
  cartoClient: carto.Client;
  name?: string;
  layerName?: string;
  css?: string;
  sql?: string;

  constructor() {
    super(...arguments);
    let cartoCss = this.css || this.cartoCss;
    let cartoSql = this.sql;
    let source;
    
    if (cartoSql) {
      source = new carto.source.SQL(cartoSql);
      this.cartoSql = cartoSql;
    } else {
      let cartoSource = this.cartoSource;
      source = new carto.source.Dataset(cartoSource);
    }

    const style = new carto.style.CartoCSS(cartoCss);
    const layer = new carto.layer.Layer(source, style);

    this.layer = layer;
    this.source = source;
    this.style = style;
    this.cartoClient = client;
    this.layerName = this.name;
  }

  @action
  mapLoaded(event: LoadedEvent) {
    let map = event.target;
    let layer = this.layer;

    client.addLayer(layer);

    let leafletLayer = client.getLeafletLayer();
    
    setTimeout(() => {
      leafletLayer.addTo(map);
      leafletLayer.bringToFront();
    }, 300)
  }

  @action
  updateCss(css: string) {        
    this.style.setContent(css);
    this.set('cartoCss', css);
  }

  @action
  updateSql(sql: string) {
    if (sql) {
      const source = new carto.source.SQL(sql);
      this.layer.setSource(source);
      this.set('cartoSql', sql);
    } else {
      this.layer.setSource(this.source);
    }
  }};
