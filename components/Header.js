"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // App Routerで現在表示しているURLを取得するフック
import { Alumni_Sans_Pinstripe } from "next/font/google";
import { VscMail } from "react-icons/vsc";

const AlumniSansPinstripe = Alumni_Sans_Pinstripe({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
    const pathname = usePathname(); // 現在のURLを取得

    return (
        <header className="head">
            <Link href="/">
            <div className="logo">
                <h1 className= {AlumniSansPinstripe.className}>Portfolio<br></br>
                MOE HATANAKA</h1>
                <div className="tri1" style={{backgroundImage:"url(triangle1.svg)"}}></div>
                <div className="tri2" style={{backgroundImage:"url(triangle2.svg)"}}></div>
                <div className="tri3" style={{backgroundImage:"url(triangle3.svg)"}}></div>
            </div>
            </Link>


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
        </header>
    );
};

export default Header;


// usePathname
// App Routerで現在表示しているURLを取得するフック。
// クライアントコンポーネントでのみ使用可能。
// パスが変更されると自動的に再レンダリングされ、最新の値を返す。




// import { IoChevronDownCircleOutline } from "react-icons/io5";
// import { CiCircleChevDown } from "react-icons/ci";
