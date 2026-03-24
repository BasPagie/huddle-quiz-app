import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowLeft } from "iconoir-react";

import InitialContent from "@/components/homepage/Initial";
import JoiningLobby from "@/components/homepage/JoiningLobby";
import JoinedLobby from "@/components/homepage/JoinedLobby";

import defaultBg from "@/assets/default_bg.jpg";
import huddleWhite from "@/assets/huddle-white.svg";
import "./App.css";

const scaleMap = { 0: 1, 1: 1.3, 2: 1.6 };

const App = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [scaleAnimationAllowed, setScaleAnimationAllowed] = useState(false);
  const huddleLogo = useRef<HTMLImageElement>(null);
  const logoContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (huddleLogo.current) {
        const logoTl = gsap.timeline();
        logoTl.to(
          huddleLogo.current,
          {
            rotation: "+=360",
            ease: "none",
            repeat: -1,
            duration: 60,
          },
          0,
        );
      }

      if (logoContainer.current) {
        const hasPlayedIntro = localStorage.getItem("introPlayed") === "true";

        if (hasPlayedIntro) {
          // Skip intro, just enable scale animation immediately
          setScaleAnimationAllowed(true);
        } else {
          const containerTl = gsap.timeline({
            onComplete: () => {
              setScaleAnimationAllowed(true);
              localStorage.setItem("introPlayed", "true");
            },
          });
          containerTl.from(logoContainer.current, {
            ease: "power2.out",
            autoAlpha: 0,
            rotation: -100,
            scale: 1.75,
            duration: 1.5,
          });
        }
      }
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!scaleAnimationAllowed) return;

    if (logoContainer.current) {
      gsap.to(logoContainer.current, {
        scale: scaleMap[activeContent as keyof typeof scaleMap],
        ease: "power2.inOut",
        duration: 0.6,
      });
    }
  }, [activeContent, scaleAnimationAllowed]);

  const showingContent = (expr: number) => {
    switch (expr) {
      case 0:
        return <InitialContent setActiveContent={setActiveContent} />;
      case 1:
        return <JoiningLobby setActiveContent={setActiveContent} />;
      case 2:
        return <JoinedLobby />;
      default:
        return <p>Unknown content state</p>;
    }
  };

  return (
    <main className="h-screen flex items-center p-10 box-border justify-center bg-black text-white/90">
      <div
        className="h-full w-full rounded-[64px] flex items-center justify-center bg-yellow-700 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${defaultBg})` }}
      >
        <div className="absolute inset-0 bg-black/30 rounded-[64px]" />
        <div
          ref={logoContainer}
          className="flex justify-center items-center absolute inset-0 mx-auto pointer-events-none select-none will-change-transform"
        >
          <img
            ref={huddleLogo}
            id="huddleLogo"
            src={huddleWhite}
            alt="Huddle Logo"
            className="absolute size-max mx-auto pointer-events-none select-none opacity-50 will-change-transform"
          />
        </div>
        <div className="relative flex flex-col justify-center">
          <section className="relative min-w-136 mx-auto p-10 text-center flex flex-col gap-6 bg-black/70 rounded-3xl ">
            {showingContent(activeContent)}
          </section>
          {activeContent !== 0 && (
            <button
              onClick={() => setActiveContent((ac) => ac - 1)}
              className="absolute cursor-pointer flex justify-center z-99 items-center -top-15 size-13 left-0 bg-black/70 rounded-4xl hover:bg-black/50 transition-colors duration-250"
            >
              <ArrowLeft strokeWidth={3} width="1.5em" height="1.5em" />
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
