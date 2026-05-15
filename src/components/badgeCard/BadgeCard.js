import React, { Component } from "react";
import "./BadgeCard.css";
import { Fade } from "react-reveal";

class BadgeCard extends Component {
  render() {
    const badge = this.props.badge;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="badge-card">
          <div className="badge-img-div">
            <img
              className="badge-img"
              src={require(`../../assets/badges/${badge.image}`)}
              alt={badge.title}
            />
          </div>
          <p className="badge-title">{badge.title}</p>
        </div>
      </Fade>
    );
  }
}

export default BadgeCard;
