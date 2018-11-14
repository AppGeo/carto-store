import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import carto from '@carto/carto.js';

interface LoadedEvent {
  target: object;
}

interface CartoLayer {
  setStyle: Function;
}

const client = new carto.Client({
  apiKey: 'default_public',
  username: 'cartojs-test'
});

export default class Application extends Controller.extend({
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
  layer!: CartoLayer;
  style!: object;

  constructor() {
    super();
    let cartoCss = this.cartoCss;
    let cartoSource = this.cartoSource;

    const source = new carto.source.Dataset(cartoSource);
    const style = new carto.style.CartoCSS(cartoCss);
    const layer = new carto.layer.Layer(source, style);

    this.layer = layer;
    this.style = style;
    this.cartoClient = client;
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
    let layer = this.layer;
    
    this.style.setContent(css);
    this.set('cartoCss', css);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'application': Application;
  }
}
