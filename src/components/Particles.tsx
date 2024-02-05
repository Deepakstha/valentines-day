"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../helper/particles.json";
import { ISourceOptions } from "@tsparticles/engine";
import { useEffect, useState } from "react";
import { loadHeartShape } from "@tsparticles/shape-heart";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadHeartShape(engine);
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  particlesOptions.particles.size.value = { min: 5, max: 13 };
  particlesOptions.particles.shape.type = "heart";
  return (
    <div>
      {init && <Particles options={particlesOptions as ISourceOptions} />}
    </div>
  );
};

export default ParticlesComponent;
