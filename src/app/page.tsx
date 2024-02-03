"use client";
import Card from "@/components/Card";
import Image from "next/image";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "@tsparticles/engine";
import { useEffect, useState } from "react";
import { loadHeartShape } from "@tsparticles/shape-heart";

export default function Home() {
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
    <main className="flex h-screen flex-col items-center justify-between p-24 max-md:px-3 bg-[#ff6884]">
      {init && <Particles options={particlesOptions as ISourceOptions} />}
      <Card frontContent="Click to Open" />
    </main>
  );
}
