import React, { useEffect } from "react";

import "./ContactsPage.css";

export function Map() {
	useEffect(() => {
		window.ymaps.ready(init);
		function init() {
			const myMap = new window.ymaps.Map("map", {
				center: [55.694459, 37.661994],
				zoom: 14,
			});
			var geoObject = new window.ymaps.GeoObject({
				geometry: {
					type: "Point",
					coordinates: [55.694459, 37.661994],
				},
				properties: {
					balloonContent: "Штаб-квартира на Технопарке",
				},
			});
			myMap.geoObjects.add(geoObject);
		}
	}, []);
	return <div id="map" className="map" data-testid="map"></div>;
}
