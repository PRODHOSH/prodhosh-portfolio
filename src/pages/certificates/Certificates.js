import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import BadgeCard from "../../components/badgeCard/BadgeCard";
import CertificatesImg from "./CertificatesImg";
import { Fade } from "react-reveal";
import { certifications, badges } from "../../portfolio";
import "./Certificates.css";

class Certificates extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="certificates-main">
        <Header theme={theme} />

        <div className="basic-certificates">
          {/* ── Hero — matches Education/Experience layout ── */}
          <Fade bottom duration={2000} distance="40px">
            <div className="certs-hero-div">
              <div className="certs-hero-img-div">
                <CertificatesImg theme={theme} />
              </div>
              <div className="certs-hero-text-div">
                <h1
                  className="certs-heading-text"
                  style={{ color: theme.text }}
                >
                  Certificates &amp; Badges
                </h1>
                <p
                  className="certs-heading-subtitle"
                  style={{ color: theme.secondaryText }}
                >
                  Courses, workshops, and community recognition I've earned
                </p>
              </div>
            </div>
          </Fade>

          {/* ── Certifications section ── */}
          <Fade bottom duration={2000} distance="30px">
            <h2 className="certs-section-title" style={{ color: theme.text }}>
              Certifications
            </h2>
          </Fade>

          <div className="certs-body-div">
            {certifications.certifications.map((cert, i) => (
              <CertificationCard key={i} certificate={cert} theme={theme} />
            ))}
          </div>

          {/* ── Badges section ── */}
          <Fade bottom duration={2000} distance="30px">
            <h2
              className="certs-section-title"
              style={{ color: theme.text, marginTop: "60px" }}
            >
              Badges
            </h2>
          </Fade>

          <div className="badges-body-div">
            {badges.badges.map((badge, i) => (
              <BadgeCard key={i} badge={badge} theme={theme} />
            ))}
          </div>
        </div>

        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Certificates;
