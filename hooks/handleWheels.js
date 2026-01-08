"use client";  // クライアントコンポーネントにする

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


export const useHandleWheels = () => {

    const router = useRouter(); // 現在のルーターオブジェクトを取得。（遷移や更新を行うためのメソッドだけを持つオブジェクト。現在のパスの値は持たない）
    const [isAnimating, setIsAnimating] = useState(false);
    const pathname = usePathname(); // 現在のURLを取得

    useEffect(() => {
        const handleWheel = (e) => {
            if (isAnimating) return;

            if (e.deltaY > 0) {
                setIsAnimating(true);

                if (pathname === "/") {
                    router.push("/works");
                } else if (pathname === "/works") {
                    router.push("/about");
                } else if (pathname === "/about") {
                    router.push("/skills");
                } else if (pathname === "/skills") {
                    router.push("/like");
                } else if (pathname === "/like") {
                    router.push("/");
                }

                setTimeout(() => setIsAnimating(false), 100);
            }
            if (e.deltaY < 0) {
                setIsAnimating(true);

                if (pathname === "/works") {
                    router.push("/");
                } else if (pathname === "/about") {
                    router.push("/works");
                } else if (pathname === "/skills") {
                    router.push("/about");
                } else if (pathname === "/like") {
                    router.push("/skills");
                }

                setTimeout(() => setIsAnimating(false), 100);
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: true });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [isAnimating, router]);

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
