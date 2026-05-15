import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";

import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assets/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        {/* GitHub Calendar Section */}
        <div
          className="basic-projects"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <Fade bottom duration={2000} distance="40px">
            <div className="publications-heading-div">
              <div className="publications-heading-text-div">
                <h1
                  className="publications-heading-text"
                  style={{ color: theme.text, marginBottom: "40px" }}
                >
                  Days I Code
                </h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://ghchart.rshah.org/c084f5/PRODHOSH"
                    alt="PRODHOSH's Github Contributions"
                    style={{ width: "100%", maxWidth: "1000px" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      maxWidth: "1000px",
                      marginTop: "10px",
                      fontSize: "14px",
                      color: theme.secondaryText,
                      fontFamily: "Google Sans Regular",
                    }}
                  >
                    <span>Contributions in the last year</span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <span>Less</span>
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          backgroundColor: "#ebedf0",
                          borderRadius: "2px",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          backgroundColor: "#e2d5f8",
                          borderRadius: "2px",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          backgroundColor: "#c084f5",
                          borderRadius: "2px",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          backgroundColor: "#8a4de8",
                          borderRadius: "2px",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          backgroundColor: "#5c2da8",
                          borderRadius: "2px",
                        }}
                      ></div>
                      <span>More</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
