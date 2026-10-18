import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Featured from "./components/Featured";
import Mofongo from "./components/Mofongo";
import SpiceMeter from "./components/SpiceMeter";
import Pizarra from "./components/Pizarra";
import PeakHours from "./components/PeakHours";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import Footer from "./components/Footer";
import { PhoneIcon } from "./components/icons";
import { marqueeItems, PHONE_TEL } from "./data/content";

function FloatingCall() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={PHONE_TEL}
      aria-label="Llamar a La Esquina Picante"
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-fuego py-3 pl-4 pr-5 font-extrabold text-crema shadow-[0_18px_40px_-10px_rgba(255,77,36,.75)] transition-all duration-500 hover:bg-brasa ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-16 opacity-0"
      }`}
    >
      <span className="relative">
        <span
          className="absolute inset-0 rounded-full bg-crema/40"
          style={{ animation: "pulse-ring 1.6s cubic-bezier(0,0,.2,1) infinite" }}
        />
        <PhoneIcon className="relative h-5 w-5" />
      </span>
      <span className="text-sm">Llamar y pedir</span>
    </a>
  );
}

export default function App() {
  return (
    <div className="noise relative min-h-screen overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Ticker items={marqueeItems} />
        <Featured />
        <Mofongo />
        <SpiceMeter />
        <Pizarra />
        <PeakHours />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
