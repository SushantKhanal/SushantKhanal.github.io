import "./AboutMe.css";
import React, { useEffect } from "react";

function AboutMe() {
  useEffect(() => {});

  return (
    <div>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
          <img
            src={require("../assets/img/about_sushant.jpg")}
            alt=""
            className="about__img"
          />

          <div className="about__data">
            <p className="about__description">
              Web developer, with extensive knowledge and years of experience,
              working in web technologies and Ui / Ux design, delivering quality
              work.
            </p>

            <div className="about__info">
              <div>
                <span className="about__info-title">03</span>
                <span className="about__info-name">
                  Years <br />
                  experience
                </span>
              </div>

              <div>
                <span className="about__info-title">10+</span>
                <span className="about__info-name">
                  Completed <br />
                  projects
                </span>
              </div>

              <div>
                <span className="about__info-title">2</span>
                <span className="about__info-name">
                  Companies <br />
                  worked
                </span>
              </div>
            </div>

            <div className="about__buttons">
              <a
                download=""
                href={require("../assets/pdf/Resume.pdf")}
                className="button button--flex"
              >
                Download CV{" "}
                <i className="uil uil-download-alt button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
