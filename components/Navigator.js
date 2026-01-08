"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // App Routerで現在表示しているURLを取得するフック
import { VscMail } from "react-icons/vsc";

const Navigator = () => {

    const pathname = usePathname(); // 現在のURLを取得

    return (
            <nav>
                <ul>
                    <li className={pathname === "/" ? "active" : ""}><Link href="/">Top</Link></li>
                    <li className={pathname === "/works" ? "active" : ""}><Link href="/works">Works</Link></li>
                    <li className={pathname === "/about" ? "active" : ""}><Link href="/about">About</Link></li>
                    <li className={pathname === "/skills" ? "active" : ""}><Link href="/skills">Skills</Link></li>
                    <li className={pathname === "/like" ? "active" : ""}><Link href="/like">I Like</Link></li>
                </ul>
                <div className="contact">
                    <div className="fav" style={{backgroundImage:"url(favicon24.png)"}}></div>
                    <div className="mail"><a href="mailto:sprout.hatanaka@gmail.com"><VscMail size={25} color="#aaa"/></a></div>
                </div>
            </nav>
    )
}

export default Navigator;


// usePathname
// App Routerで現在表示しているURLを取得するフック。
// クライアントコンポーネントでのみ使用可能。
// パスが変更されると自動的に再レンダリングされ、最新の値を返す。
