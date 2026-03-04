import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import { Button } from "@/components";
import defaultBg from "@/assets/default_bg.jpg";
import huddleWhite from "@/assets/huddle-white.svg";
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
            autoAlpha: 0.5,
            duration: 0.3,
          },
          0,
        )
        .to(
          huddleLogo.current,
          {
            rotation: 360,
            ease: "none",
            repeat: -1,
            duration: 55,
          },
          0,
        );
    }
  }, []);

  return (
    <main className="h-screen flex items-center p-10 box-border justify-center bg-black text-white/90">
      <div
        className="h-full w-full rounded-[64px] flex items-center justify-center bg-yellow-700 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${defaultBg})` }}
      >
        <div className="absolute inset-0 bg-black/30 rounded-[64px]" />
        <img
          ref={huddleLogo}
          id="huddleLogo"
          src={huddleWhite}
          alt="Huddle Logo"
          className="absolute size-max mx-auto pointer-events-none select-none opacity-0 will-change-transform"
        />
        <section className="relative min-w-136 mx-auto p-10 text-center flex flex-col gap-6 bg-black/70 rounded-3xl">
          <h1 className="text-5xl font-bold leading-7 pt-4">Let’s Huddle!</h1>
          <p className="text-1xl font-normal leading-tight">
            Dagelijkse vragen en de wekelijkse vrijdagquiz, <br /> je vindt ze
            hier!
          </p>
          <div className="px-3 gap-4 flex flex-col justify-center">
            <div className="flex justify-center gap-4 ">
              <Link to="/join-quiz" className="flex-1">
                <Button
                  copy="Deel mee met een Quiz!"
                  variant="primary"
                  fullWidth
                />
              </Link>
            </div>
            <div className="flex justify-center gap-4">
              <Link to="/join-quiz" className="flex-1">
                <Button
                  copy="Vraag van de dag!"
                  variant="secondary"
                  fullWidth
                />
              </Link>
              <Link to="/create-quiz" className="flex-1">
                <Button copy="Quiz Database" variant="tertiary" fullWidth />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
