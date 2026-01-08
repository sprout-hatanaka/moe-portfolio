"use client";  // クライアントコンポーネントにする

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export const useHandleWheels = () => {

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

}
