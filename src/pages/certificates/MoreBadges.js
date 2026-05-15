import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import BadgeCard from "../../components/badgeCard/BadgeCard";
import { Fade } from "react-reveal";
import { badges } from "../../portfolio";
import "./Certificates.css";

class MoreBadges extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="certificates-main">
        <Header theme={theme} />
        <div className="basic-certificates">
          <Fade bottom duration={2000} distance="40px">
            <div className="certs-heading-div">
              <div className="certs-heading-text-div">
                <h1
                  className="certs-heading-text"
                  style={{ color: theme.text }}
                >
                  All Badges
                </h1>
              </div>
            </div>
          </Fade>
          <div className="certs-body-div">
            {badges.badges.map((badge) => {
              return <BadgeCard badge={badge} theme={theme} />;
            })}
          </div>
        </div>
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default MoreBadges;
