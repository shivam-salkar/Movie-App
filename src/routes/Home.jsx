import React from "react";
import SplitText from "./SplitText";

const Home = () => {
  return (
    <>
      <div className=" flex flex-row items-center  w-full h-screen bg-linear-to-tr from-[#0c233e] to-[#48052d]">
        <img
          src="./Banner.png"
          alt="HeroBanner"
          className="m-5 animate-fade-up "
        />
        {/* 
        <h1 className="animate-fade-up">
          All the <span className="text-gradient">Movies</span> you Love,
          <br /> All at one place.
        </h1> */}

        <div className="flex flex-col">
          <div className="flex flex-row">
            <SplitText
              text="All the "
              className="text-6xl font-bold text-center animate-fade-up text-white"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <span className="text-6xl font-bold text-gradient ml-5 mr-5 animate-fade-up">
              Movies
            </span>

            <SplitText
              text="You Love, "
              className="text-6xl font-bold text-center animate-fade-up text-white"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <br />
          </div>
          <SplitText
            text="All at one place. "
            className="text-6xl font-bold text-center animate-fade-up text-white"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
