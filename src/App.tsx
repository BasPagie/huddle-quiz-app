import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import { Button } from "@/components";
import "./App.css";

const App = () => {
  const huddleLogo = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (huddleLogo.current) {
      const logoTl = gsap.timeline();
      logoTl
        .to(
          huddleLogo.current,
          {
            ease: "power1.out",
            autoAlpha: 1,
            duration: 0.3,
          },
          0
        )
        .to(
          huddleLogo.current,
          {
            rotation: 360,
            ease: "none",
            repeat: -1,
            duration: 15,
          },
          0
        );
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
      <section className="max-w-screen-xl mx-auto p-8 text-center flex flex-col gap-6">
        <img
          ref={huddleLogo}
          id="huddleLogo"
          src="/src/assets/huddle-white.svg"
          alt="Huddle Logo"
          className="size-32 mx-auto pointer-events-none select-none opacity-0"
        />
        <h1 className="text-5xl font-bold leading-tight">Huddle</h1>
        <p className="text-2xl font-normal leading-tight">
          The Office Quiz App!
        </p>

        <div className="px-3 gap-4 flex justify-center">
          <Link to="/create-quiz">
            <Button copy="Create Quiz" variant="primary" />
          </Link>
          <Link to="/join-quiz">
            <Button copy="Join Quiz" variant="secondary" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default App;
