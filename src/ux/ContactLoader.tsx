import React from "react";
import "./ContactLoader.css";

interface ContactLoaderProps {
  size?: string;
  color?: string;
}

const ContactLoader: React.FC<ContactLoaderProps> = ({
  size = "2em",
  color = "currentColor",
}) => (
  <span
    className="loader-29"
    style={{
      fontSize: size,
      color,
      display: "inline-block",
      verticalAlign: "middle",
    }}
    aria-label="Loading"
  />
);

export default ContactLoader;
