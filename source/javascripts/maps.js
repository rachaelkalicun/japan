$(document).ready(function(){
    // Make sure we have a map div
    if ($('#map').length) {

        // GeoJSON input features
        // The image and url properties of the features will be used in the tooltips
        var features = [{
            "geometry": { "type": "Point", "coordinates": [139.7685224, 35.6800712]},
            "properties": {
                "image": "/images/map_thumbs/tokyo.jpg",
                "url": "/blog/tokyo",
                "city": "Tokyo",
                'marker-color': '#000',
                'marker-symbol': 'star-stroked',
                "marker-size": "large"
            }
        }, {
            "geometry": { "type": "Point", "coordinates": [139.687795, 36.7279992]},
            "properties": {
                "image": "/images/map_thumbs/nikko.jpg",
                "url": "/blog/nikko",
                "city": "Nikko",
                'marker-color': '#815f65',
                'marker-symbol': 'star-stroked',
                "marker-size": "medium"
            }
        }, {
            "geometry": { "type": "Point", "coordinates": [137.972048, 36.2376227]},
            "properties": {
                "image": "/images/map_thumbs/matsumoto.jpg",
                "url": "/blog/matsumoto",
                "city": "Matsumoto",
                'marker-color': '#000',
                'marker-symbol': 'star-stroked',
                "marker-size": "medium"
            }
        }, {
            "geometry": { "type": "Point", "coordinates": [137.2510322, 36.1396246]},
            "properties": {
                "image": "/images/map_thumbs/takayama.jpg",
                "url": "/blog/takayama",
                "city": "Takayama",
                'marker-color': '#4f5641',
                'marker-symbol': 'star-stroked',
                "marker-size": "small"
            }
        }, {
            "geometry": { "type": "Point", "coordinates": [135.2, 35.5]},
            "properties": {
                "image": "/images/map_thumbs/kyoto.jpg",
                "url": "/blog/kyoto",
                "city": "Kyoto",
                'marker-color': '#4f5641',
                'marker-symbol': 'star-stroked',
                "marker-size": "large"
            }
        }, {
            "geometry": { "type": "Point", "coordinates": [135.9813217, 35]},
            "properties": {
                "image": "/images/map_thumbs/nara.jpg",
                "url": "/blog/nara",
                "city": "Nara",
                'marker-color': '#815f65',
                'marker-symbol': 'star-stroked',
                "marker-size": "large"
            }
        }, {
            "geometry": { "type": "Point", "coordinates": [135.1146944, 34.6852929]},
            "properties": {
                "image": "/images/map_thumbs/osaka.jpg",
                "url": "/blog/osaka",
                "city": "Osaka",
                'marker-color': '#000',
                'marker-symbol': 'star-stroked',
                "marker-size": "medium"
            }
        }, {
            "geometry": { "type": "Point", "coordinates": [135.5864, 34.2125]},
            "properties": {
                "image": "/images/map_thumbs/mt-koya.jpg",
                "url": "/blog/mt-koya",
                "city": "Mt. Koya",
                'marker-color': '#4f5641',
                'marker-symbol': 'star-stroked',
                "marker-size": "small"
            }
        }, {
            "geometry": { "type": "Point", "coordinates": [132.7518156, 34.7]},
            "properties": {
                "image": "/images/map_thumbs/hiroshima.jpg",
                "url": "/blog/hiroshima",
                "city": "Hiroshima",
                'marker-color': '#000',
                'marker-symbol': 'star-stroked',
                "marker-size": "medium"
            }
        }, {
            "geometry": { "type": "Point", "coordinates": [132.3092638, 34.2720633]},
            "properties": {
                "image": "/images/map_thumbs/miyajima.jpg",
                "url": "/blog/miyajima",
                "city": "Miyajima",
                'marker-color': '#4f5641',
                'marker-symbol': 'star-stroked',
                "marker-size": "small"
            }
        }];

        // Create map
        var map = mapbox.map('map', null, null, []);
        map.addLayer(mapbox.layer().id('rkalicun.map-zuc7uoiq'));

        // Create and add marker layer
        var markerLayer = mapbox.markers.layer().features(features);
          markerLayer.factory(function(m) {
            // Create a marker using the simplestyle factory
            var elem = mapbox.markers.simplestyle_factory(m);
            MM.addEvent(elem, 'click', function(e) {
                var url = m.properties.url;
                window.location.href = url;
            });
            return elem;
          });
        var interaction = mapbox.markers.interaction(markerLayer);
        map.addLayer(markerLayer);

        // Set a custom formatter for tooltips
        // Provide a function that returns html to be used in tooltip
        interaction.formatter(function(feature) {
            var o = '<a href="' + feature.properties.url + '"><img height="135" width="180" src="' + feature.properties.image + '"></a>' + '<p style="margin: 0">' + feature.properties.city + '</p>';
            return o;
        });


        // Set iniital center and zoom
        map.centerzoom({
            lat: 39,
            lon: 137
        }, 5);

        // Replace the z:index to prevent popups going over text
        $("#map > div:last-child").attr("style");
        var elem = $("#map > div:last-child");
        var old_style = elem.attr('style');
        elem.attr("style",old_style.replace(/ z-index: 0;/,''));

    }
});
