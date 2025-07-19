import { Hero } from "@/components/app/header";
import { Topbar as Navbar } from "@/components/app/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh"></div>
      <div className="h-dvh"></div>
    </main>
  );
}
