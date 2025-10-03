import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm NIKHIL MAHALIK</p>
            <p className="subtext">
                I am a 2nd-year CSE soul at Technocrats Institute of Technology,
                A wanderer of code, a seeker in the TDC.
                Chessboards bend to my quiet schemes,
                Poems crawl from the shadows of my thoughts,
                And pages of books whisper secrets I can’t ignore.
                In the silence between clicks and lines,
                I dwell—reading, writing, dreaming, always chasing the unseen
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
             ACHIVEMENTS
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="SIH-2024 FINALIST"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="TDC-WEB DEV HACKATHON WINNER"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="GIH-2024 FINALIST"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="FUTUREHACK 2.O 2nd position holder"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
                Based on Mars (yes, really) 🌑 | Accepting remote work offers from any planet
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Shall we weave a project in the shadows, where ideas come alive? 🕯️
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools taht
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
