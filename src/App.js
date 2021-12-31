import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import newYear from "./newYear.svg";
import audio from "./cmsx.mp3";

const App = () => {
  const clicked = () => {
    console.log("clicked");
    new Audio(audio).play();
  };

  useEffect(() => {
    const timmer = setTimeout(() => {
      clicked();
    }, 1000);
    return () => clearTimeout(timmer);
  }, []);

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="bodyC" onClick={clicked}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="TextConatiner">
        <img src={newYear} alt="Santa" className="santaImage" />
        <h1 className="Text">
          Happy New Year<span className="Name"> Rikta</span>
        </h1>
      </div>
      <h1 className="Footer">
        Made with <span>{"❤️"}</span> by Snehasish
      </h1>
    </div>
  );
};

export default App;
