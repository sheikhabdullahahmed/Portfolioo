import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  Button as MaterialButton,
  Input as MaterialInput,
  Textarea as MaterialTextarea,
  Typography as MaterialTypography,
} from "@material-tailwind/react";
import React from "react";
import { useEffect, useState } from "react";
import { NavForPages } from "../Components/Navbar/NavbarforPage";

// Workaround for TypeScript conflicts (same as your original code)
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

const containerStyle = {
  width: "100%",
  height: "400px",
};

export function ContactSection14() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const [userLocation, setUserLocation] = useState<LatLngTuple | null>(null);

  useEffect(() => {
    // Check if geolocation is available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting location: ", error);
          // Fallback to a default location (e.g., Karachi)
          setUserLocation([24.8607, 67.0011]);
        }
      );
    } else {
      // If geolocation is not supported, fallback to default location
      console.log("Geolocation is not supported by this browser.");
      setUserLocation([24.8607, 67.0011]); // Default location
    }
  }, []);

  // If user location is not fetched yet, show loading or placeholder map
  if (!userLocation) {
    return <div>Loading map...</div>;
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
            We're Here to Help
          </Typography>
          <Typography className="contact-description">
            Whether it's a question about our services, a request for technical
            assistance, or suggestions for improvement, our team is eager to
            hear from you.
          </Typography>
          <div className="contact-grid">
            {/* Replace GoogleMap with Leaflet Map */}
            <MapContainer
              center={userLocation}
              zoom={13}
              scrollWheelZoom={false}
              style={{
                width: "100%",
                height: "400px",
                zIndex: 10,
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

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <Typography variant="small" className="form-label">
                    First Name
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="First Name"
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
                    placeholder="Last Name"
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
                  placeholder="name@email.com"
                  name="email"
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
                  placeholder="name@email.com"
                  name="email"
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
                  placeholder="Message"
                  name="message"
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
