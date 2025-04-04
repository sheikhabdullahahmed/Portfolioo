import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  // Leaflet ki styling
import { LatLngTuple } from 'leaflet';


const center: LatLngTuple = [24.8607, 67.0011]; // Karachi, Pakistan example

const MyLeafletMap = () => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      {/* React-Leaflet Map Container */}
      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        {/* OpenStreetMap Tile Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {/* Marker with a Popup */}
        <Marker position={center}>
          <Popup>یہ میری لوکیشن ہے!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyLeafletMap;
