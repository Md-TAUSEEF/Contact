import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt, FaChartLine } from "react-icons/fa";
import "./ServicePage.css";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Building responsive and high-performance websites tailored to your needs.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces and experiences that engage your audience.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "Creating sleek and functional apps for both Android and iOS platforms.",
  },
  {
    icon: <FaChartLine />,
    title: "Digital Marketing",
    description: "Boost your business with strategic marketing and analytics-driven campaigns.",
  },
];

function ServicePage() {
  return (
    <div className="service-page">
      <h1 className="service-title">Our Services</h1>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-name">{service.title}</h2>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicePage;
