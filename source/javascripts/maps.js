
    // GeoJSON input features
    // The image and url properties of the features will be used in
    // the tooltips
    var features = [{
        "geometry": { "type": "Point", "coordinates": [139.7685224, 35.6800712]},
        "properties": {
            "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/DCmontage4.jpg/250px-DCmontage4.jpg",
            "url": "/blog/tokyo",
            "city": "Tokyo",
            'marker-color': '#000',
            'marker-symbol': 'star-stroked',
            "marker-size": "small"
        }
    }, {
        "geometry": { "type": "Point", "coordinates": [139.687795, 36.7279992]},
        "properties": {
            "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Chicago_montage.jpg/300px-Chicago_montage.jpg",
            "url": "/blog/nikko",
            "city": "Nikko",
            'marker-color': '#000',
            'marker-symbol': 'star-stroked',
            "marker-size": "small"
        }
    }, {
        "geometry": { "type": "Point", "coordinates": [137.972048, 36.2376227]},
        "properties": {
            "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/NYC_Montage_2011.jpg/275px-NYC_Montage_2011.jpg",
            "url": "/blog/matsumoto",
            "city": "Matsumoto",
            'marker-color': '#000',
            'marker-symbol': 'star-stroked',
            "marker-size": "small"
        }
    }, {
        "geometry": { "type": "Point", "coordinates": [137.2510322, 36.1396246]},
        "properties": {
            "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/NYC_Montage_2011.jpg/275px-NYC_Montage_2011.jpg",
            "url": "/blog/takayama",
            "city": "Takayama",
            'marker-color': '#000',
            'marker-symbol': 'star-stroked',
            "marker-size": "small"
        }
    }, {
        "geometry": { "type": "Point", "coordinates": [135.763835, 35.0185804]},
        "properties": {
            "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/NYC_Montage_2011.jpg/275px-NYC_Montage_2011.jpg",
            "url": "/blog/kyoto",
            "city": "Kyoto",
            'marker-color': '#000',
            'marker-symbol': 'star-stroked',
            "marker-size": "small"
        }
    }, {
        "geometry": { "type": "Point", "coordinates": [135.7813217, 34.7160928]},
        "properties": {
            "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/NYC_Montage_2011.jpg/275px-NYC_Montage_2011.jpg",
            "url": "/blog/nara",
            "city": "Nara",
            'marker-color': '#9d3b1d',
            'marker-symbol': 'star-stroked',
            "marker-size": "small"
        }
    }, {
        "geometry": { "type": "Point", "coordinates": [135.5146944, 34.6852929]},
        "properties": {
            "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/NYC_Montage_2011.jpg/275px-NYC_Montage_2011.jpg",
            "url": "/blog/osaka",
            "city": "Osaka",
            'marker-color': '#000',
            'marker-symbol': 'star-stroked',
            "marker-size": "small"
        }
    }, {
        "geometry": { "type": "Point", "coordinates": [135.5864, 34.2125]},
        "properties": {
            "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/NYC_Montage_2011.jpg/275px-NYC_Montage_2011.jpg",
            "url": "/blog/mt-koya",
            "city": "Mt. Koya",
            'marker-color': '#9d3b1d',
            'marker-symbol': 'star-stroked',
            "marker-size": "small"
        }
    }, {
        "geometry": { "type": "Point", "coordinates": [132.4518156, 34.3916058]},
        "properties": {
            "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/NYC_Montage_2011.jpg/275px-NYC_Montage_2011.jpg",
            "url": "/blog/hiroshima",
            "city": "Hiroshima",
            'marker-color': '#9d3b1d',
            'marker-symbol': 'star-stroked',
            "marker-size": "small"
        }
    }, {
        "geometry": { "type": "Point", "coordinates": [132.3092638, 34.2720633]},
        "properties": {
            "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/NYC_Montage_2011.jpg/275px-NYC_Montage_2011.jpg",
            "url": "/blog/miyajima",
            "city": "Miyajima",
            'marker-color': '#000',
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
        var o = '<img height="59" width="59" src="' + feature.properties.image + '">' +
            '<p style="margin: 0">' + feature.properties.city + '</p>';
        return o;
    });



    // Set iniital center and zoom
    map.centerzoom({
        lat: 37.8833,
        lon: 136
    }, 5);

    
    // Attribute map
    // map.ui.attribution.add()
    //     .content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');
