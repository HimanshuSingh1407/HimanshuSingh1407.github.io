import React from "react";
import Heading from "../components/Heading";
import GitHubCalendar from "github-calendar";
import Calender from "./Calender";
import "../styles/githubAnalysis.css"

const GithubAnalysis = () => {
  return (
    <>
      <Heading heading={`GitHub Analytics`} subHeading={`see my git status`} />
      <div id="githubContainer">
        <div className="githubStatus">
          <img
            src="https://github-readme-stats.vercel.app/api?username=HimanshuSingh1407&theme=buefy&show_icons=true"
          />
        </div>
        <div className="githubStatus">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=HimanshuSingh1407&theme=buefy&layout=compact"
          />
        </div>
        <div className="githubStatus">
          <Calender />
        </div>
        
      </div>
    </>
  );
};

export default GithubAnalysis;
