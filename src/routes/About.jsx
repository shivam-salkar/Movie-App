import React from "react";
import SplitText from "./SplitText";

const About = () => {
  return (
    <div className="bg-[#101828] text-white text-center w-full h-screen flex flex-row ">
      <img
        src="./Profile.jpeg"
        alt=""
        className="rounded-full w-128 h-128 m-5 shadow-2xl shadow-black animate-fade-up"
      />
      <div className="flex flex-col animate-fade-up">
        <h1 className="font-thin mt-5">Hey I'm Shivam.</h1>
        {/* <p className="text-pretty font-bold text-2xl p-12">
          This app is a beginner-friendly project built with React and
          TailwindCSS to explore movies from TMDB (The Movie Database) API. It
          allows users to search for movies and browse sections like popular,
          trending, romance, and Indian movies, all within a responsive and
          modern interface. The project helped me learn React fundamentals such
          as components, state, and hooks (useState, useEffect), as well as
          TailwindCSS for styling and building responsive layouts. By
          integrating a real-world API, I gained hands-on experience with
          fetching and displaying dynamic data while creating a clean and
          interactive search experience.
        </p> */}
        <SplitText
              text="This app is a beginner-friendly project built with React and
          TailwindCSS to explore movies from TMDB (The Movie Database) API. It
          allows users to search for movies and browse sections like popular,
          trending, romance, and Indian movies, all within a responsive and
          modern interface. The project helped me learn React fundamentals such
          as components, state, and hooks (useState, useEffect), as well as
          TailwindCSS for styling and building responsive layouts. By
          integrating a real-world API, I gained hands-on experience with
          fetching and displaying dynamic data while creating a clean and
          interactive search experience."
              className="text-2xl font-bold text-center  text-white"
              delay={25}
              duration={0.1}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />

        <div>
          <a href="https://www.linkedin.com/in/shivam-salkar/" target="_blank">
            <button className=" font-bold border-2 p-2 hover:cursor-pointer hover:bg-white hover:text-[#101828] m-5 mr-50">
              Linkedin
            </button>
          </a>
          <a href="https://www.github.com/shivam-salkar/" target="_blank">
            <button className=" font-bold border-2 p-2 hover:cursor-pointer hover:bg-white hover:text-[#101828] m-5">
              GitHub
            </button>
          </a>

        </div>
      </div>
    </div>
  );
};

export default About;
