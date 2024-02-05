import Card from "@/components/Card";
import ParticlesComponent from "@/components/Particles";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 max-md:px-3 bg-[#ff6884]">
      <ParticlesComponent />
      <Card />
    </main>
  );
}
