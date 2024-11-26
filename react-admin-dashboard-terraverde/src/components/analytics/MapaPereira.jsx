import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MapaPereira = () => {
  useEffect(() => {
    const map = L.map("map_38d0a28180051106357f7ab79077ad72", {
      center: [4.8087, -75.6906],
      crs: L.CRS.EPSG3857,
      zoom: 13,
      zoomControl: true,
      preferCanvas: false,
    });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      detectRetina: false,
      maxNativeZoom: 19,
      maxZoom: 19,
      minZoom: 0,
      noWrap: false,
      opacity: 1,
      subdomains: "abc",
      tms: false,
    }).addTo(map);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        id="map_38d0a28180051106357f7ab79077ad72"
        style={{ width: "100%", height: "100%" }}
      ></div>
    </div>
  );
};

export default MapaPereira;
