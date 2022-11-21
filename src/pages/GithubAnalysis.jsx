import React from "react";
import Heading from "../components/Heading";
import GitHubCalendar from "github-calendar";

const GithubAnalysis = () => {
  return (
    <>
      <Heading heading={`GitHub Analytics`} subHeading={`see my git status`} />
      <div style={{display:"flex", justifyContent:"center", gap: "3rem", marginTop:"3rem"}}>
        <div>
          <img
            width="100%px"
            height="180em"
            src="https://github-readme-stats.vercel.app/api?username=HimanshuSingh1407&theme=buefy&show_icons=true"
          />
        </div>
        <div>
          <img
            width="100%px"
            height="180em"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=HimanshuSingh1407&theme=buefy&layout=compact"
          />
        </div>
      </div>
    </>
  );
};

export default GithubAnalysis;
