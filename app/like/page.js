"use client";  // クライアントコンポーネントにする

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";

export default function Home() {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isAnimating) return;

      if (e.deltaY > 0) {
        setIsAnimating(true);
        router.push("/");
        setTimeout(() => setIsAnimating(false), 1000);
      }
      if (e.deltaY < 0) {
        setIsAnimating(true);
        router.push("/skills");
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
            I Like
            <span className="jp">ー好きなこと</span>
        </h2>
        <div className="mainContent">
            <p>バイクで出かけるのが好きです。</p>
            <section className="pictureSection">
                <div className="pictures">
                    <div className="area1" style={{background:"url(IMG_6361.jpeg) no-repeat 60% 55%/130%"}}></div>
                    <div className="area2" style={{background:"url(IMG_6391.jpeg) no-repeat left 55%/cover"}}></div>
                    <div className="area3" style={{background:"url(IMG_6425.jpeg) no-repeat left 55%/cover"}}></div>
                </div>
                <button className="prevButton"><SlArrowLeft size={40} color="#fff"/></button>
                <button className="nextButton"><SlArrowRight size={40} color="#fff"/></button>
            </section>
        </div>
    </div>
  );
};
