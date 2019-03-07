let currentLayer;
createLayer = (imgName) => {
  currentLayer = imgName;
  layer = new ol.layer.Tile({
    opacity: DEFAULT_LAYER_OPACITY,
    visible: true,
    source: new ol.source.TileWMS({
      url: GEOSERVER_URL,
      params: {
        'LAYERS': imgName,
        'TILED': 'true'
      },
      ratio: 3,
      serverType: "geoserver"
    })
  });

  tryForceEndLoading();
  layer.getSource().on('tileloadstart', function (event) {        
    tryStartLoading();
  });

  layer.getSource().on('tileloadend', function (event) {
    tryEndLoading();
  });

  layer.getSource().on('tileloaderror', function (event) {
    tryEndLoading();
  });

  return layer;
}

const layerTitleSource = new ol.source.XYZ({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}'
});

const layerTitle = new ol.layer.Tile({
    source: layerTitleSource
});

const sabLayer = new ol.layer.Tile({
    visible: true,
    source: new ol.source.TileWMS({
        url: GEOSERVER_URL,
        params: {
        LAYERS: 'geonode:lim_semiarido_municipal_oficial',
        TILED: "true"
        },
        ratio: 3,
        serverType: "geoserver"
    })
});

const aguasLayer = new ol.layer.Tile({
visible: true,
    source: new ol.source.TileWMS({
        url: GEOSERVER_URL,
        params: {
        LAYERS: 'geonode:massa_dagua_sab',
        TILED: "true"
        },
        ratio: 3,
        serverType: "geoserver"
    })
});

const defaultLSource = new ol.source.XYZ({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
});

let defaultL = new ol.layer.Tile({
    source: defaultLSource
});

const initialImgNameLayer = dataDesertificacao.imgName;
let rootLayer = createLayer(initialImgNameLayer);