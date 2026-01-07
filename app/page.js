"use client";  // クライアントコンポーネントにする

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";

export default function Home() {
  const router = useRouter(); // 現在のルーターオブジェクトを取得。（遷移や更新を行うためのメソッドだけを持つオブジェクト。現在のパスの値は持たない）
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isAnimating) return;
      //連続遷移防止

      if (e.deltaY > 0) {
        setIsAnimating(true);
        router.push("/works");
        //pushはクライアントサイドでのページ遷移を行うルーターオブジェクトのメソッド

        // 遷移後の処理はPromiseじゃないので、任意で少し待ってからフラグ解除
        setTimeout(() => setIsAnimating(false), 1000); // 1秒後に解除（調整可）
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isAnimating, router]);

  return (
            <div className="contentBox">
                <h2 className="top">
                    <span className="job">Engineer</span><br></br>
                    MOE HATANAKA / Portfolio Site
                </h2>
                <div className="mainContent">
                    <section className="message">
                        <p>職業訓練校等でWebアプリケーション制作を学んでいます。</p>
                        <br></br>
                        <p>「あったらいいな」を形にすることで、<br></br>
                        クライアント様やユーザ様が<br></br>
                        一歩前に踏み出すアシストをしたいです。
                        </p>
                    </section>
                    <section className="scroll">
                        <p className="scrollText">Please Scroll</p><p className="scrollIcon"><CiCircleChevDown size={30}/></p>
                    </section>
                </div>
            </div>

  );
}




// useRouter
// 現在表示しているページの情報を取得したり（URL、パス名、クエリパラメータなど）、新しいページへ遷移したりします。
// これは例えば、特定のボタンをクリックしたときに別のページに移動させるといったことを可能にします。


// 初回レンダリング時に、useEffectの第一引数が実行され、windowにイベントを仕込み、クリーンアップ関数も設定される。
// wheelされると、handlewheel（1回目）が実行され、isAnimatingがtrueになり、
// クリーンアップ関数が実行されてイベントが削除された後、useEffectの第一引数が実行され、windowに再びイベントが仕込まれるが、
// このイベントが発火しても、handlewheel（2回目）はisAnimatingがtrueならreturnされる。
// クリーンアップ関数が実行されても、handlewheel（1回目）は消えずに続行され、router.pushと、setTimeoutが実行される。

// isAnimating を deps に入れないと、handleWheel 内の isAnimating は最新の state を反映できない
// の意味がわからない
// isAnimatingが変更されるだけで再レンダリングされてuseEffectが実行されるのに、依存配列に入れてる理由が不明。
