import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

// Detect if the link is a PDF (bundled via require)
function isPDF(link) {
  if (typeof link === "string") {
    return link.toLowerCase().endsWith(".pdf");
  }
  return false;
}

class CertificationCard extends Component {
  render() {
    const { certificate, theme } = this.props;
    const link = certificate.certificate_link;
    const pdf = isPDF(link);

    return (
      <Fade bottom duration={2000} distance="20px">
        <a
          className="cert-card"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          title={certificate.title}
        >
          {/* Thumbnail */}
          <div className="cert-thumb">
            {pdf ? (
              <div className="cert-pdf-thumb">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  width="70"
                  height="70"
                  fill="none"
                >
                  <rect width="64" height="64" rx="8" fill="#e53935" />
                  <text
                    x="50%"
                    y="42"
                    textAnchor="middle"
                    fill="white"
                    fontSize="20"
                    fontWeight="bold"
                    fontFamily="Arial, sans-serif"
                  >
                    PDF
                  </text>
                </svg>
                <span className="cert-pdf-label">Click to open</span>
              </div>
            ) : (
              <img
                className="cert-preview-img"
                src={link}
                alt={certificate.title}
              />
            )}
            <div className="cert-thumb-overlay">
              <span className="cert-thumb-view">View Certificate ↗</span>
            </div>
          </div>

          {/* Body */}
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </h3>
          </div>
        </a>
      </Fade>
    );
  }
}

export default CertificationCard;
