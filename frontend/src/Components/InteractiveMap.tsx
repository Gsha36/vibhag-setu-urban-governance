import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Coordinates for Manipal University Jaipur
const markers = [
  {
    geocode: [26.8844, 75.8104], // Central location of Manipal University Jaipur
    popUp: "Manipal University Jaipur Main Campus",
  },
  {
    geocode: [26.8838, 75.8090], // Nearby area 1
    popUp: "Hostel Area",
  },
  {
    geocode: [26.8855, 75.8110], // Nearby area 2
    popUp: "Sports Complex",
  },
];

const Map = () => {
  return (
    <MapContainer
      center={[26.8844, 75.8104]} // Centered on Manipal University Jaipur
      zoom={16}
      style={{ height: "500px", width: "100%" }}
      className="rounded-lg shadow-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Custom markers for campus locations */}
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.geocode}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;