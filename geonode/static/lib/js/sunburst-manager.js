changeAdvancedButton = (imgName) => {
	let url = window.location.protocol + '//' + window.location.hostname + '/maps/new?layer=' + imgName;

	$('#advanced-button').attr('href', url);
};

calculateChartSize = () => {
	const DEFAULT_PERCENT_SIZE = 0.9;
	const DEFAULT_SIZE = 400;
	try {
		return parseInt($('#container-chart').css('width')) * DEFAULT_PERCENT_SIZE;
	} catch (error) {
		return DEFAULT_SIZE;
	}
};

stopPeddingRequests = () => {
	window.stop();
};

actionOnSunbust = (map, sunburst, choosenData, defaultL, aguasLayer, sabLayer, layerTitle) => {
	let imgName = choosenData.imgName;
	if (currentLayer === imgName) {
		console.log('The same image. Do nothing.');
		return;
	}
	stopPeddingRequests();
	map.getLayers().clear();
	sunburst.focusOnNode(choosenData);

    let layer1 = createLayer(imgName);

    map.addLayer(defaultL);
	map.addLayer(layer1);
	map.addLayer(aguasLayer);
	map.addLayer(sabLayer);
	map.addLayer(layerTitle);

	changeAdvancedButton(choosenData.imgName);
	fillBreadcrumbs(map, sunburst, choosenData, defaultL, aguasLayer, sabLayer, layerTitle);
	fillLegend(choosenData.imgName);
	fillDescription(choosenData);
};

let sunburst;
$(document).ready(() => {
	let map = new ol.Map({
		layers: [ defaultL, rootLayer, aguasLayer, sabLayer, layerTitle ],
		target: 'map',
		pixelRatio: 1,
		view: new ol.View({
			center: CENTER_COORDS,
			zoom: 5
		})
	});

	let geocoder = new Geocoder('nominatim', {
		provider: 'osm',
		lang: 'pt-BR',
		placeholder: 'Pesquisa por município . . .',
		targetType: 'glass-button',
		limit: 2,
		keepOpen: true
	});

	geocoder.on('addresschosen', function(evt) {
		map.getView().animate({ zoom: 10, center: evt.coordinate });
		// TODO study who the geocode works
		// to colapse the search field
		$('#map').click();
	});

	map.addControl(geocoder);

	// TODO analyze this approach, because only works in the page initialization (Issue 5)
	let chartContainerSize = calculateChartSize();

	let color = d3.scaleOrdinal(d3.schemePaired);
	const DATA_DESERT_ATTR_LABEL = 'name2';
	const DATA_DESERT_ATTR_SIZE = 'size';
	sunburst = Sunburst()
		.data(dataDesertificacao)
		.label(DATA_DESERT_ATTR_LABEL)
		.size(DATA_DESERT_ATTR_SIZE)
		.width(chartContainerSize)
		.height(chartContainerSize)
		.color((d, parent) => d.color);

	sunburst.onNodeClick((choosenData) => {
		actionOnSunbust(map, sunburst, choosenData, defaultL, aguasLayer, sabLayer, layerTitle);
	});
	sunburst($('#chart')[0]);
	changeAdvancedButton(initialImgNameLayer);
	fillBreadcrumbs(map, sunburst, dataDesertificacao, defaultL, aguasLayer, sabLayer, layerTitle);
	fillLegend(initialImgNameLayer);
	fillDescription(dataDesertificacao);
});

$('#navbar li').on('click', () => {
	stopPeddingRequests();
});

let resizing = false;
$(window).on('resize', function() {
	const RESIZING_TIMEOUT = 1000;
	if (!resizing) {
		resizing = true;
		setTimeout(() => {
			let chartContainerSize = calculateChartSize();
			sunburst.width(chartContainerSize);
			sunburst.height(chartContainerSize);
			$('#chart').html('');
			sunburst($('#chart')[0]);
			resizing = false;
		}, RESIZING_TIMEOUT);
	}
});