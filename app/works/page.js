"use client";  // クライアントコンポーネントにする

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";

export default function Home() {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isAnimating) return;

      if (e.deltaY > 0) {
        setIsAnimating(true);
        router.push("/about");
        setTimeout(() => setIsAnimating(false), 1000);
      }
      if (e.deltaY < 0) {
        setIsAnimating(true);
        router.push("/");
        setTimeout(() => setIsAnimating(false), 1000);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isAnimating, router]);

  return (
    <div className="contentBox">
        <h2>
            Works
            <span className="jp">ー制作物</span>
        </h2>
        <div className="mainContent">
            <section className="works">
                <div className="work">
                    <div className="workFigure"></div>
                    <h3 className="worktTitle">Work Sample①</h3>
                    <p className="workTools">JavaScript / React</p>
                </div>
                <div className="work">
                    <div className="workFigure"></div>
                    <h3 className="worktTitle">Work Sample②</h3>
                    <p className="workTools">JavaScript / React</p>
                </div>
                <div className="work">
                    <div className="workFigure"></div>
                    <h3 className="worktTitle">Work Sample③</h3>
                    <p className="workTools">JavaScript / React</p>
                </div>
                <div className="work">
                    <div className="workFigure"></div>
                    <h3 className="worktTitle">Work Sample④</h3>
                    <p className="workTools">JavaScript / React</p>
                </div>
                <div className="work">
                    <div className="workFigure"></div>
                    <h3 className="worktTitle">Work Sample⑤</h3>
                    <p className="workTools">JavaScript / React</p>
                </div>
                <div className="work">
                    <div className="workFigure"></div>
                    <h3 className="worktTitle">Work Sample⑥</h3>
                    <p className="workTools">JavaScript / React</p>
                </div>
            </section>
        </div>
    </div>
  );
};