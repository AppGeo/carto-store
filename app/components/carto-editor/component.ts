import Component, { tracked } from 'sparkles-component';
import { service } from '@ember-decorators/service';
import carto from '@carto/carto.js';
import NotificationsService from 'ember-cli-notifications/services/notification-messages-service';
import LayerModel from 'carto-store/models/layer';

interface LoadedEvent {
  target: object;
}

interface Args {
  layer: LayerModel
}

interface Tab {
  id: string;
  name: string;
}

const client = new carto.Client({
  apiKey: 'default_public',
  username: 'cartojs-test'
});

export default class CartoEditor extends Component {
  @service('notification-messages')
  notificationsService!: NotificationsService;

  lat: number = 30;
  lng: number = 0;
  zoom: number = 3;
  cartoSource: string = 'ne_10m_populated_places_simple';
  layer: carto.layer.Layer;
  style: carto.style.CartoCSS;
  source: carto.source.Dataset;
  cartoClient: carto.Client;
  layerName?: string;
  name?: string;
  css?: string;
  sql?: string;
  tabs: Tab[];

  @tracked
  cartoCss: string = `
    #layer {
      marker-width: 7;
      marker-fill: #EE4D5A;
      marker-line-color: #FFFFFF;
    }
  `;
  @tracked
  cartoSql?: string;
  @tracked
  selectedTab: string = 'styles';

  constructor(args: Args) {
    super(args);
    let cartoCss = args.layer.get('css') || this.cartoCss;
    let cartoSql = args.layer.get('sql');
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

    layer.on('error', (e: any) => {
      this.notificationsService.error(`Error using the supplied SQL. ${e}`);
    });

    this.layer = layer;
    this.source = source;
    this.style = style;
    this.cartoClient = client;
    this.layerName = args.layer.get('name');
    this.tabs = [
      { name: 'Styles', id: 'styles' },
      { name: 'SQL', id: 'sql' },
      { name: 'Legend', id: 'legend' }
    ];
  }

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

  updateCss(css: string) {        
    this.style.setContent(css);
    this.cartoCss = css;
  }

  updateSql(sql: string) {
    if (sql) {
      const source = new carto.source.SQL(sql);
      this.layer.setSource(source);
      this.cartoSql = sql;
    } else {
      this.layer.setSource(this.source);
    }
  }

  destroy() {
    this.layer.off('error');
  }
}
