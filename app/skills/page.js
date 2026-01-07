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
        router.push("/like");
        setTimeout(() => setIsAnimating(false), 1000);
      }
      if (e.deltaY < 0) {
        setIsAnimating(true);
        router.push("/about");
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
            Skills
            <span className="jp">ースキルセット</span>
        </h2>
        <div className="mainContent">
            <div className="skills">
                <div className="left">
                    <section className="stydy">
                        <h3>勉強していること</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>TypeScript</li>
                            <li>Python</li>
                            <li>Flask</li>
                            <li>MySQL</li>
                            <li>HTML / CSS</li>
                            <li>Figma</li>
                            <li>Canva</li>
                        </ul>
                    </section>
                </div>
                <div className="right">
                    <section className="lisense">
                        <h3>保有資格</h3>
                        <ul>
                            <li>ITパスポート</li>
                            <li>ExcelVBAベーシック</li>
                            <li>Webクリエイター能力認定試験Expert</li>
                        </ul>
                        <br></br>
                        <p>※現在、基本情報技術者試験の受験に向けて勉強中です</p>
                    </section>
                    <section className="future">
                        <h3>これから</h3>
                        <p>バックエンドの開発にも興味があり、フルスタックエンジニアを目指します。</p>
                        <p>スマートグラス向けアプリケーションの企画開発も気になっており、注目しています。</p>
                    </section>
                </div>
            </div>
        </div>
    </div>
  );
};