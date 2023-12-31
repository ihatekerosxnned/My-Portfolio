import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBG() {
  async function loadParticles(main) {
    await loadFull(main);
  }
  return (
    <Particles
      id="tsparticles"
      init={loadParticles}
      options={{
        background: {
          color: {
            value: "#27282F",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                "enable": false,
                "force": 2,
                "smooth": 10
              }
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
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#10637d",
          },
          links: {
            color: "#10637d",
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
            random: true,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area:900,
            },
            value: 100,
          },
          opacity: {
            value: 0.15,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 2,
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBG;
