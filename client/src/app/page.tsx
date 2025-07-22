import { Topbar as Navbar } from "@/components/app/Navbar";
import { Hero } from "@/components/app/Hero";
import { Term as Terminal } from "@/components/app/Terminal";
import { Features } from "@/components/app/FeaturesHeader";

export default function Home() {
  return (
    <main className="h-dvh w-full ">
      <Navbar />
      <Hero />
      <div className="w-full md:px-auto px-4 flex justify-center items-center">
        <Terminal />
      </div>
      <Features />
      <div className="h-dvh" />
    </main>
  );
}

<div className="" />;
