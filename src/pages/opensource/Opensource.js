import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import PullRequestCard from "../../components/pullRequestCard/PullRequestCard";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart";
import IssueChart from "../../components/issueChart/IssueChart";
import PullRequestData from "../../shared/opensource/pull_requests.json";
import "./Opensource.css";

class OpenSource extends Component {
  state = {
    githubData: null,
    todayCommits: 0,
    loading: true,
  };

  componentDidMount() {
    fetch("https://api.github.com/users/PRODHOSH")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.login) {
          this.setState({ githubData: data, loading: false });
        } else {
          this.setState({ loading: false });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });

    fetch("https://api.github.com/users/PRODHOSH/events/public")
      .then((res) => res.json())
      .then((events) => {
        if (Array.isArray(events)) {
          const today = new Date().toISOString().split("T")[0];
          const todayCommits = events
            .filter(
              (e) =>
                e.type === "PushEvent" &&
                e.created_at &&
                e.created_at.startsWith(today)
            )
            .reduce(
              (sum, e) =>
                sum +
                (e.payload && e.payload.commits ? e.payload.commits.length : 0),
              0
            );
          this.setState({ todayCommits });
        }
      })
      .catch(() => {});
  }

  render() {
    const theme = this.props.theme;
    const { githubData, todayCommits, loading } = this.state;

    return (
      <div className="opensource-main">
        <Header theme={theme} />

        {/* GitHub Profile Section */}
        <div className="opensource-profile-section">
          <Fade bottom duration={2000} distance="40px">
            <div
              className="github-profile-card"
              style={{ borderColor: theme.imageHighlight + "55" }}
            >
              <div className="github-avatar-wrapper">
                <img
                  src="https://avatars.githubusercontent.com/PRODHOSH"
                  alt="Prodhosh VS"
                  className="github-avatar"
                  style={{ borderColor: theme.imageHighlight }}
                />
              </div>
              <div className="github-profile-info">
                <h2
                  className="github-profile-name"
                  style={{ color: theme.text }}
                >
                  Prodhosh VS
                </h2>
                <a
                  href="https://github.com/PRODHOSH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-username"
                  style={{ color: theme.imageHighlight }}
                >
                  @PRODHOSH
                </a>
                {githubData && githubData.bio && (
                  <p
                    className="github-bio"
                    style={{ color: theme.secondaryText }}
                  >
                    {githubData.bio}
                  </p>
                )}
                <div className="github-stats-row">
                  <div className="github-stat-item">
                    <span className="stat-number" style={{ color: theme.text }}>
                      {loading
                        ? "—"
                        : githubData
                        ? githubData.public_repos
                        : "—"}
                    </span>
                    <span
                      className="stat-label"
                      style={{ color: theme.secondaryText }}
                    >
                      Repos
                    </span>
                  </div>
                  <div className="github-stat-item">
                    <span className="stat-number" style={{ color: theme.text }}>
                      {loading ? "—" : githubData ? githubData.followers : "—"}
                    </span>
                    <span
                      className="stat-label"
                      style={{ color: theme.secondaryText }}
                    >
                      Followers
                    </span>
                  </div>
                  <div className="github-stat-item">
                    <span className="stat-number" style={{ color: theme.text }}>
                      {loading ? "—" : githubData ? githubData.following : "—"}
                    </span>
                    <span
                      className="stat-label"
                      style={{ color: theme.secondaryText }}
                    >
                      Following
                    </span>
                  </div>
                  <div className="github-stat-item">
                    <span
                      className="stat-number"
                      style={{ color: theme.imageHighlight }}
                    >
                      {todayCommits}
                    </span>
                    <span
                      className="stat-label"
                      style={{ color: theme.secondaryText }}
                    >
                      Today's Commits
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        {/* Contributions Charts Section */}
        <div className="opensource-section">
          <Fade bottom duration={2000} distance="40px">
            <h1
              className="opensource-section-heading"
              style={{ color: theme.text }}
            >
              Contributions
            </h1>
          </Fade>
          <div className="charts-row">
            <PullRequestChart theme={theme} />
            <IssueChart theme={theme} />
          </div>
        </div>

        {/* Pull Requests Section */}
        <div className="opensource-section">
          <Fade bottom duration={2000} distance="40px">
            <h1
              className="opensource-section-heading"
              style={{ color: theme.text }}
            >
              Pull Requests
            </h1>
          </Fade>
          <div className="pr-list-container">
            {PullRequestData.data.map((pr) => (
              <PullRequestCard key={pr.id} pullRequest={pr} theme={theme} />
            ))}
          </div>
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default OpenSource;
