import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Import Leaflet
import {
  Button as MaterialButton,
  Input as MaterialInput,
  Textarea as MaterialTextarea,
  Typography as MaterialTypography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { NavForPages } from "../Components/Navbar/NavbarforPage";

// Fix default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// TypeScript workaround for Material components
const Button = MaterialButton as unknown as React.FC<
  React.PropsWithChildren<{
    variant?: "filled" | "outlined" | "gradient" | "text";
    color?: string;
    className?: string;
    type?: "button" | "submit" | "reset";
  }>
>;
const Input = MaterialInput as unknown as React.FC<{
  color?: string;
  size?: "md" | "lg";
  placeholder?: string;
  name?: string;
  type?: string;
  className?: string;
  containerProps?: object;
  labelProps?: object;
}>;
const Textarea = MaterialTextarea as unknown as React.FC<{
  rows?: number;
  color?: string;
  placeholder?: string;
  name?: string;
  className?: string;
  containerProps?: object;
  labelProps?: object;
}>;
const Typography = MaterialTypography as unknown as React.FC<
  React.PropsWithChildren<{
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "paragraph" | "small";
    color?: string;
    className?: string;
  }>
>;

export function ContactSection14() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const [userLocation, setUserLocation] = useState<LatLngTuple | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("User Location:", [latitude, longitude]); // Debug log
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting location: ", error);
          setUserLocation([24.8607, 67.0011]);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      setUserLocation([24.8607, 67.0011]);
    }
  }, []); 

  if (!userLocation) {
    return (
      <div className="loading-alert">
        <p>Please wait while we load the map...</p>
        <span className="spinner"></span>
      </div>
    );
  }

  return (
    <div> 
      <NavForPages />
      <section className="contact-section">
        <div className="contact-section-center">
          <Typography variant="h5" className="contact-subtitle">
            Customer Care
          </Typography>
          <Typography variant="h1" className="contact-title">
            Need a Developer?
          </Typography>
          <Typography className="contact-description">
            Have a project in mind, or just want to say hi? I’d love to hear
            from you. Let’s build something great together.
          </Typography>
          <div className="contact-grid">
            <div className="leaflet-container">
              <MapContainer
                center={userLocation}
                zoom={13}
                scrollWheelZoom={false}
                style={{
                  width: "100%",
                  height: "400px",
                  zIndex: 10, // Increased zIndex
                  position: "relative",
                }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <Marker position={userLocation}>
                  <Popup>This is My Location</Popup>
                </Marker>
              </MapContainer>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <Typography variant="small" className="form-label">
                    First Name
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    name="first-name"
                    className="form-input"
                    containerProps={{ className: "input-container" }}
                    labelProps={{ className: "hidden" }}
                  />
                </div>
                <div className="form-group">
                  <Typography variant="small" className="form-label">
                    Last Name
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    name="last-name"
                    className="form-input"
                    containerProps={{ className: "input-container" }}
                    labelProps={{ className: "hidden" }}
                  />
                </div>
                <div className="form-group">
                  <Typography variant="small" className="form-label">
                    Your Email
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    name="email"
                    className="form-input"
                    containerProps={{ className: "input-container" }}
                    labelProps={{ className: "hidden" }}
                  />
                </div>
                <div className="form-group">
                  <Typography variant="small" className="form-label">
                    Your Password
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    name="password"
                    type="password"
                    className="form-input"
                    containerProps={{ className: "input-container" }}
                    labelProps={{ className: "hidden" }}
                  />
                </div>
              </div>

              <div className="form-group">
                <Typography variant="small" className="form-label">
                  Your Message
                </Typography>
                <Textarea
                  rows={6}
                  color="gray"
                  name="Message"
                  className="form-textarea"
                  containerProps={{ className: "input-container" }}
                  labelProps={{ className: "hidden" }}
                />
              </div>
              <Button type="submit" className="submit-btn">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSection14;