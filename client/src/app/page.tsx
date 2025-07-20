import { Hero } from "@/components/app/Hero";
import { Topbar as Navbar } from "@/components/app/Navbar";
import { TerminalDemo } from "@/components/app/Terminal";

export default function Home() {
  return (
    <main className="h-dvh w-full ">
      <Navbar />
      <Hero />
      <div className="w-full md:px-auto px-4 flex justify-center items-center">
        <TerminalDemo />
      </div>
      <div className="h-dvh"></div>
    </main>
  );
}
